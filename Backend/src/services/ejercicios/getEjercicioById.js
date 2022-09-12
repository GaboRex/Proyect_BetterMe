const { findById } = require("../../dataAccess/ejercicios");
const getEjericioByIdService = async (req, res) => {
  const { params } = req;
  const ejercicio = await findById(params);
  return { success: true, message: "Get Ejercicio", ejercicio };
};

module.exports = getEjericioByIdService;