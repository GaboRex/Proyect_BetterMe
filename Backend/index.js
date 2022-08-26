// const express = require('express')
// const routes = require('./src/routes')
// const app = express()

// app.use('/api', routes)

// app.listen(3000, () => {
//     console.log('Happy Codding the app listening on port 3000!')
// })

const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "copacopa",
    database: "cliente"
})

app.post('/signup/register', (req, res) => {

    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO usuario (nombre, apellido, username, password) VALUES (?,?,?,?)",
    [nombre, apellido, username, password], (err, result) => {
        console.log(err)
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM usuario WHERE username = ? AND password = ?",
    [username, password], 
    (err, result) => {
        if(err) {
            res.send({ err: err })
        } 
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ message: 'Wrong username/password combination'})
        }
    })
})

app.listen(5000, () => {
    console.log('Server started on port 5000')
})