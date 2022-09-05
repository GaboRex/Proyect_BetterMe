const sql = require("../config/db");

const findAll = () => {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM ejercicios", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const findByCategory = (params) => {
  const {categoria} = params;
  return new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM ejercicios WHERE categoria = ${categoria}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const findByName = (params) => {
  const {nombre} = params;
  return new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM ejercicios WHERE nombre = ${nombre}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const findById = (params) => {
  const {codigo} = params;
  return new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM ejercicios WHERE codigo = ${codigo}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

module.exports = { findAll, findByCategory, findByName, findById };