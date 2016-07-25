'use strict';

const specieController = require('../controllers/specie');
const db = require('../models/index');
const Joi = require('joi');

let specieJoi = db.JoiModels['Specie'];
let specieJoiWithImage = specieJoi.include({ image : Joi.any().required() });
delete specieJoiWithImage.pathImage;

module.exports = [
		{
			method: 'GET',
			path  : '/api/specie/{id}',
			config: {
				handler: specieController.findById,
				validate: {
					params: {
						id: Joi.number().integer().min(1).required()
					}
				}
			}
		},
		{
			method: 'POST',
			path  : '/specie',
			config: {
				handler: specieController.create,
				validate: {
					payload: specieJoiWithImage
				}
			}
		},
		{
			method: 'GET',
			path  : '/specie',
			config: {
				handler: specieController.get
			}
		}
	];