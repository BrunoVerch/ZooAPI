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
				isDate : true
			}
		},
		title: {
			type     : DataTypes.STRING(50),
			allowNull: false,
			validate : {
				len     : [10,50],
				notEmpty: true
			}
		},
		description: {
			type     : DataTypes.STRING(500),
			allowNull: false,
			validate : {
				len     : [10,500],
				notEmpty: true
			}
		},
		pathImage: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				notEmpty: true
			}
		}
	});
}