var fs = require('fs');
var path = require('path');

var directoryPath = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(directoryPath, callback);

function callback(error, list){
    if (error)
        throw error;

    if (list && list.length > 0){
        for(var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) == ext) {
                console.log(list[i]);
            }
        }
    }
}