import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './login.css';
import Axios from 'axios'


function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const login = () => {
    Axios.post('http://localhost:3000/signin/login', {
      username: username,
      password: password
    }).then((response) => {

      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].username)
      }
    })

  }

  return (
    <div className="Login">
      <form className="form1">
        <h1 className="iniSe">INICIAR SESION</h1>
        <div className="form_container">
          <div className="form_group">
            <input type="text" id="usuario1" className="form_input" placeholder="" required />
            <label for="usuario1" className="form_label">Nombre de Usuario*</label>
            <span className="form_line"></span>
          </div>
          <div className="form_group">
            <input type="password" id="clave1" className="form_input" placeholder="" required />
            <label for="clave1" className="form_label">Clave</label>
            <span className="form_line"></span>
          </div>
        </div>
        {/* <br /><br /><br /> */}
        <div className="footer1">
          <Link to="/">
            <button className="btn_cancelar">Cancelar</button>
          </Link>
          <Link to="/menu">
            <button onClick={login} className="btn_iniSe">Iniciar Sesión</button>
          </Link>

          <Link to='/signup'>
            <button className="btn_crear">Crear una cuenta</button>
          </Link>
        </div>
      </form>
      {/* <h1>{loginStatus}</h1> */}
    </div>
  )
}
export default Login;