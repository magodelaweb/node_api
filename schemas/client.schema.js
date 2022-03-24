const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(100);
const url = Joi.string().uri();

const createClientSchema = Joi.object({
  name: name.required(),
  url: url
});

const updateClientSchema = Joi.object({
  name: name,
  url: url
});

const getClientSchema = Joi.object({
  id: id.required(),
});

module.exports = { createClientSchema, updateClientSchema, getClientSchema }
