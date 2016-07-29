const fs = require('fs');

function uploadFile(file){

    var name = file.hapi.filename;
    var path = appRoot + '/public/images/' + name;
    var fileStream = fs.createWriteStream(path, {autoClose: true});

    fileStream.on('error', function (err) { 
        console.error(err); 
    });

    file.pipe(fileStream);

    return '/images/' + name; 
}

module.exports = uploadFile;
