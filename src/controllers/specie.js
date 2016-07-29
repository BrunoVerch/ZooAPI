'use strict';

const db = require('../models/index');
const Boom = require('boom');
const imageUpload = require('../services/image');
const toQrCode = require('../services/qrcode');
const toAudio = require('../services/textToAudio');

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

	static get(request, reply){
		return reply.view('specie/register');
	};

	static create(request, reply){
		let specie = request.payload;

		specie.pathImage = imageUpload(specie.image);
		specie.pathAudio = toAudio(specie.interestingFacts);

		db.Specie
			.build(specie)
			.save()
			.then((savedSpecie) => {
				const qrPath = toQrCode(savedSpecie.id);

				savedSpecie.update({
					pathQrCode: qrPath
				}).then((specieWithQr) => {
					return reply('specie/list');
				});
			})
			.catch((err) => {
				console.log(err);
				return reply(Boom.badImplementation());
			})
	}
}

module.exports = SpecieController;