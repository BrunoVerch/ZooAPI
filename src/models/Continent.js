'use strict';

module.exports = function(sequelize, DataTypes) {
	
	return sequelize.define('Continent', {
		idContinent: {
			type         : DataTypes.INTEGER,
			primarykey   : true,
			autoincrement: true
		},
		name: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				notEmpty: true,
				notNull : true
			} 
		}
	}, {
		classMethods: {
			associate: function(models) {
				models.Continent.belongsToMany(models.Specie, {through: 'SpecieContinent'});
			}
		}
	});
}