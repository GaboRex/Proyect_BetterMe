import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './login.css';
import API from '../../config/api';


function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  //const [user, setUser] = useState({})

  const [loginStatus, setLoginStatus] = useState('Hello')

  const login = async () => {
    
    try{
    const response = await API.post('/getUsuario', {
      username: username,
      password: password
    })
    debugger
    const { data } = response
    const { usuario } = data
    debugger
    if(usuario.length > 0) {
    setLoginStatus(usuario[0]?.nombre)
    debugger
    navigate('/menu')
    } else {
      setLoginStatus('Usuario o contraseña incorrectos')
    }
  } catch (err) {
    console.log(err)
  }
  }


  return (
    <div className="Login">
      {/* <form className="form1"> */}
        <h1 className="iniSe">INICIAR SESION</h1>
        <div className="form_container">
          <div className="form_group">
            <input type="text" id="usuario1" className="form_input" placeholder="" onChange = {(e) => {setUsername(e.target.value)}} required />
            <label for="usuario1" className="form_label">Nombre de Usuario*</label>
            <span className="form_line"></span>
          </div>
          <div className="form_group">
            <input type="password" id="clave1" className="form_input" placeholder="" onChange = {(e) => {setPassword(e.target.value)}} required />
            <label for="clave1" className="form_label">Clave</label>
            <span className="form_line"></span>
          </div>
        </div>
        {/* <br /><br /><br /> */}
        <div className="footer1">
          
          {/* <Link to="/">
            <button className="btn_cancelar">Cancelar</button>
          </Link> */}
          
          <button onClick={login} className="btn_iniSe">Iniciar Sesión</button>
          
          {/* <Link to='/signup'>
            <button className="btn_crear">Crear una cuenta</button>
          </Link> */}
        </div>
      {/* </form> */}
      <h1>{loginStatus}</h1>
    </div>
  )
}
export default Login;