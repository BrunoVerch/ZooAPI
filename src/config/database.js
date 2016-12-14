'use strict';

const urlConnection = process.env.CLEARDB_DATABASE_URL;
const groups = urlConnection.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
module.exports = {
	name: groups[4],
	username: groups[1],
	password: groups[2],
	options : {
		host: groups[3],
		dialect: 'mysql'
	}
};