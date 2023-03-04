import {URL} from 'url';
import pRetry from 'p-retry';
import type {AWSNewsAPIPageResponse} from './types';

export type {AWSNewsAPIPageResponse} from './types';

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

async function fetchPageOfNewsBare(params: {
  year: number;
  pageNumber: number;
  pageSize: number;
}): Promise<AWSNewsAPIPageResponse> {
  const {year, pageSize, pageNumber} = params;
  const url = new URL('https://aws.amazon.com/api/dirs/items/search');

  url.searchParams.set('item.directoryId', 'whats-new');
  url.searchParams.set('sort_by', 'item.additionalFields.postDateTime');
  url.searchParams.set('sort_order', 'desc');
  url.searchParams.set('size', pageSize.toString());
  url.searchParams.set('item.locale', 'en_US');
  url.searchParams.set('page', pageNumber.toString());
  url.searchParams.set('tags.id', `whats-new#year#${year}`);

  return (await fetch(url)).json();
}

export async function getTotalPagesCount(params: {
  year: number;
  pageSize: number;
}): Promise<number> {
  const {year, pageSize} = params;
  const firstPage = await fetchPageOfNewsBare({year, pageNumber: 1, pageSize});

  return Math.ceil(firstPage.metadata.totalHits / pageSize);
}
