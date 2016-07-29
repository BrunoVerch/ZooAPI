'use strict';

module.exports = function(sequelize, DataTypes) {

	return sequelize.define('Curiosity', {
		id: {
			type         : DataTypes.INTEGER,
			primaryKey   : true,
			autoIncrement: true
		},
		publicationDate: {
			type     : DataTypes.DATEONLY,
			allowNull: false,
			validate : {
				isDate : true,
				notNull: true
			}
		},
		title: {
			type     : DataTypes.STRING(50),
			allowNull: false,
			validate : {
				len     : [10,50],
				notEmpty: true,
				notNull : true
			}
		},
		description: {
			type     : DataTypes.STRING(500),
			allowNull: false,
			validate : {
				len     : [100,500],
				notEmpty: true,
				notNull : true
			}
		},
		pathImage: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				notEmpty: true,
				notNull : true
			}
		}
	});
}