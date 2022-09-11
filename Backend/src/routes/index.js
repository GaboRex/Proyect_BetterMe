const routes = require("express").Router();
const usuario = require("./usuario/usuarioRoutes");
const ejercicios = require("./ejercicios/ejerciciosRoutes")
const BASE_URL = "/v1/cliente";

routes.use(BASE_URL, usuario);
routes.use(BASE_URL, ejercicios);

module.exports = routes;