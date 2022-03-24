const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

var sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'mysql',
  logging: true,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
