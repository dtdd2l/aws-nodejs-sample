'use strict';

const serviceAndStage = require('./service-and-stage');
const service = serviceAndStage.Service;
const stage = serviceAndStage.Stage;

module.exports = (functionName) => {
  functionName = service + '-' + stage + '-' + functionName;
  return [
    {
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
