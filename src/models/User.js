'use strict';

module.exports = function(sequelize, DataTypes) {

	return sequelize.define('User', {
		id: {
			type         : DataTypes.INTEGER,
			primaryKey   : true,
			autoIncrement: true
		},
		loginToken: {
			type     : DataTypes.STRING,
			allowNull: true,
			unique	 : true
		},
		fullName: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				notEmpty: true,
				notNull : true
			}
		},
		email: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				isEmail : true,
				notEmpty: true,
				notNull : true
			}
		},
		deviceToken: {
			type     : DataTypes.STRING,
			allowNull: true,
			unique   : true
		},
		isEmployee: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			validate: {
				notNull: true
			}
		},
		uniqueIdentifier: {
			type: DataTypes.STRING,
			allowNull: true
		},
		registrationDate: {
			type        : DataTypes.DATEONLY,
			allowNull   : false,
			defaultValue: DataTypes.NOW,
			validate    : {
				isDate: true
			}
		}
	}, {
		classMethods: {
			associate: function(models) {
				models.User.belongsToMany(models.Event, {through: models.UserEvent});
				models.User.belongsToMany(models.Achievement, {through: 'UserAchievement'});
			}
		}
	});
}