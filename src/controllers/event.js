'use strict';

const db = require('../models/index');
const Boom = require('boom');

class EventController{

	static create(request, reply){

		let event = request.payload;

        event.eventDate  = new Date(event.eventDate);
        event.publicationDate = new Date();
        event.status = 'Active';

        db.Event
            .build(event)
            .save()
            .then((eventSaved) => {
                return reply.redirect('/event');
            })
            .catch((err) => {
                return reply(err);
            });
	};

    static getAll(request, reply){
        db.Event.findAll({
            where: {
                status: 'Active'
            }
        })
        .then((events) => {
                return reply(events);
            })
            .catch((err) => {
                return reply(Boom.badImplementation());
            });
    }

    static get(request, reply){
        db.Event
            .findAll({
                where: {
                    status: 'Active'
                }
            })
            .then((events) => {
                return reply.view('event/event', { events: events });
            })
            .catch((err) => {
                return reply(Boom.badImplementation());
            });
    }
}

module.exports = EventController;
