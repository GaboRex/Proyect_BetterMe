const { findById } = require("../../dataAccess/usuario");
const getUsuarioByIdService = async (req, res) => {
  const { params } = req;
  const usuario = await findById(params);
  return { success: true, message: "Get User", usuario };
};

module.exports = getUsuarioByIdService;