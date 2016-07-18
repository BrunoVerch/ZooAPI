'use strict';

const questionController = require('../controllers/question');
const db = require('../models/index');

let questionJoi = db.JoiModels['Question'];

module.exports = [
	{
		method: 'GET',
		path  : '/question',
		config: {
			handler: questionController.getQuestion
		}
	},
	{
		method: 'POST',
		path  : '/question',
		config: {
			handler: questionController.create,
			validate: {
				payload: questionJoi.joi()
			}
		}
	}
];