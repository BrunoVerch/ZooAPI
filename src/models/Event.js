'use strict';

module.exports = function(sequelize, DataTypes) {

	return sequelize.define('Event', {
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
		eventDate: {
			type     : DataTypes.DATE,
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
				len     : [50,500],
				notEmpty: true
			}
		},
		status: {
			type     : DataTypes.ENUM('Inactive','Active'),
			allowNull: false,
			validate : {
				isIn: [['Inactive','Active']]
			}
		}
	}, {
		classMethods: {
			associate: function(models){
				models.Event.belongsToMany(models.User, {through: models.UserEvent});
			}
		}
	});
}