const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ClientsService {

  constructor(){}

  async create(data) {
    const object = await models.Client.create(data);
    return object;
  }

  async find() {
    const list  = await models.Client.findAll();
    return list;
  }

  async findOne(id) {
    const object = await models.Client.findByPk(id);
    if (!object) {
      throw boom.notFound('client not found');
    }
    if (object.isBlock) {
      throw boom.conflict('client is block');
    }
    return object;
  }

  async update(id, changes) {
    const object = await models.Client.findByPk(id);
    if (!object) {
      throw boom.notFound('client not found');
    }
    if (object.isBlock) {
      throw boom.conflict('client is block');
    }
    const updObject = await object.update(changes);
    return updObject;
  }

  async delete(id) {
    const object = await models.Client.findByPk(id);
    if (!object) {
      throw boom.notFound('client not found');
    }
    if (object.isBlock) {
      throw boom.conflict('client is block');
    }
    const delObject = await object.destroy();
    return delObject;
  }

}

module.exports = ClientsService;
