const { findById } = require("../../dataAccess/cliente");
const getCliente = async (req, res) => {
  //const {params} = req;
  //const {idCliente} = params;
  const cliente = await findById(2);
  return { success: true, message: "Cliente", cliente };
};

module.exports = getCliente;