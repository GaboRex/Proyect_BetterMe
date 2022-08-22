const routes = require("express").Router();
const getClientes  = require("../../services/cliente/getClientes");
const getCliente =require("../../services/cliente/getClienteById");

routes.get("/clientes", async (req, res) => {
  const response = await getClientes(req, res);
  res.json(response);
});

routes.get("/cliente/:idCliente", async (req, res) => {
  const response = await getCliente(req, res);
  res.json(response);
});


module.exports = routes;
