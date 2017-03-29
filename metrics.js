'use strict';

const serviceAndStage = require('./service-and-stage');
const service = serviceAndStage.Service;
const stage = serviceAndStage.Stage;

module.exports = [
  {
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
