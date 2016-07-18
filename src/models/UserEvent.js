'use strict';

module.exports = function(sequelize, DataTypes) {
	
	return sequelize.define('UserEvent', {
		registrationDate: {
			type        : DataTypes.DATEONLY,
			allowNull   : false,
			defaultValue: DataTypes.NOW,
			validate    : {
				isDate: true
			}
		}
	});
}