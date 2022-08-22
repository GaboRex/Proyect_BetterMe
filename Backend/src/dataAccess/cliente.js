const sql = require("../config/db");

const findAll = () => {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM cliente", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const findById = (codigo) => {
  return new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM cliente WHERE codigo = ${codigo}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

module.exports = { findAll, findById };
