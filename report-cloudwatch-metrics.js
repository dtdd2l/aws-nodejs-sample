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
const periodAndStats = require('./period-and-stats');
const dateRange = require('./date-range');
const metrics = require('./metrics');

let promises = [];
let params;
let summaryReport = Object.assign({}, dateRange, {
  'Period': periodAndStats.Period
});
let detailedReport = Object.assign({}, summaryReport);

function writeReport(filename, data, descr) {
  fs.writeFile('reports/' + filename, data, (err) => {
    if (err) throw err;
    console.log(descr + ' report saved to reports/' + filename);
  });
}

for (let metric of metrics) {
    params = Object.assign({}, periodAndStats, dateRange, metric);
    promises.push(cw.getMetricStatistics(params).promise());
}

Promise.all(promises).then(values => {
  let i = 0;
  const valCount = values.length;
  for (; i < valCount; i++) {
    const metric = metrics[i];
    const data = values[i];
    const operation = metric.Dimensions.length > 1 ?
      ' ' + metric.Dimensions[1].Value : '';
    const reportKey = metric.Namespace + ' ' + metric.Dimensions[0].Value
     + operation + ' ' + metric.MetricName;
    const dps = data.Datapoints;
    data.datapointsAveraged = dps.length > 0 ?
      dps.reduce((a, b) => a + b.Average, dps[0].Average) / dps.length : 0;
    summaryReport[reportKey] = data.datapointsAveraged;
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
