'use strict';

const specieController = require('../controllers/specie');
const db = require('../models/index');
const Joi = require('joi');

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
				 payload: {
				 	output: 'stream',
				 	parse: true,
				 	allow: 'multipart/form-data'
				},
				handler: specieController.create
			}
		},
		{
			method: 'GET',
			path  : '/specie/create',
			config: {
				handler: specieController.get
			}
		},
		{
			method: 'GET',
			path  : '/specie/list/{page}',
			config: {
				handler: specieController.list,
				validate: {
					params: {
						page: Joi.number().integer()
					}
				}
			}
		}
	];