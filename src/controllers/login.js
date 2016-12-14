'use strict';

const db = require('../models/index');

class LoginController{

	static get(request, reply){
        return reply.view('login/login', {error:null}, { layout: 'login' });
    }

    static login(request, reply){
        console.log(request.payload);

        db.User
            .findOne({
				where: {
					uniqueIdentifier: request.payload.uniqueid,
                    isEmployee: true,
                    email: request.payload.email
				}
			})
            .then((user) => {
                if(!user){
                    return reply.view('login/login', { error: 'Email e/ou identificador incorretos.' }, { layout: 'login' });
                }

                request.cookieAuth.set(user);
                return reply.redirect('specie/list/1');

            });
    }
}

module.exports = LoginController;