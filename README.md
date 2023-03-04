# aws-news-api-client [![CircleCI](https://circleci.com/gh/vladgolubev/aws-news-api-client/tree/master.svg?style=svg)](https://circleci.com/gh/shelfio/aws-news-api-client/tree/master)![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> AWS News API Client with retry behavior

## Install

```
$ yarn add @vladholubiev/aws-news-api-client
```

## Usage

```js
const {
  fetchPageOfNews,
  getTotalPagesCount,
  getYearsWithData,
} = require('@vladholubiev/aws-news-api-client');

// fetches 100 news from 2023
// page numbering starts from 1
await fetchPageOfNews({year: 2023, pageNumber: 1, pageSize: 100});

// returns total number of pages for 2023, useful for iteration with the fetchPageOfNews method
await getTotalPagesCount({year: 2023, pageSize: 100});

getYearsWithData(); // returns array of years with news from 2004 till now
```

`fetchPageOfNews` has retry logic, so it will retry a request for up to 5 times.

**Note:** API doesn't return more than 100th page. In 2022 there were 2103 news. So if your page size is 100, you will get 21 pages.
Don't select page size < 22, otherwise you'll not get all the news.

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT
