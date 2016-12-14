'use strict';

const db = require('../models/index');
const Boom = require('boom');
const imageUpload = require('../services/image');

class CuriosityController{

	static create(request, reply){

		let curiosity = request.payload;

        imageUpload(curiosity.image, function(response){
			curiosity.pathImage = response;
            curiosity.publicationDate = new Date();

            db.Curiosity
                .build(curiosity)
                .save()
                .then((curiositySaved) => {
                    return reply.view('question-curiosity/register');
                })
                .catch((err) => {
                    return reply(Boom.badImplementation());
                });
        });
	};

    static get(request, reply){
        db.Curiosity
            .findAll()
            .then((curiosities) => {
                return reply(curiosities);
            })
            .catch((err) => {
                return reply(Boom.badImplementation());
            });
    }
}

module.exports = CuriosityController;
