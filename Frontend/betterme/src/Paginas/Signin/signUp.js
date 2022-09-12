import './signup.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import registro1 from './registro1.png';
import registro2 from './registro2.png';
import { useNavigate } from 'react-router-dom'
import API from '../../config/api';
import { Field, Formik, Form } from 'formik'

function validateUsuario(value) {
  let error;
  if (!value) {
    error = 'Ingrese un usuario por favor';
  } else if (value.lenght < 6){
    error = 'Debe contener 6 caracteres minimos'
  }

  return error;
}

function validateClave(value) {
  let error;
  if (!value) {
    error = 'Ingrese un clave por favor';
  } else if (value.size < 8){
    error = 'Debe contener 6 caracteres minimos'
  }

  return error;
}


function validateNombre(value) {
  let error;
  if (!value) {
    error = 'Ingrese un nombre por favor';
  } else if (value.size < 6){
    error = 'Debe contener 6 caracteres minimos'
  }
  return error;
}

function validateApellido(value) {
  let error;
  if (!value) {
    error = 'Ingrese un apellido por favor';
  } else if (value.size < 6){
    error = 'Debe contener 6 caracteres minimos'
  }
  return error;
}

function validateClavec(value) {
  let error;
  if (!value) {
    error = 'Ingrese la clave nuevamente por favor';
  } 

  return error;
}



function App() {
  const navigate = useNavigate();


  const register = async (values) => {
  
     await API.post('/usuario', {
      nombre: values.nombre,
      apellido: values.apellido,
      username: values.usuario,
      password: values.clave
    });
    navigate('/menu')
  }

  return (
    <div className='App'>
      <div className="parce2">
        <img className="imgr2" src={registro1} />
      </div>
      <div className="parce1">
        <img className="imgr1" src={registro2} />
      </div>
      <div className="parce3">
        <Formik
          initialValues={{
            nombre: '',
            apellido: '',
            usuario: '',
            clave: '',
            claveC: ''
          }}

          onSubmit={values => {
            register(values);
          }}

        >
          {({ errors, touched, isValidating }) => (
          <Form>
            <div className="containerr">
              <h1 className="headerr">REGISTRARSE</h1>
              <label htmlFor="name"><b>Nombre</b></label>
              <Field type="text" name="nombre" validate={validateNombre} />
                {errors.nombre && touched.nombre && <div>{errors.nombre}</div>}

              <label htmlFor="lname"><b>Apellido</b></label>
              <Field type="text" name="apellido" validate={validateApellido} />
                {errors.apellido && touched.apellido && <div>{errors.apellido}</div>}

              <label htmlFor="uname"><b>Nombre de usuario</b></label>
              <Field type="text" name="usuario" validate={validateUsuario} />
                {errors.usuario && touched.usuario && <div>{errors.usuario}</div>}

              <label htmlFor="psw"><b>Contraseña</b></label>
              <Field type="password" name="clave" validate={validateClave} />
                {errors.clave && touched.clave && <div>{errors.clave}</div>}

              <label htmlFor="psw"><b>Confirmar contraseña</b></label>
              <Field type="password" name="claveC" validate={validateClavec} />
                {errors.claveC && touched.claveC && <div>{errors.claveC}</div>}

              <div className="greenButton">
                  <button type='submit'>Registrarse</button>
              </div>

              <div className="footer">
                <Link to="/signin">
                  <button type="button" className="cancelbtn">Cancelar</button>
                </Link>
              </div>
            </div>
          </Form>
          )}
          </Formik>
      </div>
    </div>
  );
}

export default App;