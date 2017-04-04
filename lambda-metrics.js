'use strict';

const serviceAndStage = require('./service-and-stage');
const service = serviceAndStage.Service;
const stage = serviceAndStage.Stage;

module.exports = (functionName) => {
  functionName = service + '-' + stage + '-' + functionName;
  return [
    {
      Statistics: [
        'Average'
      ],
      MetricName: 'Duration', /* required */
      Namespace: 'AWS/Lambda', /* required */
      Dimensions: [
        {
          Name: 'FunctionName', /* required */
          Value: functionName /* required */
        }
      ]
    },
    {
      Statistics: [
        'Average'
      ],
      MetricName: 'IteratorAge', /* required */
      Namespace: 'AWS/Lambda', /* required */
      Dimensions: [
        {
          Name: 'FunctionName', /* required */
          Value: functionName /* required */
        }
      ]
    },
    {
      Statistics: [
        'Sum'
      ],
      MetricName: 'Errors', /* required */
      Namespace: 'AWS/Lambda', /* required */
      Dimensions: [
        {
          Name: 'FunctionName', /* required */
          Value: functionName /* required */
        }
      ]
    },
    {
      Statistics: [
        'Sum'
      ],
      MetricName: 'Invocations', /* required */
      Namespace: 'AWS/Lambda', /* required */
      Dimensions: [
        {
          Name: 'FunctionName', /* required */
          Value: functionName /* required */
        }
      ]
    },
    {
      Statistics: [
        'Sum'
      ],
      MetricName: 'Throttles', /* required */
      Namespace: 'AWS/Lambda', /* required */
      Dimensions: [
        {
          Name: 'FunctionName', /* required */
          Value: functionName /* required */
        }
      ]
    },
  ];
};
