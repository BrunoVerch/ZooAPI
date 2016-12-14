'use strict';

const achievementController = require('../controllers/achievement');
const db = require('../models/index');

module.exports = [
	{
		method: 'GET',
		path  : '/api/achievement',
		config: {
			cors: {
            	origin: ['*']
        	},
			handler: achievementController.get
		}
	}
];