'use strict';

const questionController = require('../controllers/question');
const db = require('../models/index');

let questionJoi = db.JoiModels['Question'];

module.exports = [
	{
		method: 'GET',
		path  : '/api/question/{difficult}',
		config: {
			handler: questionController.getQuestion
		}
	},
	{
		method: 'POST',
		path  : '/question',
		config: {
			handler: questionController.create
		}
	},
	{
		method: 'GET',
		path  : '/question/create',
		config: {
			auth: {
				strategy: 'base'
			},
			handler: questionController.get
		}
	}
];