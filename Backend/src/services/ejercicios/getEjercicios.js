const { findAll } = require("../../dataAccess/ejercicios");
const getEjercicios = async (req, res) => {
  const ejercicios = await findAll();
  return { success: true, message: "Ejercicios", ejercicios };
};

module.exports = getEjercicios;