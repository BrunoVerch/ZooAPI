const Ivona = require('ivona-node');
const fs = require('fs');
const randomstring = require("randomstring");

var ivona = new Ivona({
        accessKey: 'GDNAIGFLY3V7PBBYLGHQ',
        secretKey: 'zhBrNACdK0q1F4j4DIvtPBVHAogG45/ZqNoJX5bT'
    });

const filePath = '/public/audio/' + randomstring.generate(8) + '.mp3';

ivona.createVoice(data, {
        body: {
            voice: {
                name: 'Vitoria',
                language: 'pt-BR',
                gender: 'Female'
            }
        }
    }).pipe(fs.createWriteStream(appRoot + filePath, { autoClose: true }));