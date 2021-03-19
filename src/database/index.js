const { Sequelize } = require('sequelize');
const database = require('../config/database');
const { Continent } = require('../models/continent');
const { Country } = require('../models/country');

const sequelize = new Sequelize(database);

Continent.init(sequelize);
Country.init(sequelize);

Continent.associate(sequelize.models);
Country.associate(sequelize.models);

module.exports = { sequelize };
