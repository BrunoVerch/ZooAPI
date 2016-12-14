'use strict';

const curiosityController = require('../controllers/curiosity');
const db = require('../models/index');

module.exports = [
	{
		method: 'POST',
		path  : '/curiosity',
		config: {
            payload: {
                output: 'stream',
                parse: true,
                allow: 'multipart/form-data'
            },
			handler: curiosityController.create
		}
	},
	{
		method: 'GET',
		path  : '/api/curiosity',
		config: {
			cors: {
            	origin: ['*']
        	},
			handler: curiosityController.get
		}
	}
];