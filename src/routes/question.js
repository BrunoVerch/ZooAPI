'use strict';

const questionController = require('../controllers/question');
const db = require('../models/index');

let questionJoi = db.JoiModels['Question'];

module.exports = [
	{
		method: 'GET',
		path  : '/api/question/{difficult}',
		config: {
			cors: {
            	origin: ['*']
        	},
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
			handler: questionController.get
		}
	}
];