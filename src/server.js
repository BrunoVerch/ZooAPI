'use strict';

const Hapi = require('hapi');
const routes = require('./routes/index');
const models = require('./models/index');
const Inert = require('inert');
const Path = require('path');
const Vision = require('vision');
global.appRoot = Path.resolve(__dirname);

const server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: Path.join(__dirname,'public')
			}
		}
	}
}, {cors:true});

server.register(Vision, () => {});

server.views({
	engines: {
		ejs: require('ejs')
	},
	relativeTo: __dirname,
	path: './templates',
	layout: true,
	layoutPath: Path.join(__dirname, 'templates/layout')
});

let port = process.env.PORT || 3432;
server.connection({
	port: port
});

server.register(Inert, () => {});

server.register(require('hapi-auth-cookie'), function (err) {
    if (err) console.log(err);

    server.auth.strategy('base', 'cookie', {
      password: 'abcdefghijklmnopqrstuvwxyz123456',
      redirectTo: '/',
      isSecure: false
    });

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