const { createUsuario } = require("../../dataAccess/usuario");
const createUsuarioService = async (req, res) => {
  const { body } = req;
  console.log(body);
  const usuario = await createUsuario(body);
  return { success: true, message: "Trainer was created successfully", trainer: usuario };
};

module.exports = createUsuarioService;