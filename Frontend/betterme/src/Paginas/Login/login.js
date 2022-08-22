import React from 'react'
import {Link} from "react-router-dom";
import './login.css';


const Login = () => {
    return(
<form action="action_page.php" method="post">
    <div className = "container">
      <h1 className = "header">INICIAR SESION</h1>
      <label for="uname"><b>Nombre de usuario</b></label>
      <input type="text" placeholder="Ingrese nombre de usuario" name="uname" required></input>
      
      <label for="psw"><b>Contraseña</b></label>
      <input type="password" placeholder="Ingrese contraseña" name="psw" required></input>

      <div class="greenButton">
      <button type="submit"><b>Iniciar Sesión</b></button>
      </div>

      <div class="footer">

        <Link to = "/">
      <button type="button" class="cancelbtn">Cancelar</button>
    </Link>
    
    <span class="psw">Crear
        <Link to = '/signup'>
          
       cuenta
      </Link>
      </span>
      
      </div>
    </div>
    </form>
    )
}
export default Login;