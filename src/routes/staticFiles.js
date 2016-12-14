module.exports = [
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            cors: {
            	origin: ['*']
        	},
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true
            }
        }
    }
];