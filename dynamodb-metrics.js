'use strict';

const serviceAndStage = require('./service-and-stage');
const service = serviceAndStage.Service;
const stage = serviceAndStage.Stage;

module.exports = (tableName) => {
  tableName = service + '-service-' + stage + '_' + tableName;
  return [
    {
      MetricName: 'ThrottledRequests', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        }
      ]
    },
    {
      MetricName: 'ConsumedReadCapacityUnits', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        }
      ]
    },
    {
      MetricName: 'ConsumedWriteCapacityUnits', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        }
      ]
    },
    {
      MetricName: 'SystemErrors', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        }
      ]
    },
    {
      MetricName: 'UserErrors', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        }
      ]
    },
    {
      MetricName: 'SuccessfulRequestLatency', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        }
      ]
    },
    {
      MetricName: 'ConditionalCheckFailedRequests', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        }
      ]
    },
    {
      MetricName: 'WriteThrottleEvents', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        }
      ]
    },
    {
      MetricName: 'SuccessfulRequestLatency', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
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
          Value: tableName /* required */
        },
        {
          Name: 'Operation', /* required */
          Value: 'Query' /* required */
        }
      ]
    },
    {
      MetricName: 'SuccessfulRequestLatency', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        },
        {
          Name: 'Operation', /* required */
          Value: 'Scan' /* required */
        }
      ]
    },
    {
      MetricName: 'SuccessfulRequestLatency', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
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
          Value: tableName /* required */
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
          Value: tableName /* required */
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
          Value: tableName /* required */
        },
        {
          Name: 'Operation', /* required */
          Value: 'UpdateItem' /* required */
        }
      ]
    },
    {
      MetricName: 'ReturnedItemCount', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        },
        {
          Name: 'Operation', /* required */
          Value: 'Query' /* required */
        }
      ]
    },
    {
      MetricName: 'ReturnedItemCount', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        },
        {
          Name: 'Operation', /* required */
          Value: 'Scan' /* required */
        }
      ]
    },
    {
      MetricName: 'SystemErrors', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        },
        {
          Name: 'Operation', /* required */
          Value: 'UpdateItem' /* required */
        }
      ]
    },
    {
      MetricName: 'ThrottledRequests', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        },
        {
          Name: 'Operation', /* required */
          Value: 'DeleteItem' /* required */
        }
      ]
    },
    {
      MetricName: 'ThrottledRequests', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        },
        {
          Name: 'Operation', /* required */
          Value: 'GetItem' /* required */
        }
      ]
    },
    {
      MetricName: 'ThrottledRequests', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        },
        {
          Name: 'Operation', /* required */
          Value: 'PutItem' /* required */
        }
      ]
    },
    {
      MetricName: 'ThrottledRequests', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        },
        {
          Name: 'Operation', /* required */
          Value: 'UpdateItem' /* required */
        }
      ]
    },
  ];
};
