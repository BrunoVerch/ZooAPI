'use strict';

module.exports = function(sequelize, DataTypes) {
	
	return sequelize.define('Theme', {
		idTheme: {
			type         : DataTypes.INTEGER,
			primarykey   : true,
			autoincrement: true
		},
		description: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				isAlphanumeric: true,
				notEmpty      : true,
				notNull       : true
			}
		}
	});
}