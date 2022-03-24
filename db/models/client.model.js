const { Model, DataTypes, Sequelize } = require('sequelize');
const CLIENT_TABLE='clients';

const ClientSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  url: {
    allowNull: true,
    type: DataTypes.STRING
  }
}

class Client extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_TABLE,
      modelName: 'Client',
      timestamps: false
    }
  }
}
module.exports = { CLIENT_TABLE, ClientSchema, Client }
