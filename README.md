# node_api
Prueba técnica para la creación de un api en node.js

Endpoints:

Listar clientes:
GET   /api/v1/clients

Obtener cliente por id:
GET   /api/v1/clients/{id}

Registrar nuevo cliente:
POST  /api/v1/clients
Request:
{
    "name": {string},
    "url": {string}
}

Actualizar cliente
PUT/PATCH /api/v1/clients/{id}
Request:
{
    "name": {string}, (opcional)
    "url": {string} (opcional)
}

Eliminar cliente
DELETE   /api/v1/clients/{id}
