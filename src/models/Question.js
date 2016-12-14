'use strict';

module.exports = function(sequelize, DataTypes) {
	
	return sequelize.define('Question', {
		id: {
			type         : DataTypes.INTEGER,
			primaryKey   : true,
			autoIncrement: true
		},
		query: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				notEmpty: true
			}
		},
		answer: {
			type     : DataTypes.ENUM('A','B','C','D'),
			allowNull: false,
			validate : {
				isAlpha : true,
				notEmpty: true,
				isIn    : [['A','B','C','D']]
			}
		},
		optionA: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				isAlphanumeric : true,
				notEmpty       : true
			}
		},
		optionB: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				isAlphanumeric : true,
				notEmpty       : true
			}
		},optionC: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				isAlphanumeric : true,
				notEmpty       : true
			}
		},optionD: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				isAlphanumeric : true,
				notEmpty       : true
			}
		}
	});
}