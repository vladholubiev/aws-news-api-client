import {fetchPageOfNews, getTotalPagesCount} from './index';

it('should return page of news in the expected format', async () => {
  const pageOfNews = await fetchPageOfNews({year: 2024, pageNumber: 8, pageSize: 3});

  expect(pageOfNews.items.map(i => i.item)).toMatchInlineSnapshot(`
    [
      {
        "additionalFields": {
          "headline": "AWS Neuron introduces support for Trainium2 and NxD Inference",
          "headlineUrl": "/about-aws/whats-new/2024/12/aws-neuron-trainium2-nxd-inference",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p>Today, AWS announces the release of <a href="https://awsdocs-neuron.readthedocs-hosted.com/en/latest/release-notes/index.html" target="_blank">Neuron 2.21</a>, introducing support for AWS Trainium2 chips and Amazon EC2 Trn2 instances, including the trn2.48xlarge instance type and Trn2 UltraServer. This release also adds support for PyTorch 2.5 and introduces NxD Inference and Neuron Profiler 2.0 (beta). <a href="https://awsdocs-neuron.readthedocs-hosted.com/en/latest/libraries/nxd-inference/index.html#nxdi-index" target="_blank">NxD Inference</a>, is a new PyTorch-based library integrated with vLLM, simplifies the deployment of large language and multi-modality models and enables PyTorch model onboarding with minimal code changes, and Neuron Profiler 2.0 (beta), is new profiler that enhances capabilities and usability, including support for distributed workloads.<br />
    <br />
    Neuron 2.21 also introduces Llama 3.1 405B model inference support using NxD Inference on a single trn2.48xlarge instance. The release updates Deep Learning Containers (DLCs) and Deep Learning AMIs (DLAMIs), and adds support for various model architectures, including Llama 3.2, Llama 3.3, and Mixture-of-Experts (MoE) models. New inference features include FP8 weight quantization and flash decoding for speculative decoding in Transformers NeuronX (TNx). Additionally, new training examples and features have been added, such as support for HuggingFace Llama 3/3.1 70B on Trn2 instances and DPO support for post-training model alignment.<br />
    <br />
    AWS Neuron SDK supports training and deploying models on Trn1, Trn2, and Inf2 instances, available in AWS Regions as On-Demand Instances, Reserved Instances, Spot Instances, or part of Savings Plan.<br />
    <br />
    For a full list of new features and enhancements in Neuron 2.21 and to get started with Neuron, see:</p>

    <ul>
    	<li><a href="https://awsdocs-neuron.readthedocs-hosted.com/en/latest/" target="_blank">AWS Neuron</a></li>
    	<li><a href="https://aws.amazon.com/ec2/instance-types/trn2/" target="_blank">Trn2 Instances</a></li>
    	<li><a href="https://aws.amazon.com/ec2/instance-types/trn1/" target="_blank">Trn1 Instances</a></li>
    	<li><a href="https://aws.amazon.com/ec2/instance-types/inf2/" target="_blank">Inf2 Instances</a></li>
    </ul>
    ",
          "postDateTime": "2024-12-23T13:00:00-05:00",
        },
        "dateCreated": "2024-12-20T18:47:31+0000",
        "dateUpdated": "2024-12-23T18:51:04+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#p180320882",
        "locale": "en_US",
        "name": "uRYJByhWKzVK6EHcA2jTUD",
      },
      {
        "additionalFields": {
          "headline": "AWS Systems Manager for SAP now supports SAP NetWeaver based ABAP applications deployed in distributed and HA topologies",
          "headlineUrl": "/about-aws/whats-new/2024/12/aws-systems-manager-sap-netweaver-based-abap-applications-deployed-distributed-ha-topologies",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p>AWS Systems Manager for SAP includes capabilities to now support registration of SAP NetWeaver ABAP-based applications, deployed in distributed and Highly Available (HA) topologies. This enhancement covers a wide range of applications, including S/4HANA and BW/4HANA, and extends support to additional application servers and web dispatcher components. With this launch, customers can automate start and stop operations for ABAP based SAP applications running on distributed and HA architectures. This new functionality simplifies the management of complex SAP landscapes, improves operational efficiency through automation, and provides enhanced support for high-availability configurations.<br />
    <br />
    AWS Systems Manager for SAP is an automation capability to manage and operate your SAP applications on AWS. It provides a seamless integration between AWS services and SAP applications running on AWS. Registering SAP applications to AWS Systems Manager for SAP allows automation such as enabling backup, start/stop for the applications and associated EC2 instances. In addition, as part of the SSM Application Manager console integration, customers can get details of the resources being consumed by the SAP applications such as EC2 instances, EBS volumes and the associated costs incurred at an application level.<br />
    <br />
    AWS Systems Manager for SAP is available in all commercial regions. To learn about the key features, check out the <a href="https://docs.aws.amazon.com/ssm-sap/latest/userguide/what-is-ssm-for-sap.html" target="_blank">product documentation page</a>. To learn why thousands of SAP customers trust AWS, visit the <a href="https://aws.amazon.com/sap/" target="_blank">SAP on AWS page</a>.</p>
    ",
          "postDateTime": "2024-12-23T13:00:00-05:00",
        },
        "dateCreated": "2024-12-19T15:52:55+0000",
        "dateUpdated": "2024-12-23T18:10:44+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#p176546368",
        "locale": "en_US",
        "name": "1fhCPRXfPXAD4ZZrFt5tdm",
      },
      {
        "additionalFields": {
          "headline": "AWS announces notification actions in the AWS Console Mobile App for iOS",
          "headlineUrl": "/about-aws/whats-new/2024/12/aws-notification-actions-aws-console-mobile-app-ios",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p>Today, Amazon Web Services (AWS) is announcing the general availability of notification actions in the AWS Console Mobile Application for iOS. Notification action buttons are displayed on the notification details screen when you receive a push notification from <a href="https://aws.amazon.com/notifications/" target="_blank">AWS User Notifications</a> on your mobile device. AWS customers can take actions like view logs, start, stop, or reboot an EC2 instance on an event notification to shorten incident response diagnosis and resolution times.<br />
    <br />
    With notification actions, you can quickly run common DevOps tasks based on your IAM permissions using notification action buttons. Notification actions are displayed automatically on notifications based on the state of the AWS resource. Using notification actions for event notifications, you can restart an EC2 instance the moment you receive an EC2 instance terminated push notification on your mobile device or get more information about an event notification without needing to return to your computer.<br />
    <br />
    The Console Mobile App lets users view and manage a select set of resources to stay informed and connected with their AWS resources while on-the-go. Visit the <a href="https://aws.amazon.com/console/mobile/" target="_blank">product page</a> for more information about the Console Mobile Application.</p>
    ",
          "postDateTime": "2024-12-23T13:00:00-05:00",
        },
        "dateCreated": "2024-12-19T19:48:55+0000",
        "dateUpdated": "2024-12-23T18:18:05+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#p165712166",
        "locale": "en_US",
        "name": "pGmNYYJvpLwUEM5JoeUF8b",
      },
    ]
  `);
});

it('should return page of news in the expected format from 2025', async () => {
  const pageOfNews = await fetchPageOfNews({year: 2025, pageNumber: 1, pageSize: 3});

  expect(pageOfNews.items.map(i => i.item)).toMatchInlineSnapshot(`
    [
      {
        "additionalFields": {
          "headline": "Amazon EC2 R8g instances now available in additional regions",
          "headlineUrl": "/about-aws/whats-new/2025/07/amazon-ec2-r8g-instances-additional-regions",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p>Starting today, Amazon Elastic Compute Cloud (Amazon EC2) R8g instances are available in Asia Pacific (Seoul), and AWS Asia Pacific (Malaysia) regions. These instances are powered by AWS Graviton4 processors and deliver up to 30% better performance compared to AWS Graviton3-based instances. Amazon EC2 R8g instances are ideal for memory-intensive workloads such as databases, in-memory caches, and real-time big data analytics. These instances are built on the <a href="https://aws.amazon.com/ec2/nitro/" target="_blank">AWS Nitro System</a>, which oﬄoads CPU virtualization, storage, and networking functions to dedicated hardware and software to enhance the performance and security of your workloads.<br />
    <br />
    AWS Graviton4-based Amazon EC2 instances deliver the best performance and energy efficiency for a broad range of workloads running on Amazon EC2. AWS Graviton4-based R8g instances offer larger instance sizes with up to 3x more vCPU (up to 48xlarge) and memory (up to 1.5TB) than Graviton3-based R7g instances. These instances are up to 30% faster for web applications, 40% faster for databases, and 45% faster for large Java applications compared to AWS Graviton3-based R7g instances. R8g instances are available in 12 different instance sizes, including two bare metal sizes. They offer up to 50 Gbps enhanced networking bandwidth and up to 40 Gbps of bandwidth to the Amazon Elastic Block Store (Amazon EBS).<br />
    <br />
    To learn more, see <a href="https://aws.amazon.com/ec2/instance-types/r8g/" target="_blank">Amazon EC2 R8g Instances</a>. To explore how to migrate your workloads to Graviton-based instances, see <a href="https://aws.amazon.com/ec2/graviton/fast-start/" target="_blank">AWS Graviton Fast Start program</a> and <a href="https://github.com/aws/porting-advisor-for-graviton" target="_blank">Porting Advisor for Graviton</a>. To get started, see the <a href="https://console.aws.amazon.com/" target="_blank">AWS Management Console</a>.</p>
    ",
          "postDateTime": "2025-07-03T18:00:00-04:00",
        },
        "dateCreated": "2025-06-27T15:26:53+0000",
        "dateUpdated": "2025-07-03T22:05:34+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#p259822440",
        "locale": "en_US",
        "name": "13P1aAp7eHqfD1k3LvHVf1",
      },
      {
        "additionalFields": {
          "headline": "Amazon SNS now supports delivery to Amazon Data Firehose in three additional AWS Regions",
          "headlineUrl": "/about-aws/whats-new/2025/07/amazon-sns-data-firehose-additional-aws-regions",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p><a href="https://aws.amazon.com/sns/" target="_blank">Amazon Simple Notification Services (Amazon SNS)</a> now supports notification delivery to Amazon Data Firehose endpoints in three additional AWS Regions, Asia Pacific (Taipei), Asia Pacific (Thailand) and Mexico (Central) Regions.<br />
    <br />
    You can now use Amazon SNS to deliver notifications to Amazon Data Firehose (Firehose) endpoints for storage and analysis. Through Firehose delivery streams, customers can deliver events to AWS destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Redshift, and Amazon OpenSearch Service, or to third-party destinations such as Datadog, New Relic, MongoDB, and Splunk.<br />
    <br />
    To get started, see the following resources:</p>

    <ul>
    	<li><a href="https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html" target="_blank">Fanout to Firehose delivery streams</a> in the <em>Amazon SNS Developer Guide</em>.</li>
    	<li><a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html" target="_blank">Create Firehose Stream</a> in the<em><em> </em>Amazon Data Firehose Developer Guide</em>.</li>
    	<li><a href="https://aws.amazon.com/sns/pricing/#Standard_topics" target="_blank">SNS pricing for deliveries to Amazon Data Firehose</a> in the <em>Amazon SNS Pricing Page</em>.</li>
    </ul>
    ",
          "postDateTime": "2025-07-03T17:59:00-04:00",
        },
        "dateCreated": "2025-07-01T18:54:52+0000",
        "dateUpdated": "2025-07-03T22:03:16+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#p247066227",
        "locale": "en_US",
        "name": "g3LiLnGSov9a7gX73hkgfW",
      },
      {
        "additionalFields": {
          "headline": "AWS Fargate now supports SOCI Index Manifest v2 for greater deployment consistency",
          "headlineUrl": "/about-aws/whats-new/2025/07/aws-fargate-soci-index-manifest-v2-deployment-consistency",
          "nofollow": "0",
          "noindex": "0",
          "nosnippet": "0",
          "postBody": "<p>Amazon ECS customers using AWS Fargate launch mode now benefit from improved deployment consistency with SOCI Index Manifest v2 support. <a href="https://github.com/awslabs/soci-snapshotter" target="_blank">Seekable OCI (SOCI)</a> accelerates Amazon ECS task launches by enabling containers to start running before the full container image is downloaded. SOCI Index Manifest v2 uses a cryptographic method to establish an explicit link between the image and its manifest, ensuring integrity and consistency during and across all deployment stages.<br />
    <br />
    To get started, create a SOCI index using the new convert subcommand in the soci CLI, available from the <a href="https://github.com/awslabs/soci-snapshotter" target="_blank">SOCI Snapshotter GitHub repository</a>. Once generated, push the container image along with the SOCI index to your Amazon ECR repository, and use it to launch Amazon ECS tasks on AWS Fargate.<br />
    <br />
    As of today, SOCI Index Manifest v2 is the default mechanism for using SOCI with ECS and Fargate. If you&#39;re still using the legacy Manifest v1 implementation, we recommend upgrading to take advantage of the improved reliability and consistency. For more information, see the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html" target="_blank">documentation on using SOCI Index Manifest v2 with Amazon ECS and AWS Fargate</a> and the <a href="https://aws.amazon.com/blogs/containers/improving-amazon-ecs-deployment-consistency-with-soci-index-manifest-v2" target="_blank">blog post</a>.</p>
    ",
          "postDateTime": "2025-07-03T15:30:00-04:00",
        },
        "dateCreated": "2025-06-12T16:14:56+0000",
        "dateUpdated": "2025-07-03T19:35:10+0000",
        "directoryId": "whats-new-v2",
        "id": "whats-new-v2#p246039443",
        "locale": "en_US",
        "name": "sUBkGDh3WW7GzjvfbwQqKs",
      },
    ]
  `);
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
