'use strict';

module.exports = function(sequelize, DataTypes) {

	return sequelize.define('Game', {
		idGame: {
			type         : DataTypes.INTEGER,
			primarykey   : true,
			autoincrement: true
		},
		pathImage: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				notEmpty: true,
				notNull : true
			}
		},
		title: {
			type     : DataTypes.STRING(150),
			allowNull: false,
			validate : {
				isAlphanumeric: true,
				notEmpty      : true,
				notNull       : true
			}
		}
	});
}