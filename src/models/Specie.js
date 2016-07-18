'use strict';

module.exports = function(sequelize, DataTypes) {

	return sequelize.define('Specie', {
		idSpecie: {
			type         : DataTypes.INTEGER,
			primarykey   : true,
			autoincrement: true
		},
		pathImage: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				notEmpty: true,
				notNull : true
			}
		},
		popularName: {
			type     : DataTypes.STRING(100),
			allowNull: false,
			validate : {
				isAlpha : true,
				notEmpty: true,
				notNull : true
			}
		},
		scientificName: {
			type     : DataTypes.STRING(200),
			allowNull: false,
			validate : {
				isAlpha : true,
				notEmpty: true,
				notNull : true
			}
		},
		weight: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				isAlphanumeric: true,
				notNull		  : true
			}
		},
		height: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				isAlphanumeric: true,
				notNull		  : true
			}
		},
		instictionThreat: {
			type     : DataTypes.ENUM('Pouco preocupante','Quase ameaçada','Vulnerável','Em perigo','Criticamente em perigo','Extinta na natureza','Extinto'),
			allowNull: false,
			validate : {
				isIn: [['Pouco preocupante','Quase ameaçada','Vulnerável','Em perigo','Criticamente em perigo','Extinta na natureza','Extinto']]
			}
		},
		typeFeed: {
			type     : DataTypes.ENUM('Herbívoros','Carnívoros','Onívoros','Detritívoros'),
			allowNull: false,
			validate : {
				isIn: [['Herbívoros','Carnívoros','Onívoros','Detritívoros']]
			}
		},
		feed: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				isAlphanumeric: true,
				notNull		  : true
			}
		},
		color: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				isAlphanumeric: true,
				notNull		  : true
			}
		},
		habitat: {
			type     : DataTypes.STRING,
			allowNull: false,
			validate : {
				isAlphanumeric: true,
				notNull		  : true
			}
		},
		interistingFacts: {
			type     : DataTypes.STRING(800),
			allowNull: false,
			validate : {
				isAlphanumeric: true,
				notNull		  : true
			}
		},
		classification: {
			type     : DataTypes.ENUM('Peixes','Anfíbios','Répteis','Aves','Mamíferos','Insetos'),
			allowNull: false,
			validate : {
				isIn: [['Peixes','Anfíbios','Répteis','Aves','Mamíferos','Insetos']]
			}
		},
		habit: {
			type     : DataTypes.ENUM('Diurno','Noturno'),
			allowNull: false,
			validate : {
				isIn: [['Diurno','Noturno']]
			}
		}
	}, {
		classMethods: {
			associate: function(models){
				models.Specie.belongsToMany(models.Continent, {through: 'SpecieContinent'});
			}
		}
	});
}