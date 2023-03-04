import {URL} from 'url';
import type {APIResponse} from './types';

export async function fetchPageOfNews(page: number, size = 100): Promise<APIResponse> {
  const url = new URL('https://aws.amazon.com/api/dirs/items/search');

  url.searchParams.set('item.directoryId', 'whats-new');
  url.searchParams.set('sort_by', 'item.additionalFields.postDateTime');
  url.searchParams.set('sort_order', 'desc');
  url.searchParams.set('size', size.toString());
  url.searchParams.set('item.locale', 'en_US');
  url.searchParams.set('page', page.toString());

  return (await fetch(url)).json();
}
