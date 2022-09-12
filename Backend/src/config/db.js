require('dotenv').config()
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PSWR,
  database: process.env.DATABASE,
  port: process.env.PORT
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the BetterMe MySQL server.");
});

// Create a pool connection
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PSWR,
  database: process.env.DATABASE
});

module.exports = connection;