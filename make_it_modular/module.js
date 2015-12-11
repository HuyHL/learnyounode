var fs = require('fs');
var path = require('path');

module.exports = function (directoryPath, ext, callback) {
    ext = "." + ext;
    fs.readdir(directoryPath, callbackReadDir);

    function callbackReadDir(error, list){
        if (error)
            return callback(error);

        var data = [];
        if (list && list.length > 0){
            for(var i = 0; i < list.length; i++) {
                if (path.extname(list[i]) == ext) {
                    data.push(list[i]);
                }
            }
        }

        return callback(null, data);
    }
};