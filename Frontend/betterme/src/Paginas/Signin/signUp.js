import './signup.css';
import {Link} from "react-router-dom";
import React, { useState } from 'react';

function App() {

const [name, setName] = useState('')
const [lastName, setLastName] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const checkPassword = (verification) => {
  if(verification === password) {
    doLogin()
  } else {
    
  }
}

const doLogin = (password) => {

}

  return (
    <div>
    <form action="action_page.php" method="post"> 
      <div class="container">
        <h1 class="header">REGISTRARSE</h1>
        <label for="name"><b>Nombre</b></label>
        <input type="text" placeholder="Ingrese su nombre" name="uname" value={name} onChange={ (event) => { setName(event.target.value)}} required/>

        <label for="lname"><b>Apellido</b></label>
        <input type="text" placeholder="Ingrese su apellido" name="uname" value={lastName} onChange={ (event) => { setLastName(event.target.value)}} required/>

        <label for="uname"><b>Nombre de usuario</b></label>
        <input type="text" placeholder="Ingrese su nombre de usuario" name="uname" value={username} onChange={ (event) => { setUsername(event.target.value)}} required/>

        <label for="psw"><b>Contraseña</b></label>
        <input type="password" placeholder="Ingrese su contraseña" name="psw" value={password} onChange={ (event) => { setPassword(event.target.value)}} required/>

        <label for="psw"><b>Confirmar contraseña</b></label>
        <input type="password" placeholder="Ingrese su contraseña nuevamente" name="psw" required/>

        <div class="greenButton">
        <button type="submit">Registrarse</button>
        </div>

        <div class="footer">
        <Link to = "/login">
          <button type="button" class="cancelbtn">Cancelar</button>
        </Link>
        </div>
      </div>
    </form>
    </div>
  );
}

export default App;
