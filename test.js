var Dropbox = require('dropbox');
var fs = require('fs');
var path = require('path');

var dbx = new Dropbox({ accessToken: 'XzDLrhAYUEAAAAAAAAAACHEUb1xf9k-mOZl6C7HuioB0PZMS_SGHEE5TIIzSFh6z' });

  fs.readFile(path.join(__dirname, '/package.json'), 'utf8', function (err, contents) {
    if (err) {
      console.log('Error: ', err);
    }

    // This uploads basic.js to the root of your dropbox
    dbx.filesUpload({ path: '/package.json', contents: contents })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  });