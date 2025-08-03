import {URL} from 'url';
import pRetry from 'p-retry';
import type {AWSNewsAPIPageResponse} from './types';

export type {AWSNewsAPIPageResponse} from './types';
export {getYearsWithData} from './helpers';

export function fetchPageOfNews(params: {
  year: number; // year parameter is needed, b/c API doesn't return beyond 100th page
  pageNumber: number;
  pageSize: number;
}): Promise<AWSNewsAPIPageResponse> {
  return pRetry(() => fetchPageOfNewsBare(params), {
    forever: false,
    retries: 5,
    maxTimeout: 5 * 1000,
    factor: 1.3,
  });
}

async function fetchWithTagFormat(params: {
  year: number;
  pageNumber: number;
  pageSize: number;
  tagFormat: 'old' | 'new';
}): Promise<AWSNewsAPIPageResponse> {
  const {year, pageSize, pageNumber, tagFormat} = params;
  const url = new URL('https://aws.amazon.com/api/dirs/items/search');

  url.searchParams.set('item.directoryId', 'whats-new-v2');
  url.searchParams.set('sort_by', 'item.additionalFields.postDateTime');
  url.searchParams.set('sort_order', 'desc');
  url.searchParams.set('item.locale', 'en_US');
  url.searchParams.set('size', pageSize.toString());
  url.searchParams.set('page', (pageNumber - 1).toString());
  
  const tagId = tagFormat === 'old' 
    ? `whats-new-v2#year#${year}`
    : `GLOBAL#local-tags-whats-new-v2-year#${year}`;
  
  url.searchParams.set('tags.id', tagId);

  return (await fetch(url)).json();
}

function mergeAndDeduplicateResults(
  oldFormatResult: AWSNewsAPIPageResponse,
  newFormatResult: AWSNewsAPIPageResponse
): AWSNewsAPIPageResponse {
  const seenIds = new Set<string>();
  const mergedItems = [];

  // Add items from old format first (maintains primary sorting)
  for (const item of oldFormatResult.items) {
    if (!seenIds.has(item.item.id)) {
      seenIds.add(item.item.id);
      mergedItems.push(item);
    }
  }

  // Add items from new format that aren't already included
  for (const item of newFormatResult.items) {
    if (!seenIds.has(item.item.id)) {
      seenIds.add(item.item.id);
      mergedItems.push(item);
    }
  }

  // Sort merged items by postDateTime (desc) to maintain consistent ordering
  mergedItems.sort((a, b) => {
    const dateA = new Date(a.item.additionalFields.postDateTime);
    const dateB = new Date(b.item.additionalFields.postDateTime);
    return dateB.getTime() - dateA.getTime();
  });

  return {
    metadata: {
      count: mergedItems.length,
      totalHits: oldFormatResult.metadata.totalHits + newFormatResult.metadata.totalHits
    },
    fieldTypes: oldFormatResult.fieldTypes,
    items: mergedItems
  };
}

async function fetchPageOfNewsBare(params: {
  year: number;
  pageNumber: number;
  pageSize: number;
}): Promise<AWSNewsAPIPageResponse> {
  const {year, pageSize, pageNumber} = params;

  // Smart format selection based on year
  if (year <= 2024) {
    // Historical data: use old format only
    return fetchWithTagFormat({...params, tagFormat: 'old'});
  }
  
  if (year >= 2026) {
    // Future data: use new format only
    return fetchWithTagFormat({...params, tagFormat: 'new'});
  }
  
  // Year 2025: transition year, try both formats and merge
  const oldFormatResult = await fetchWithTagFormat({...params, tagFormat: 'old'});
  const newFormatResult = await fetchWithTagFormat({...params, tagFormat: 'new'});
  
  // If both have data, merge them
  if (oldFormatResult.items.length > 0 && newFormatResult.items.length > 0) {
    return mergeAndDeduplicateResults(oldFormatResult, newFormatResult);
  }
  
  // If only one has data, return that one
  if (oldFormatResult.items.length > 0) {
    return oldFormatResult;
  }
  
  if (newFormatResult.items.length > 0) {
    return newFormatResult;
  }
  
  // If neither has data, return the old format result (maintains original behavior)
  return oldFormatResult;
}

export async function getTotalPagesCount(params: {
  year: number;
  pageSize: number;
}): Promise<number> {
  const {year, pageSize} = params;
  const firstPage = await fetchPageOfNewsBare({year, pageNumber: 1, pageSize});

  return Math.ceil(firstPage.metadata.totalHits / pageSize);
}
