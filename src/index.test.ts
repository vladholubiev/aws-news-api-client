import {fetchPageOfNews, getTotalPagesCount} from './index';

it('should return page of news in the expected format', async () => {
  const pageOfNews = await fetchPageOfNews({year: 2024, pageNumber: 8, pageSize: 3});

  expect(pageOfNews.items.map(i => i.item)).toMatchInlineSnapshot(`
    [
      {
        "additionalFields": {
          "contentType": "Launch Announcement",
          "headline": "Amazon EC2 C6id instances are now available in Canada (Central) region",
          "headlineUrl": "/about-aws/whats-new/2024/06/amazon-ec2-instances-canada-central-region/",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p>Starting today, <a href="https://aws.amazon.com/ec2/instance-types/c6i/" target="_blank">Amazon Elastic Compute Cloud (Amazon EC2) C6id instances</a> are available in Canada (Central) Region. These instances are powered by 3rd generation Intel Xeon Scalable Ice Lake processors with an all-core turbo frequency of 3.5 GHz and up to 7.6 TB of local NVMe-based SSD block-level storage. C6id instances are built on <a href="https://aws.amazon.com/ec2/nitro/" target="_blank">AWS Nitro System</a>, a combination of dedicated hardware and lightweight hypervisor, which delivers practically all of the compute and memory resources of the host hardware to your instances for better overall performance and security. Customers can take advantage of access to high-speed, low-latency local storage for compute-intensive workloads, such as batch processing, distributed analytics, high performance computing (HPC), ad serving, highly scalable multiplayer gaming, and video encoding.<br />
    <br />
    These instances are generally available today in the US (Ohio, N.Virginia, Oregon), Canada (Calgary, Central), Asia Pacific (Tokyo, Sydney, Seoul, Singapore), Europe (Ireland, Frankfurt, London), Israel (Tel Aviv), and AWS GovCloud (US-West) <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/" target="_blank">Regions</a>.<br />
    <br />
    Customers can purchase the new instances via Savings Plans, Reserved, On-Demand, and Spot instances. To learn more, see <a href="https://aws.amazon.com/ec2/instance-types/c6i/" target="_blank">Amazon C6id instances</a>. To get started, visit <a href="https://aws.amazon.com/cli/" target="_blank">AWS Command Line Interface (CLI)</a>, and <a href="http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html" target="_blank">AWS SDKs</a>.</p>
    ",
          "postDateTime": "2024-06-05T10:00:00-07:00",
        },
        "author": "gilsimm",
        "createdBy": "gilsimm",
        "dateCreated": "2024-05-20T20:46:07+0000",
        "dateUpdated": "2024-06-05T17:08:25+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#p128837820",
        "lastUpdatedBy": "gilsimm",
        "locale": "en_US",
        "name": "wTbxfX4uXcLEx4G5E4tYvP",
      },
      {
        "additionalFields": {
          "contentType": "Launch Announcement",
          "headline": "AWS HealthImaging now publishes events to Amazon EventBridge",
          "headlineUrl": "/about-aws/whats-new/2024/06/aws-healthimaging-publishes-events-eventbridge",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p>AWS HealthImaging now supports event-driven architectures by sending event notifications to Amazon EventBridge. By subscribing to HealthImaging events in EventBridge, you can automatically kick-off application workflows such as image quality assessment or de-identification based upon changes to resources in the data store. With EventBridge, developers can take advantage of a serverless event bus to easily connect and route events between many AWS services and third-party applications. Developers working with HealthImaging can now receive state changes for asynchronous tasks, such as DICOM import jobs and image set copy and update operations. Events are delivered to EventBridge in near real-time, and developers can write simple rules to listen for specific events.<br />
    <br />
    AWS HealthImaging is a HIPAA-eligible service that empowers healthcare providers and their software partners to store, analyze, and share medical images at petabyte scale. With AWS HealthImaging, you can run your medical imaging applications at scale from a single, authoritative copy of each medical image in the cloud, while reducing total cost of ownership.<br />
    <br />
    AWS HealthImaging is generally available in the following <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/" target="_blank">AWS Regions</a>: US East (N. Virginia), US West (Oregon), Asia Pacific (Sydney), and Europe (Ireland).<br />
    <br />
    To learn more, visit <a href="https://aws.amazon.com/healthimaging/" target="_blank">AWS HealthImaging</a>.<br />
    &nbsp;</p>
    ",
          "postDateTime": "2024-06-05T10:00:00-07:00",
        },
        "author": "gilsimm",
        "createdBy": "gilsimm",
        "dateCreated": "2024-06-03T16:27:14+0000",
        "dateUpdated": "2024-06-05T19:38:28+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#p129938170",
        "lastUpdatedBy": "gilsimm",
        "locale": "en_US",
        "name": "launch-bvxH1u7XMKqDmrVxkVXUMZ",
      },
      {
        "additionalFields": {
          "contentType": "launch announcement",
          "headline": "Introducing Amazon EMR Serverless Streaming jobs for continuous processing on streaming data",
          "headlineUrl": "/about-aws/whats-new/2024/06/amazon-emr-serverless-streaming-jobs-continuous-processing",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p><a href="https://aws.amazon.com/emr/serverless/" target="_blank">Amazon EMR Serverless</a> is a serverless option in Amazon EMR that makes it simple for data engineers and data scientists to run open-source big data analytics frameworks without configuring, managing, and scaling clusters or servers. We are excited to announce a new streaming job mode on Amazon EMR Serverless, enabling you to continuously analyze and process streaming data.<br />
    Streaming has become vital for businesses to gain continuous insights from data sources like sensors, IoT devices, and web logs. However, processing streaming data can be challenging due to requirements such as high availability, resilience to failures, and integration with streaming services. Amazon EMR Serverless Streaming jobs has built-in features to addresses these challenges. It offers high availability through multi-AZ (Availability Zone) resiliency by automatically failing over to healthy AZs. It also offers increased resiliency through automatic job retries on failures and log management features like log rotation and compaction, preventing the accumulation of log files that might lead to job failures. In addition, Amazon EMR Serverless Streaming jobs support processing data from streaming services like self-managed Apache Kafka clusters, Amazon Managed Streaming for Apache Kafka, and now is integrated with Amazon Kinesis Data Streams using a new built-in <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-structured-streaming-kinesis.html" target="_blank">Amazon Kinesis Data Streams Connector</a>, making it easier to build end-to-end streaming pipelines.</p>
    ",
          "postDateTime": "2024-06-04T16:00:00-04:00",
          "regionalAvailability": "<p>Amazon EMR Serverless Streaming jobs is generally available on EMR release versions 7.1.0 and later and in the following AWS Regions: US East (N. Virginia, Ohio), US West (Oregon), Europe (Stockholm, Paris, Frankfurt, Ireland, London), South America (S&atilde;o Paulo) and Asia Pacific (Tokyo, Seoul, Singapore, Mumbai, Sydney). To get started, visit the<a href="https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/jobs-streaming.html" target="_blank"> Amazon EMR Serverless Streaming jobs</a> page in the Amazon EMR Serverless User Guide.</p>
    ",
        },
        "author": "morrette",
        "createdBy": "morrette",
        "dateCreated": "2024-06-03T17:12:12+0000",
        "dateUpdated": "2024-06-04T20:06:40+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#v1342859142",
        "lastUpdatedBy": "morrette",
        "locale": "en_US",
        "name": "bKiV4RSuZEbNU5ocXEqXhM",
      },
    ]
  `);
});

it('should return total pages count', async () => {
  const totalPagesCount = await getTotalPagesCount({year: 2024, pageSize: 100});

  expect(totalPagesCount).toBeGreaterThan(8);
});
