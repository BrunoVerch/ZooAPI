'use strict';

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Rule', {
		idRule: {
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
			type     : DataTypes.STRING(100),
			allowNull: false,
			validate : {
				isAlpha : true,
				notEmpty: true,
				notNull : true
			}
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