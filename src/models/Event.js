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
				isDate : true,
				notNull: true
			}
		},
		eventDate: {
			type     : DataTypes.DATE,
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