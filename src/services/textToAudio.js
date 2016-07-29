const Ivona = require('ivona-node');
const fs = require('fs');
const randomstring = require("randomstring");

function createAudio(data) {

    const ivona = new Ivona({
        accessKey: 'GDNAIGFLY3V7PBBYLGHQ',
        secretKey: 'zhBrNACdK0q1F4j4DIvtPBVHAogG45/ZqNoJX5bT'
    });

    const filePath = '/audio/' + randomstring.generate(8) + '.mp3';

    ivona.createVoice(data, {
        body: {
            voice: {
                name: 'Vitoria',
                language: 'pt-BR',
                gender: 'Female'
            }
        }
    }).pipe(fs.createWriteStream(appRoot + '/public' + filePath, { autoClose: true }));

    return filePath;
    
}

module.exports = createAudio;