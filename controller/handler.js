'use strict';

const axios = require('axios');
const userService = require('../service/userService');
const characterService = require('../service/characterService');

module.exports.traduccion = async (event) => {
  const payload = event.queryStringParameters;
  const results = await characterService.getCharacters(payload);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        personajes: results,
      },
    )
  };
}

module.exports.crearUsuario = async (event) => {
  const payload = JSON.parse(event.body);
  await userService.createUser(payload)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Usuario Creado Correctamente",
      },
    ),
  };
}

module.exports.muestraUsuario = async () => {
  const results = await userService.getUsers();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        usuarios:results ,
      },
    ),
  };
}

