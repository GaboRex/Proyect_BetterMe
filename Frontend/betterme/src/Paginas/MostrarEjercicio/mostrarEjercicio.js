import React from 'react'
import {Link} from "react-router-dom";
import './mostrarEjercicio.css';

function Mostrar(){
    return(
        <div className="Mostrar">
            <div className="imagenE">
            <img className='imagenEjercicio' src="https://i.imgur.com/Qmpzczz.gif"/>
            </div>
            <div className="descripcionE">
                <div className='tituloE'>
                    <h1 className="nombreDE">Nombre del ejercicio</h1>                    
                </div>
                <div className='informacionE'>
                <p>Hola mundo Hola mundo Hola mundo Hola mundo Hola mundo Hola mundo
                    Hola mundoHola mundoHola mundoHola mundo Hola mundo Hola mundo Hola mundoHola mundo
                    Hola mundo Hola mundo Hola mundo Hola mundo
                    </p>
                </div>
                <div className='btn_atras'>
                    <button className='btnAtras'>Atras</button>
                </div>
            </div>
        </div>
    )
}

export default Mostrar