'use strict';

const util = require('util');
const co = require('co');

const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

const cw = new AWS.CloudWatch({apiVersion: '2010-08-01'});
const periodAndStats = require('./period-and-stats');
const dateRange = require('./date-range');
const metrics = require('./metrics');

let report = {};
let promises = [];
let params;


for (let metric of metrics) {
    params = Object.assign({}, periodAndStats, dateRange, metric);
    promises.push(cw.getMetricStatistics(params).promise());
}

Promise.all(promises).then(values => {
  let i = 0;
  let valCount = values.length;
  for (; i < valCount; i++) {
    const metric = metrics[i];
    const data = values[i];
    const operation = metric.Dimensions.length > 1 ? ' ' + metric.Dimensions[1].Value : '';
    report[metric.Namespace + ' ' + metric.Dimensions[0].Value + operation + ' '
      + metric.MetricName] = data;
  }
  console.log('report = ' + util.inspect(report));
}).catch(err => {
  console.log(err, err.stack);
});
