import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Field, Formik, Form } from 'formik'
import './login.css';
import API from '../../config/api';

function validateUsuario(value) {
  let error;
  if (!value) {
    error = 'Por favor ingresa tu usuario';
  } 
  return error;
}

function validateClave(value) {
  let error;
  if (!value) {
    error = 'Por favor ingresa tu clave';
  }
  return error;
}

function Login() {

  
  const navigate = useNavigate()
  //const [user, setUser] = useState({})

  const [loginStatus, setLoginStatus] = useState('Hello')

  const login = async (values) => {
    
    try{
    const response = await API.post('/getUsuario', {
      username: values.usuario,
      password: values.clave
    })
    const { data } = response
    const { usuario } = data
    if(usuario.length > 0) {
    setLoginStatus(usuario[0]?.nombre)
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
      <Formik
        initialValues={{
          usuario: '',
          clave: ''
        }}

        onSubmit={values=>{
          login(values);
        }}

        
      >
        {({ errors, touched, isValidating }) => (
          <Form className="form1">
            <h1 className="iniSe">INICIAR SESION</h1>
            <div className="form_container">
              <div className="form_group">
                <Field name="usuario" validate={validateUsuario} className="form_input"/>
                {errors.usuario && touched.usuario && <div>{errors.usuario}</div>}
                <label for="usuario" className="form_label">Nombre de Usuario*</label>
                <span className="form_line"></span>
              </div>
              <div className="form_group">
                <Field type= "password" name="clave" validate={validateClave} className ="form_input"/>
                {errors.clave && touched.clave &&<div>{errors.clave}</div>}
                <label for="clave" className="form_label">Clave</label>
                <span className="form_line"></span>
              </div>
            </div>
        {/* <br /><br /><br /> */}
        <div className="footer1">
          
          <Link to="/">
            <button className="btn_cancelar">Cancelar</button>
          </Link>
          
          <button type='submit' className="btn_iniSe">Iniciar Sesión</button>
          
          <Link to='/signup'>
            <button className="btn_crear">Crear una cuenta</button>
          </Link>
        </div>
        
      </Form>
      )}
      </Formik>
    </div>
  )
}
export default Login;