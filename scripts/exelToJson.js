
var parser = require('simple-excel-to-json')
var doc = parser.parseXls2Json('./exel/exel-tojson.xlsx');
console.log(doc);