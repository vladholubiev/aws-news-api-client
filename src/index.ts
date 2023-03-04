import {URL} from 'url';
import pRetry from 'p-retry';
import type {AWSNewsAPIPageResponse} from './types';

export type {AWSNewsAPIPageResponse} from './types';

export function fetchPageOfNews(
  pageNumber: number,
  pageSize = 100
): Promise<AWSNewsAPIPageResponse> {
  return pRetry(() => fetchPageOfNewsBare(pageNumber, pageSize), {
    forever: false,
    retries: 5,
    maxTimeout: 5 * 1000,
    factor: 1.3,
  });
}

async function fetchPageOfNewsBare(
  pageNumber: number,
  pageSize = 100
): Promise<AWSNewsAPIPageResponse> {
  const url = new URL('https://aws.amazon.com/api/dirs/items/search');

  url.searchParams.set('item.directoryId', 'whats-new');
  url.searchParams.set('sort_by', 'item.additionalFields.postDateTime');
  url.searchParams.set('sort_order', 'desc');
  url.searchParams.set('size', pageSize.toString());
  url.searchParams.set('item.locale', 'en_US');
  url.searchParams.set('page', pageNumber.toString());

  return (await fetch(url)).json();
}

export async function getTotalPagesCount(pageSize: number): Promise<number> {
  const firstPage = await fetchPageOfNewsBare(1, 1);

  return Math.ceil(firstPage.metadata.totalHits / pageSize);
}
