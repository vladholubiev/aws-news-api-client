export type AWSNewsAPIPageResponse = {
  metadata: {count: number; totalHits: number};
  fieldTypes: {
    relatedBlog: string;
    postBody: string;
    modifiedDate: string;
    headlineUrl: string;
    postDateTime: string;
    postSummary: string;
    headline: string;
    contentType: string;
  };
  items: Item[];
};

type Item = {
  tags: Tag[];
  item: PostItem;
};

export type Tag = {
  tagNamespaceId: string;
  createdBy: string;
  name: string;
  dateUpdated: string;
  locale: string;
  lastUpdatedBy: string;
  dateCreated: string;
  description: string;
  id: string;
};

type PostItem = {
  createdBy: string;
  locale: string;
  author: string;
  dateUpdated: string;
  score: number;
  numImpressions: number;
  name: string;
  dateCreated: string;
  id: string;
  directoryId: string;
  lastUpdatedBy: string;
  additionalFields: {
    postBody: string;
    modifiedDate: string;
    headlineUrl: string;
    postDateTime: string;
    postSummary: string;
    contentType: string;
    headline: string;
  };
};
