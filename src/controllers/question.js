'use strict';

const db = require('../models/index');
const Boom = require('boom');

class QuestionController{

	static getQuestion(request, reply){
		return reply('sei la');
	};

	static create(request, reply){

		let question = request.payload;

		db.Question
			.build(question)
			.save()
			.then((questionSaved) => {
				return reply(questionSaved);
			})
			.catch((err) => {
				return reply(Boom.badImplementation());
			})
	};
}

module.exports = QuestionController;
