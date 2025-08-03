export type AWSNewsAPIPageResponse = {
  metadata: {count: number; totalHits: number};
  fieldTypes: {
    contentType: string;
    headline: string;
    headlineUrl: string;
    modifiedDate: string;
    nofollow: string;
    noindex: string;
    nosnippet: string;
    postBody: string;
    postDateTime: string;
    postSummary: string;
    regionalAvailability: string;
    Video: string;
    videoImageUrl: string;
  };
  items: Item[];
};

type Item = {
  item: PostItem;
  tags: Tag[];
};

export type Tag = {
  createdBy: string;
  dateCreated: string;
  dateUpdated: string;
  description: string;
  id: string;
  lastUpdatedBy: string;
  locale: string;
  name: string;
  tagNamespaceId: string;
};

type PostItem = {
  id: string;
  locale: string;
  directoryId: string;
  name: string;
  author?: string;
  createdBy?: string;
  lastUpdatedBy?: string;
  dateCreated: string;
  dateUpdated: string;
  additionalFields: {
    regionalAvailability?: string;
    nofollow: string;
    noindex: string;
    postBody: string;
    nosnippet: string;
    headlineUrl: string;
    postDateTime: string;
    contentType?: string;
    headline: string;
  };
};
