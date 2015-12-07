var fs = require('fs');
var fileName = process.argv[2];
var buffer = fs.readFileSync(fileName);
var content = buffer.toString();

var array = content.split('\n');
var noLineBreaks = array.length - 1;

console.log(noLineBreaks);