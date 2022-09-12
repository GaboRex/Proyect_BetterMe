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

const findById = (body) => {
  const { username, password } = body;
  const encryptedPassword = hash(password)
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM usuario WHERE username = ? AND password = ?", [username, encryptedPassword], (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

// const findById = (params) => {
//   const {username} = params;
//   return new Promise((resolve, reject) => {
//     sql.query(`SELECT * FROM usuario WHERE username = ${username} `, (err, res) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(res);
//     });
//   });
// };

//findByUsernameAndPassword

module.exports = { findAll, createUsuario, findById};