const sql = require("../config/db");
const { createHash } = require('crypto')

const hash = (string) => {
  return createHash('sha256').update(string).digest('hex')
}

const findAll = () => {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM usuario", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const createUsuario = (body) => {
  const { nombre, apellido, username, password } = body;
  const encryptedPassword = hash(password)
  // String Template
  let query = `insert into usuario (nombre, apellido, username, password) values ( '${nombre}' , '${apellido}','${username}' ,'${encryptedPassword}' );`;
  return new Promise((resolve, reject) => {
    sql.query(query, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const findById = (params) => {
  const {id} = params;
  return new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM usuario WHERE id = ${id} `, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const findByUsernameAndPassword = (params) => {
  const { username, password } = params;
  return new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM usuario WHERE username = ${username} && password = ${password}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};



module.exports = { findAll, createUsuario, findById, findByUsernameAndPassword};