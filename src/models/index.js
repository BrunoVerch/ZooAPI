'use strict';

const Sequelize    = require('sequelize');
const config       = require('../config/database');
const fs           = require('fs');
const path         = require('path');
const JoiSequelize = require('joi-sequelize');

let db = {};
db.JoiModels = {};

let sequelize = new Sequelize(
	config.name,
	config.username,
	config.password,
	config.options
);

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach((file) => {
    let model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
    let t = require(path.join(__dirname, file));
    db.JoiModels[model.name] = new JoiSequelize(require(path.join(__dirname, file)));
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;