const { findAll } = require("../../dataAccess/cliente");
const getClientes = async (req, res) => {
  const clientes = await findAll();
  return { success: true, message: "Clientes", clientes };
};

module.exports = getClientes;