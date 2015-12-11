var myModule = require('./module.js');

var directoryPath = process.argv[2];
var ext = process.argv[3];

myModule(directoryPath, ext, printData);

function printData(error, data) {
    if (error) {
        console.log("error when call module!");
        throw error;
    }

    if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    } else {
        console.log("Directory is empty");
    }
}