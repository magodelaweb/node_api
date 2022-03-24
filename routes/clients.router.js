const express = require('express');

const ClientsService = require('./../services/client.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createClientSchema, updateClientSchema, getClientSchema } = require('./../schemas/client.schema');

const router = express.Router();
const service = new ClientsService();

// Listar Clientes
router.get('/', async (req, res, next)=>{
  try {
    const clients = await service.find();
    res.json(clients);
  } catch (error) {
    next(error);
  }
});

// Obtener cliente por id
router.get('/:id',
  validatorHandler(getClientSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const client = await service.findOne(id);
      res.json(client);
    } catch (error) {
      next(error);
    }
  }
);

// Crear cliente
router.post('/',
  validatorHandler(createClientSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newClient = await service.create(body);
      res.status(201).json(newClient);
    } catch (error) {
      next(error);
    }
  }
);

// Actualizar cliente
router.put('/:id',
  validatorHandler(getClientSchema, 'params'),
  validatorHandler(updateClientSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const client = await service.update(id, body);
      res.json(client);
    } catch (error) {
      next(error);
    }
  }
);

// Actualizar un campo del cliente
router.patch('/:id',
  validatorHandler(getClientSchema, 'params'),
  validatorHandler(updateClientSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const client = await service.update(id, body);
      res.json(client);
    } catch (error) {
      next(error);
    }
  }
);

//Eliminar cliente
router.delete('/:id',
  validatorHandler(getClientSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
