'use strict';

const serviceAndStage = require('./service-and-stage');
const service = serviceAndStage.Service;
const stage = serviceAndStage.Stage;

module.exports = [
  {
    Statistics: [
      'Sum'
    ],
    MetricName: '4XXError', /* required */
    Namespace: 'AWS/ApiGateway', /* required */
    Dimensions: [
      {
        Name: 'ApiName', /* required */
        Value: stage + '-' + service /* required */
      }
    ]
  },
  {
    Statistics: [
      'Sum'
    ],
    MetricName: '5XXError', /* required */
    Namespace: 'AWS/ApiGateway', /* required */
    Dimensions: [
      {
        Name: 'ApiName', /* required */
        Value: stage + '-' + service /* required */
      }
    ]
  },
  {
    Statistics: [
      'Sum'
    ],
    MetricName: 'CacheHitCount', /* required */
    Namespace: 'AWS/ApiGateway', /* required */
    Dimensions: [
      {
        Name: 'ApiName', /* required */
        Value: stage + '-' + service /* required */
      }
    ]
  },
  {
    Statistics: [
      'Sum'
    ],
    MetricName: 'CacheMissCount', /* required */
    Namespace: 'AWS/ApiGateway', /* required */
    Dimensions: [
      {
        Name: 'ApiName', /* required */
        Value: stage + '-' + service /* required */
      }
    ]
  },
  {
    Statistics: [
      'Sum'
    ],
    MetricName: 'Count', /* required */
    Namespace: 'AWS/ApiGateway', /* required */
    Dimensions: [
      {
        Name: 'ApiName', /* required */
        Value: stage + '-' + service /* required */
      }
    ]
  },
  {
    Statistics: [
      'Average'
    ],
    MetricName: 'IntegrationLatency', /* required */
    Namespace: 'AWS/ApiGateway', /* required */
    Dimensions: [
      {
        Name: 'ApiName', /* required */
        Value: stage + '-' + service /* required */
      }
    ]
  },
  {
    Statistics: [
      'Average'
    ],
    MetricName: 'Latency', /* required */
    Namespace: 'AWS/ApiGateway', /* required */
    Dimensions: [
      {
        Name: 'ApiName', /* required */
        Value: stage + '-' + service /* required */
      }
    ]
  },
  {
    Statistics: [
      'Sum'
    ],
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
    Statistics: [
      'Sum'
    ],
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
