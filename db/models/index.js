const { Client, ClientSchema } = require('./client.model');

function setupModels(sequelize) {
  Client.init(ClientSchema, Client.config(sequelize));
}

module.exports = setupModels;
