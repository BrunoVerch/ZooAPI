'use strict';

const db = require('../models/index');
const Boom = require('boom');

class AchievementController{

    static get(request, reply){
        db.Achievement
            .findAll()
            .then((conquistas) => {
                return reply(conquistas);
            })
            .catch((err) => {
                return reply(Boom.badImplementation());
            });
    }
}

module.exports = AchievementController;
