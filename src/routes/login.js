const loginController = require('../controllers/login');

module.exports = [
    {
		method: 'GET',
		path  : '/',
		config: {
			handler: loginController.get
		}
	},
    {
		method: 'POST',
		path  : '/login',
		config: {
			handler: loginController.login
		}
	}
];