const routes = require("express").Router();
const getUsuarios = require("../../services/usuario/getUsuarios");
const createUsuarioService = require("../../services/usuario/createUsuario")
const getUsuarioByIdService = require("../../services/usuario/getUsuarioById")
const getUsuarioByUsernameAndPasswordService = require("../../services/usuario/getUsuarioByUsername&Password")

routes.get("/usuarios", async (req, res) => {
  const response = await getUsuarios(req, res);
  res.json(response);
});

routes.post("/getUsuario", async (req, res) => {
  const response = await getUsuarioByIdService(req, res);
  res.json(response);
});

// routes.get("/usuario/:username", async (req, res) => {
//   const response = await getUsuarioByIdService(req, res);
//   res.json(response);
// });

// routes.get("/usuario/:username&password", async (req, res) => {
//   const response = await getUsuarioByUsernameAndPasswordService(req, res);
//   res.json(response);
// });

routes.post("/usuario", async (req, res) => {
  const response = await createUsuarioService(req, res);
  res.json(response);
});

module.exports = routes;