import {fetchPageOfNews, getTotalPagesCount} from './index';

it('should return page of news in the expected format', async () => {
  const pageOfNews = await fetchPageOfNews({year: 2023, pageNumber: 1, pageSize: 10});

  expect(pageOfNews).toEqual(
    expect.objectContaining({
      metadata: {
        count: expect.any(Number),
        totalHits: expect.any(Number),
      },
      fieldTypes: expect.any(Object),
      items: expect.arrayContaining([
        expect.objectContaining({
          tags: expect.arrayContaining([expect.any(Object)]),
          item: expect.objectContaining({
            id: expect.any(String),
          }),
        }),
      ]),
    })
  );
});

it('should return total pages count', async () => {
  const totalPagesCount = await getTotalPagesCount({year: 2022, pageSize: 100});

  expect(totalPagesCount).toBeGreaterThan(10);
});
