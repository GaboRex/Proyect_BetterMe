require('dotenv').config()

let mysql = require('mysql')

//TODO change config file to environment variable

let connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PSWR,
    database: process.env.DATABASE
})

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PSWR,
    database: process.env.DATABASE
})

module.exports = connection