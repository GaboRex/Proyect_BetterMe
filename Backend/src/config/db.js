require('dotenv').config()

let mysql = require('mysql')

//TODO change config file to environment variable

let connection = mysql.createConnection({
    host:'us-cdbr-east-06.cleardb.net',
    user: 'b5fb25eeb450c7',
    password: '498704be',
    database: 'heroku_64c056bb055525b',


})

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });



module.exports = connection