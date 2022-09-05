const { findByCategory } = require("../../dataAccess/ejercicios");
const getEjerciciosByCategoryService = async (req, res) => {
  const { params } = req;
  const ejercicios = await findByCategory(params);
  return { success: true, message: "Get Ejercicios", ejercicios };
};

module.exports = getEjerciciosByCategoryService;