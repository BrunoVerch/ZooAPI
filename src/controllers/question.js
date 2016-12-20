'use strict';

const db = require('../models/index');
const Boom = require('boom');

class QuestionController{

	static getQuestion(request, reply){
		const difficult = request.params.difficult.toLowerCase();
		console.log(difficult);
		db.Theme
			.findOne({
				where: {
					description: difficult
				}
			})
			.then((theme) => {
				console.log(theme);
				db.Question
					.count({
						where: ["ThemeId = ?", theme.id]
					})
					.then((c) => {
						console.log(c);
						db.Question
							.findOne({
								where: {
									id: Math.floor(Math.random() * (c - 1) + 1)
								}
							})
							.then((question) => {
								return reply(question);
							})
					})
			});
	};

	static get(request, reply){
		return reply.view('question-curiosity/register');
	};

	static create(request, reply){

		let question = request.payload;

		db.Question
			.build(question)
			.save()
			.then((questionSaved) => {
				return reply.view('question-curiosity/register');
			})
			.catch((err) => {
				return reply(Boom.badImplementation());
			})
	};
}

module.exports = QuestionController;
