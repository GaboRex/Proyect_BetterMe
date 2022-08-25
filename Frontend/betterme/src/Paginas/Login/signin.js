import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './login.css';
import Axios from 'axios'


function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const login = () => {
    Axios.post('http://localhost:3000/signin', {
      username: username, 
      password: password
    }).then((response) => {
  
      if(response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].username)
      }
    })
  
  }

    return(
      <div>
<form method="post">
    <div className = "container">
      <h1 className = "header">INICIAR SESION</h1>
      <label><b>Nombre de usuario</b></label>
      <input type="text" placeholder="Ingrese nombre de usuario" onChange={(e) => {
          setUsername(e.target.value)
          }}
          />
      
      <label><b>Contraseña</b></label>
      <input type="password" placeholder="Ingrese contraseña" onChange={(e) => {
          setPassword(e.target.value)
          }}
          />

      <div className="greenButton">
      <button onClick={login}><b>Iniciar Sesión</b></button>
      </div>

      <div className="footer">

        <Link to = "/">
      <button type="button" className="cancelbtn">Cancelar</button>
    </Link>
    
    <span className="psw">
        <Link to = '/signup'>
          
        Crear cuenta
      </Link>
      </span>
      
      </div>
    </div>
    </form>
    <h1>{loginStatus}</h1>
    </div>
    )
}
export default Login;