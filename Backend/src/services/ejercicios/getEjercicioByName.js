const { findByName } = require("../../dataAccess/ejercicios");
const getEjericioByNameService = async (req, res) => {
  const { params } = req;
  const ejercicio = await findByName(params);
  return { success: true, message: "Get Ejercicio", ejercicio };
};

module.exports = getEjericioByNameService;