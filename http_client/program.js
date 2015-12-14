var httpClient = require('http');

var urlPath = process.argv[2];

httpClient.get(urlPath, callback);

function callback(response) {
    response.setEncoding('utf-8');
    response
        .on("data", function(data){
            process.stdout.write(data + '\n');
        });
}