const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');
const options={
  host: config.dbHost,
  dialect: 'mysql',
  logging: true,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
};
if (config.isProd) {
  options.ssl={
    rejectUnauthorized: false
  }
}
var sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, options);

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
