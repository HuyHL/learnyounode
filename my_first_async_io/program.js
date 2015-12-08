var fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, 'utf-8', callback);

function callback(error, data) {
    if (!error) {
        var array = data.split('\n');
        var noLineBreaks = array.length - 1;

        console.log(noLineBreaks);
    }
}