const { findAll } = require("../../dataAccess/usuario");
const getUsuarios = async (req, res) => {
  const usuarios = await findAll();
  return { success: true, message: "Usuarios", usuarios };
};

module.exports = getUsuarios;