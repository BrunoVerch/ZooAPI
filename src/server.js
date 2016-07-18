'use strict';

const Hapi = require('hapi');
const routes = require('./routes/index');
const models = require('./models/index');

const server = new Hapi.Server();

server.connection({
	port: 3432
});

for (let route of routes) {
	server.route(route);
}

models.sequelize.sync().then(() => {

	server.start(err => {

		if(err){
			console.log(err);
		}

		console.log(`Server started at ${ server.info.uri }`);
	});
});