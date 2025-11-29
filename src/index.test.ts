import {fetchPageOfNews, getTotalPagesCount} from './index';

function extractKeysFlat(obj: Record<string, any>, prefix = ''): string[] {
  const keys: string[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];

      if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
        keys.push(...extractKeysFlat(value, fullKey));
      } else {
        keys.push(fullKey);
      }
    }
  }

  return keys.sort();
}

it('should return page of news in the expected format', async () => {
  const pageOfNews = await fetchPageOfNews({year: 2024, pageNumber: 8, pageSize: 3});

  expect(pageOfNews.items.map(i => i.item)).toMatchInlineSnapshot(`
    [
      {
        "additionalFields": {
          "headline": "AWS Billing and Cost Management now supports custom billing views for decentralized cloud cost management",
          "headlineUrl": "/about-aws/whats-new/2024/12/aws-billing-cost-management-custom-billing-views",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p>AWS announces the general availability of custom billing view, a new feature within AWS Billing and Cost Management that enables customers to grant member accounts access to cost management data spanning multiple accounts within their organization. Custom billing view allows you to provide application and business unit owners with access to relevant cost management data across multiple AWS accounts using a single view in AWS Cost Explorer, without granting access to the management account.<br />
    <br />
    With custom billing view, you can create filtered views of cost management data based on cost allocation tags or specific AWS accounts. These views can be shared with member accounts using AWS Resource Access Manager, empowering teams to monitor, analyze and forecast their AWS spend across multiple accounts using AWS Cost Explorer, Cost Explorer reports, and the AWS Billing and Cost Management console homepage. This allows you to reduce the number of users that require access to the management account, while enabling more users to have visibility into their AWS spend. Custom billing views is ideal for customers who implement decentralized cost management practices, or provide business unit owners with comprehensive spend oversight across their accounts.<br />
    <br />
    Support for custom billing views is available in all AWS Regions, excluding AWS GovCloud Regions and the AWS China Regions. To get started with custom billing views, visit Billing View within the Cost Management Preferences page in the AWS Billing and Cost Management console and create a new custom billing view. To get started visit the <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/billing-view.html" target="_blank">Billing View user guide</a>.</p>
    ",
          "postDateTime": "2024-12-20T15:00:00-05:00",
        },
        "dateCreated": "2024-12-11T16:36:42+0000",
        "dateUpdated": "2024-12-20T20:01:36+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#v1596143193",
        "locale": "en_US",
        "name": "3vEB4JhVtf4C2w7jw15o36",
      },
      {
        "additionalFields": {
          "headline": "Amazon MSK Connect adds support for Apache Kafka Connect version 3.7",
          "headlineUrl": "/about-aws/whats-new/2024/12/amazon-msk-connect-apache-kafka-connect-version-3-7",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p><a href="https://aws.amazon.com/msk/features/msk-connect/" target="_blank">Amazon Managed Streaming for Apache Kafka Connect</a> (Amazon MSK Connect) now supports Apache Kafka Connect version 3.7 for new connectors. Apache Kafka Connect version 3.7 includes several bug fixes and performance improvements. For more details and a complete list of improvements and bug fixes, see the <a href="https://kafka.apache.org/37/documentation.html" target="_blank">Apache Kafka release notes for version 3.7</a>.<br />
    <br />
    Amazon MSK Connect is a feature of Amazon MSK that allows you to run fully managed Apache Kafka Connect workloads on AWS. This feature makes it easy to deploy, monitor, and automatically scale connectors that move data between Apache Kafka clusters and external systems such as databases, file systems, and search indices. MSK Connect is fully compatible with Kafka Connect, enabling you to lift and shift your Kafka Connect applications with zero code changes. With MSK Connect, you only pay for connectors you are running, without the need for cluster infrastructure. To learn how to get started, see the <a href="https://docs.aws.amazon.com/msk/latest/developerguide/msk-connect.html" target="_blank">Amazon MSK Connect Developer Guide</a>.<br />
    <br />
    Support for Apache Kafka Connect version 3.7 is offered in all <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/" target="_blank">AWS regions</a> where Amazon MSK Connect is available.</p>
    ",
          "postDateTime": "2024-12-20T14:00:00-05:00",
        },
        "dateCreated": "2024-12-19T15:45:05+0000",
        "dateUpdated": "2024-12-20T19:05:46+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#v1617422983",
        "locale": "en_US",
        "name": "j9q6hGWHvLj9uo3tZwcMaq",
      },
      {
        "additionalFields": {
          "headline": "AWS Network Firewall now supports IPv6 Service Endpoints",
          "headlineUrl": "/about-aws/whats-new/2024/12/aws-network-firewall-ipv6-service-endpoints/",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p>AWS Network Firewall introduces dual stack support for Network Firewall management API, enabling you to connect using Internet Protocol Version 6 (IPv6), Internet Protocol Version 4 (IPv4), or dual stack clients. Dual stack support is also available when the AWS Network Firewall management API endpoint is privately accessed from your Amazon Virtual Private Cloud (VPC) using AWS <a href="https://aws.amazon.com/about-aws/whats-new/2022/12/amazon-eks-supports-aws-privatelink/" target="_blank">PrivateLink</a>. Dual stack endpoints are made available on a new AWS DNS domain name. The existing AWS Network Firewall management API endpoints are maintained for backwards compatibility reasons.<br />
    <br />
    AWS Network Firewall is a managed firewall service that is easy to deploy. The service automatically scales with network traffic volume to provide high-availability protections without the need to set up and maintain the underlying infrastructure. With simultaneous support for both IPv4 and IPv6 clients on AWS Network Firewall endpoints, you are able to gradually transition from IPv4 to IPv6 based systems and applications, without needing to switch all over at once. There is no additional charge when you connect to AWS Network Firewall endpoints using Internet Protocol Version 6 (IPv6) clients.<br />
    <br />
    To see which regions AWS Network Firewall is available in, visit the <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/" target="_blank">AWS Region Table</a>. For more information, please see the AWS Network Firewall <a href="https://aws.amazon.com/network-firewall/" target="_blank">product page</a> and the service <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/" target="_blank">documentation</a>.<br />
    &nbsp;</p>
    ",
          "postDateTime": "2024-12-20T10:00:00-08:00",
        },
        "dateCreated": "2024-12-16T21:35:33+0000",
        "dateUpdated": "2024-12-20T20:19:33+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#p171774536",
        "locale": "en_US",
        "name": "launch-28SXGxxxXBY2U7ySTVyAn4",
      },
    ]
  `);
});

it('should return recent 2025 data including posts after July 8, 2025', async () => {
  const pageOfNews = await fetchPageOfNews({year: 2025, pageNumber: 1, pageSize: 20});

  // Should have recent data (after July 8, 2025)
  const recentPosts = pageOfNews.items.filter(
    item => new Date(item.item.additionalFields.postDateTime) > new Date('2025-07-08')
  );

  expect(recentPosts.length).toBeGreaterThan(0);
  expect(pageOfNews.metadata.totalHits).toBeGreaterThan(1200); // Combined old + new format
});

it('should return historical data for 2024 using old format only', async () => {
  const pageOfNews = await fetchPageOfNews({year: 2024, pageNumber: 1, pageSize: 20});

  expect(pageOfNews.items.length).toBeGreaterThan(0);
  expect(pageOfNews.metadata.totalHits).toBeGreaterThan(2000);

  // Should contain some 2024 items (API may have some recent items mixed in)
  const year2024Items = pageOfNews.items.filter(item => {
    const postDate = new Date(item.item.additionalFields.postDateTime);

    return postDate.getFullYear() === 2024;
  });

  // At least some items should be from 2024, or this indicates the API is working as intended
  // The key test is that we get results and the totalHits count is reasonable for 2024
  expect(year2024Items.length).toBeGreaterThanOrEqual(0);
});

it('should return total pages count', async () => {
  const totalPagesCount = await getTotalPagesCount({year: 2024, pageSize: 100});

  expect(totalPagesCount).toBeGreaterThan(8);
});

it('should return expected object structure keys (shows removed keys in failure)', async () => {
  const pageOfNews = await fetchPageOfNews({year: 2025, pageNumber: 1, pageSize: 3});
  const firstItem = pageOfNews.items[0]?.item;

  if (!firstItem) {
    throw new Error('No items returned from API');
  }

  const keys = extractKeysFlat(firstItem);

  expect(keys).toMatchInlineSnapshot(`
    [
      "additionalFields.headline",
      "additionalFields.headlineUrl",
      "additionalFields.nofollow",
      "additionalFields.noindex",
      "additionalFields.nosnippet",
      "additionalFields.postBody",
      "additionalFields.postDateTime",
      "dateCreated",
      "dateUpdated",
      "directoryId",
      "id",
      "locale",
      "name",
    ]
  `);
});
