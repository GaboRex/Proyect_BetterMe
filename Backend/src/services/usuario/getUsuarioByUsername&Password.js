const { findByUsernameAndPassword } = require("../../dataAccess/usuario");
const getUsuarioByUsernameAndPasswordService = async (req, res) => {
  const { params } = req;
  const usuario = await findByUsernameAndPassword(params);
  return { success: true, message: "Get User", usuario };
};

module.exports = getUsuarioByUsernameAndPasswordService;