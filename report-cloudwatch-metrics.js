'use strict';

const fs = require('fs');
const jsonexport = require('jsonexport');
const util = require('util');

const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

const cw = new AWS.CloudWatch({apiVersion: '2010-08-01'});
const serviceAndStage = require('./service-and-stage');
const service = serviceAndStage.Service;
const stage = serviceAndStage.Stage;
const dateRange = require('./date-range');
const metrics = require('./metrics');
const lambda = require('./lambda-metrics');
const dynamodb = require('./dynamodb-metrics');

const period = {
  'Period': 60 /* required */
};

const promises = [];

let params;
let summaryReport = Object.assign({}, dateRange, period);
let detailedReport = Object.assign({}, summaryReport);

function writeReport(filename, data, descr) {
  fs.writeFile('reports/' + filename, data, (err) => {
    if (err) throw err;
    console.log(descr + ' report saved to reports/' + filename);
  });
}

Array.prototype.push.apply(metrics, lambda('api'));
Array.prototype.push.apply(metrics, lambda('definitionsToECS'));
Array.prototype.push.apply(metrics, lambda('attributesToECS'));
Array.prototype.push.apply(metrics, lambda('publish-events'));
Array.prototype.push.apply(metrics, dynamodb('Definitions'));
Array.prototype.push.apply(metrics, dynamodb('Values'));

for (let metric of metrics) {
    params = Object.assign({}, period, dateRange, metric);
    console.log('params = ' + util.inspect(params));
    promises.push(cw.getMetricStatistics(params).promise());
}

Promise.all(promises).then(values => {
  let i = 0;
  const valCount = values.length;
  for (; i < valCount; i++) {
    const metric = metrics[i];
    const data = values[i];
    const stats = metric.Statistics[0];
    const operation = metric.Dimensions.length > 1 ?
      ' ' + metric.Dimensions[1].Value : '';
    const reportKey = metric.Namespace + ' ' + metric.Dimensions[0].Value
     + operation + ' ' + metric.MetricName + ' ' + stats;
    const dps = data.Datapoints;
    switch(stats) {
      case 'Average':
        data.datapointsAveraged = dps.length > 0 ?
          dps.reduce((a, b) => a + b[stats], dps[0][stats]) / dps.length : 0;
        summaryReport[reportKey] = data.datapointsAveraged;
      break;
      case 'Sum':
        data.sumTotal = dps.length > 0 ?
          dps.reduce((a, b) => a + b[stats], dps[0][stats]) : 0;
        summaryReport[reportKey + ' Total'] = data.sumTotal;
        data.sumAvgPerSec = dps.length > 0 ? data.sumTotal / dps.length / period.Period : 0;
        summaryReport[reportKey + ' avg per second'] = data.sumAvgPerSec;
        data.spike = dps.length > 0 ?
          dps.reduce((a, b) => a > b[stats] ? a : b[stats], dps[0][stats]) / period.Period : 0;
        summaryReport[reportKey + ' avg per second in spike minute'] = data.spike;
      break;
    }

    detailedReport[reportKey] = data;
  }
  console.log('summaryReport = ' + util.inspect(summaryReport));

  const fileNamePrefix = service + ' ' + stage + ' metrics ' + dateRange.StartTime.replace(/:/g, '-') + ' ' + dateRange.EndTime.replace(/:/g, '-') + ' ';
  writeReport(fileNamePrefix + 'summary.json', JSON.stringify(summaryReport), 'Summary JSON ');
  writeReport(fileNamePrefix + 'detailed.json', JSON.stringify(detailedReport), 'Detailed JSON');
  const jsonexportOptions = {
    verticalOutput: false
  };
  jsonexport(summaryReport, jsonexportOptions, function (err, csv) {
    if (err) return console.log(err);
    csv = csv.replace(/,,/g, ',0,');
    csv = csv.replace(/,,/g, ',0,');
    csv = csv.replace(/,$/g, ',0');
    writeReport(fileNamePrefix + 'summary.csv', csv, 'Summary CSV')
  });
}).catch(err => {
  console.log(err, err.stack);
});
