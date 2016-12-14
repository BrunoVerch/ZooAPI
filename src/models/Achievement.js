'use strict';

module.exports = function(sequelize, DataTypes) {

	return sequelize.define('Achievement', {
		id: {
			type         : DataTypes.INTEGER,
			primaryKey   : true,
			autoIncrement: true
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
	}, {
		classMethods: {
			associate: function(models){
				models.Achievement.belongsToMany(models.User, {through: 'UserAchievement'});
			}
		}
	});
}