'use strict';

const util = require('util');
const co = require('co');

const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

const cw = new AWS.CloudWatch({apiVersion: '2010-08-01'});
const periodAndStats = require('./period-and-stats');
const dateRange = require('./date-range');
const metrics = require('./metrics');

// assemble each report key from Namespace, Dimensions.Value, and MetricName.
let report = {};

/*
function* getMetrics(metric) {
  console.log('metric = ' + util.inspect(metric));
  const params = Object.assign({}, periodAndStats, dateRange, metric);

  yield cw.getMetricStatistics(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
      console.log(data);           // successful response
      report[metric.Namespace + ' ' + metric.Dimensions.Value + ' '
        + metric.MetricName] = data;
    }
  });
}


for (let metric of metrics) {
   getMetrics(metric);
}
*/

/*
// metrics.forEach(metric => {
// for (let metric of metrics) {
co(function* () {
  yield* metrics.map(function* (metric) {
    console.log('metric = ' + util.inspect(metric));
    const params = Object.assign({}, periodAndStats, dateRange, metric);

    yield cw.getMetricStatistics(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else {
        console.log(data);           // successful response
        report[metric.Namespace + ' ' + metric.Dimensions.Value + ' '
          + metric.MetricName] = data;
      }
    });

    return report;
  })
  return 1;
}).then(output => {
  console.log('output = ' + util.inspect(output));
  console.log('report = ' + util.inspect(report));
}).catch(err => {
  console.log(err, err.stack);
});

// console.log('report = ' + util.inspect(report));
*/

let promises = [];
let params;

/*
co(function* () {
  promises = yield metrics.map((metric) => {
    console.log('metric = ' + util.inspect(metric));
    params = Object.assign({}, periodAndStats, dateRange, metric);
    return cw.getMetricStatistics(params).promise();
  });
});
*/
// console.log('report = ' + util.inspect(report));

for (let metric of metrics) {
    // console.log('metric = ' + util.inspect(metric));
    params = Object.assign({}, periodAndStats, dateRange, metric);
    promises.push(cw.getMetricStatistics(params).promise());
}

Promise.all(promises).then(values => {
  let i = 0;
  let valCount = values.length;
  for (; i < valCount; i++) {
    const metric = metrics[i];
    const data = values[i];
    // console.log(data);           // successful response
    report[metric.Namespace + ' ' + metric.Dimensions[0].Value + ' '
      + metric.MetricName] = data;
  }
  console.log('report = ' + util.inspect(report));
}).catch(err => {
  console.log(err, err.stack);
});
