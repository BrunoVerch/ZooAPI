const QR = require('qr-image');
const fs = require('fs');
const randomstring = require("randomstring");

module.exports = function saveToImage(data) {

    const filePath = '/images/qrcode/' + randomstring.generate(8) + '.qr.png'; 
    const qrpng = QR.image(data, { type: 'png', margin: 1 });

    qrpng.pipe(fs.createWriteStream(appRoot + '/public' + filePath, { autoClose: true }));

    return filePath;
}