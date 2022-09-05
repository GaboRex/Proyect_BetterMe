const routes = require("express").Router();
const getClientes  = require("../../services/cliente/getCliente");
routes.get("/clientes", async (req, res) => {
  const response = await getClientes(req, res);
  res.json(response);
});

module.exports = routes;
