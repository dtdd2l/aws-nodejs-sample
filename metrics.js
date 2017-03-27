const serviceAndStage = require('./service-and-stage');
const service = serviceAndStage.Service;
const stage = serviceAndStage.Stage;

module.exports = [
  {
    MetricName: 'Latency', /* required */
    Namespace: 'AWS/ApiGateway', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: stage + '-' + service /* required */
      }
    ]
  },
  {
    MetricName: 'IntegrationLatency', /* required */
    Namespace: 'AWS/ApiGateway', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: stage + '-' + service /* required */
      }
    ]
  },
  {
    MetricName: 'Duration', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: service + '-' + stage + '-api' /* required */
      }
    ]
  },
  {
    MetricName: 'Throttles', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: service + '-' + stage + '-api' /* required */
      }
    ]
  },
  {
    MetricName: 'Errors', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: service + '-' + stage + '-api' /* required */
      }
    ]
  },
  {
    MetricName: 'Duration', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: service + '-' + stage + '-publish-events' /* required */
      }
    ]
  },
  {
    MetricName: 'Throttles', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: service + '-' + stage + '-publish-events' /* required */
      }
    ]
  },
  {
    MetricName: 'Errors', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: service + '-' + stage + '-publish-events' /* required */
      }
    ]
  },
  {
    MetricName: 'Duration', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: service + '-' + stage + '-attributesToECS' /* required */
      }
    ]
  },
  {
    MetricName: 'Throttles', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: service + '-' + stage + '-attributesToECS' /* required */
      }
    ]
  },
  {
    MetricName: 'Errors', /* required */
    Namespace: 'AWS/Lambda', /* required */
    Dimensions: [
      {
        Name: 'FunctionName', /* required */
        Value: service + '-' + stage + '-attributesToECS' /* required */
      }
    ]
  },
  {
    MetricName: 'ConsumedReadCapacityUnits', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: service + '-service-' + stage + '_Definitions' /* required */
      }
    ]
  },
  {
    MetricName: 'SuccessfulRequestLatency', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: service + '-service-' + stage + '_Definitions' /* required */
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
        Value: service + '-service-' + stage + '_Values' /* required */
      }
    ]
  },
  {
    MetricName: 'ConsumedWriteCapacityUnits', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: service + '-service-' + stage + '_Values' /* required */
      }
    ]
  },
  {
    MetricName: 'ConditionalCheckFailedRequests', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: service + '-service-' + stage + '_Values' /* required */
      }
    ]
  },
  {
    MetricName: 'WriteThrottleEvents', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: service + '-service-' + stage + '_Values' /* required */
      }
    ]
  },
  {
    MetricName: 'SystemErrors', /* required */
    Namespace: 'AWS/DynamoDB', /* required */
    Dimensions: [
      {
        Name: 'TableName', /* required */
        Value: service + '-service-' + stage + '_Values' /* required */
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
        Value: service + '-service-' + stage + '_Values' /* required */
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
        Value: service + '-service-' + stage + '_Values' /* required */
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
        Value: service + '-service-' + stage + '_Values' /* required */
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
        Value: service + '-service-' + stage + '_Values' /* required */
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
        Value: service + '-' + stage /* required */
      }
    ]
  },
  {
    MetricName: 'NumberOfNotificationsFailed', /* required */
    Namespace: 'AWS/SNS', /* required */
    Dimensions: [
      {
        Name: 'TopicName', /* required */
        Value: service + '-' + stage /* required */
      }
    ]
  },
];