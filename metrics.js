module.exports = [
  {
    MetricName: 'Latency', /* required */
    Namespace: 'AWS/ApiGateway', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: 'perf-attributes' /* required */
      }
    ]
  },
  {
    MetricName: 'IntegrationLatency', /* required */
    Namespace: 'AWS/ApiGateway', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: 'perf-attributes' /* required */
      }
    ]
  },
  {
    MetricName: 'Duration', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: 'attributes-perf-api' /* required */
      }
    ]
  },
  {
    MetricName: 'Throttles', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: 'attributes-perf-api' /* required */
      }
    ]
  },
  {
    MetricName: 'Errors', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: 'attributes-perf-api' /* required */
      }
    ]
  },
  {
    MetricName: 'Duration', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: 'attributes-perf-publish-events' /* required */
      }
    ]
  },
  {
    MetricName: 'Throttles', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: 'attributes-perf-publish-events' /* required */
      }
    ]
  },
  {
    MetricName: 'Errors', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: 'attributes-perf-publish-events' /* required */
      }
    ]
  },
  {
    MetricName: 'Duration', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: 'attributes-perf-attributesToECS' /* required */
      }
    ]
  },
  {
    MetricName: 'Throttles', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: 'attributes-perf-attributesToECS' /* required */
      }
    ]
  },
  {
    MetricName: 'Errors', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: 'attributes-perf-attributesToECS' /* required */
      }
    ]
  },
  {
    MetricName: 'ConsumedReadCapacityUnits', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: 'attributes-service-perf_Definitions' /* required */
      }
    ]
  },
  {
    MetricName: 'SuccessfulRequestLatency', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: 'attributes-service-perf_Definitions' /* required */
      },
      {
        Name: 'Operation', /* required */
        Value: 'GetItem' /* required */
      }
    ]
  },
  {
    MetricName: 'ConsumedReadCapacityUnits', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: 'attributes-service-perf_Values' /* required */
      }
    ]
  },
  {
    MetricName: 'ConsumedWriteCapacityUnits', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: 'attributes-service-perf_Values' /* required */
      }
    ]
  },
  {
    MetricName: 'ConditionalCheckFailedRequests', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: 'attributes-service-perf_Values' /* required */
      }
    ]
  },
  {
    MetricName: 'WriteThrottleEvents', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: 'attributes-service-perf_Values' /* required */
      }
    ]
  },
  {
    MetricName: 'SystemErrors', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: 'attributes-service-perf_Values' /* required */
      },
      {
        Name: 'Operation', /* required */
        Value: 'UpdateItem' /* required */
      }
    ]
  },
  {
    MetricName: 'SuccessfulRequestLatency', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: 'attributes-service-perf_Values' /* required */
      },
      {
        Name: 'Operation', /* required */
        Value: 'DeleteItem' /* required */
      }
    ]
  },
  {
    MetricName: 'SuccessfulRequestLatency', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: 'attributes-service-perf_Values' /* required */
      },
      {
        Name: 'Operation', /* required */
        Value: 'GetItem' /* required */
      }
    ]
  },
  {
    MetricName: 'SuccessfulRequestLatency', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: 'attributes-service-perf_Values' /* required */
      },
      {
        Name: 'Operation', /* required */
        Value: 'PutItem' /* required */
      }
    ]
  },
  {
    MetricName: 'SuccessfulRequestLatency', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: 'attributes-service-perf_Values' /* required */
      },
      {
        Name: 'Operation', /* required */
        Value: 'UpdateItem' /* required */
      }
    ]
  },
  {
    MetricName: 'NumberOfNotificationsDelivered', /* required */
    Namespace: 'AWS/SNS', /* required */
    Dimensions: [
      {
        Name: 'TopicName', /* required */
        Value: 'attributes-perf' /* required */
      }
    ]
  },
  {
    MetricName: 'NumberOfNotificationsFailed', /* required */
    Namespace: 'AWS/SNS', /* required */
    Dimensions: [
      {
        Name: 'TopicName', /* required */
        Value: 'attributes-perf' /* required */
      }
    ]
  },
];
