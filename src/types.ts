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
  id: string;
  locale: string;
  name: string;
  tagNamespaceId: string;
  description?: string;
  dateCreated?: string;
  dateUpdated?: string;
  createdBy?: string;
  lastUpdatedBy?: string;
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
    headline?: string;
    headlineUrl?: string;
    postBody?: string;
    postDateTime?: string;
    postSummary?: string;
    modifiedDate?: string;
    contentType?: string;
    regionalAvailability?: string;
    videoImageUrl?: string;
    Video?: string;
    nofollow?: string;
    noindex?: string;
    nosnippet?: string;
  };
};
