'use strict';

const fs  = require('fs');
const path= require('path');
let mod = [];

fs.readdirSync(__dirname).forEach((file) => {

  if (file === 'index.js') return;

  mod = mod.concat(require(path.join(__dirname, file)));
});

module.exports = mod;