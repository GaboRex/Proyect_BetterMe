const routes = require("express").Router();
const getEjercicios = require("../../services/ejercicios/getEjercicios");
const getEjerciciosByCategory = require("../../services/ejercicios/getEjerciciosByCategory");
const getEjericioByNameService = require("../../services/ejercicios/getEjercicioByName");
const getEjericioByIdService = require("../../services/ejercicios/getEjercicioById");

routes.get("/ejercicios", async (req, res) => {
  const response = await getEjercicios(req, res);
  res.json(response);
});

routes.get("/ejercicios/:categoria", async (req, res) => {
  const response = await getEjerciciosByCategory(req, res);
  res.json(response);
});

routes.get("/ejercicio/:nombre", async (req, res) => {
  const response = await getEjericioByNameService(req, res);
  res.json(response);
});

// routes.get("/ejercicio/:codigo", async (req, res) => {
//   const response = await getEjericioByIdService(req, res);
//   res.json(response);
// });

module.exports = routes;