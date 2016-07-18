'use strict';

const db = require('../models/index');
const Boom = require('boom');

class SpecieController {

	static findById(request, reply){

		const idSpecie = parseInt(request.params.id);
		
		db.Specie
			.findById(idSpecie)
			.then((data) => {
				if(!data){
					return reply(Boom.notFound('Not found specie with this id'));
				}

				return reply(data);
			});
	};

	static find(request, reply){

	};

	static create(request, reply){
		let specie = request.payload;

		//TODO: get image from request and save the path

		db.Specie
			.build(specie)
			.save()
			.then((savedSpecie) => {
				return reply(savedSpecie);
			})
			.catch((err) => {
				return reply(Boom.badImplementation());
			})
	}
}

module.exports = SpecieController;