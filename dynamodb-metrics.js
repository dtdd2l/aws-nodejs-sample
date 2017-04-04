'use strict';

const serviceAndStage = require('./service-and-stage');
const service = serviceAndStage.Service;
const stage = serviceAndStage.Stage;

module.exports = (tableName) => {
  tableName = service + '-service-' + stage + '_' + tableName;
  return [
    {
      Statistics: [
        'Average'
      ],
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
      Statistics: [
        'Average'
      ],
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
      Statistics: [
        'Average'
      ],
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
      Statistics: [
        'Average'
      ],
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
      Statistics: [
        'Average'
      ],
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
      Statistics: [
        'Average'
      ],
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
      Statistics: [
        'Average'
      ],
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
      Statistics: [
        'Average'
      ],
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
      Statistics: [
        'Sum'
      ],
      MetricName: 'ReadThrottleEvents', /* required */
      Namespace: 'AWS/DynamoDB', /* required */
      Dimensions: [
        {
          Name: 'TableName', /* required */
          Value: tableName /* required */
        }
      ]
    },
    {
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
      Statistics: [
        'Sum'
      ],
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
