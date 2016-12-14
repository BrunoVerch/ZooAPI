'use strict';

module.exports = function(sequelize, DataTypes) {
	
	return sequelize.define('Theme', {
		id: {
			type         : DataTypes.INTEGER,
			primaryKey   : true,
			autoIncrement: true
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
			associate: function(models) {
				models.Theme.hasMany(models.Question, { as: 'questoes'});
			}
		}
	});
}