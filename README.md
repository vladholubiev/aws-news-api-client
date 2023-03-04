# aws-news-api-client [![CircleCI](https://circleci.com/gh/shelfio/aws-news-api-client/tree/master.svg?style=svg)](https://circleci.com/gh/shelfio/aws-news-api-client/tree/master)![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> aws-news-api-client description

## Install

```
$ yarn add aws-news-api-client
```

## Usage

```js
const {fetchPageOfNews, getTotalPagesCount} = require('aws-news-api-client');

await fetchPageOfNews(1, 50); // page, pageSize
await getTotalPagesCount(50); // pageSize
```

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT
