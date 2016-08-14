'use strict';

if(!process.env.NODE_ENV){
	module.exports = {
		name: 'ZooApp',
		username: 'root',
		password: 'verchverch90',
		options : {
			dialect: 'mysql'
		}
	};
}

if(process.env.NODE_ENV == 'production'){

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
}