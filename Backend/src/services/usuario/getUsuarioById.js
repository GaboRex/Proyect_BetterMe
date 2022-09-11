const { findById } = require("../../dataAccess/usuario");
const getUsuarioByIdService = async (req, res) => {
  const { body } = req;
  console.log(body);
  const usuario = await findById(body);
  return { usuario };
};

module.exports = getUsuarioByIdService;