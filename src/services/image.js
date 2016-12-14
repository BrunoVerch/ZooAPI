const fs = require('fs');

function uploadFile(file, callback){

     var name = file.hapi.filename;
     var path = appRoot + '/public/images/' + name;
     var fileStream = fs.createWriteStream(path, {autoClose: true});

     fileStream.on('error', function (err) { 
         console.error(err); 
     });

     file.pipe(fileStream);

     return callback('/images/' + name); 
}

module.exports = uploadFile;
