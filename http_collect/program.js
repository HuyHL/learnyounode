var httpClient = require('http');
var bl = require('bl');

var urlPath = process.argv[2];

httpClient.get(urlPath, callback);

function callback(response) {
    response.pipe(bl(function(error, data){
        if (error)
            throw error;

        var result = data.toString();
        process.stdout.write(result.length + '\n');
        process.stdout.write(result + '\n');
    }));
}