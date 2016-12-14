'use strict';

const eventController = require('../controllers/event');
const db = require('../models/index');

module.exports = [
	{
		method: 'POST',
		path  : '/event',
		config: {
			handler: eventController.create
		}
	},
	{
		method: 'GET',
		path  : '/event',
		config: {
			handler: eventController.get
		}
	},
	{
		method: 'GET',
		path: '/api/event',
		config: {
			handler: eventController.getAll
		}
	}
];