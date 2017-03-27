# report-cloudwatch-metrics

This utility will gather metric stats from across various services for a given date-time range and aggregate each set. It is initially being used for collecting backend metrics during performance testing.

This is a fork of the AWS SDK for Node.js [sample application](https://github.com/awslabs/aws-nodejs-sample.git).

## Requirements

The only requirement of this application is the Node Package Manager. All other
dependencies (including the AWS SDK for Node.js) can be installed with:

    npm install

## AWS Security Configuration

You need to set up your AWS security credentials before the code is able
to connect to AWS. You can do this by creating a file named "credentials" at ~/.aws/
(C:\Users\USER_NAME\.aws\ for Windows users) and saving the following lines in the file:

    [default]
    aws_access_key_id = <your access key id>
    aws_secret_access_key = <your secret key>

See the [Security Credentials](http://aws.amazon.com/security-credentials) page.
It's also possible to configure your credentials via a configuration file or
directly in source. See the AWS SDK for Node.js [Developer Guide](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html)
for more information.

## Report Configuration

Configuration of the report is done by maintaining the set of options for the call to [CloudWatch getMetricStatistics](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatch.html#getMetricStatistics-property).  These options have been split into a few different files to make things more maintainable.

To configure the name of the service and the stage, edit `service-and-stage.js`.  These values must match the values used for service name and stage in AWS.  They are used in metrics.js to assemble resource names.  They are also used to name the output files.

To configure which services and metrics to gather stats for, edit `metrics.js`.  It might be useful to consult the list of [AWS Namespaces](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-namespaces.html), [API Gateway Metrics and Dimensions](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/api-gateway-metrics-dimensions.html), [Lambda Metrics and Dimensions](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/lam-metricscollected.html), [DynamoDB Metrics and Dimensions](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/dynamo-metricscollected.html), [ElasticSearch Metrics and Dimensions](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/es-metricscollected.html), and/or [SNS Metrics and Dimensions](http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/sns-metricscollected.html).

To configure what period and stats to gather, edit `period-and-stats.js`.

To configure the date range, edit `date-range.js`.  These values should be in ISO 8601 format.

## Usage

To run the utility, execute the following:
`node report-cloudwatch-metrics.js`

A summary report is written to stdout in JSON format.  Both summary and detailed reports are written to /reports as JSON files.  A summary report is also written to /reports as a CSV file.  

## License

This application is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
