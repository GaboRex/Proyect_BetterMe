import React from 'react'
import {Link} from "react-router-dom";
import './piernas.css';


const Piernas = () => {
    return(
        <div className="Piernas">
            <h1 className="pabrazos">Piernas</h1>
            <div className="contenedorB1">
            <p className="palabra1B"><b>Sentadillas sobre pelota</b></p>
            <Link to="/mostrarEjercicio/5">
            <button  type="button" class="botonb1">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB2">
            <p className="palabra2B"><b>Salto de zumo</b></p>
            <Link to="/mostrarEjercicio/6">
            <button  type="button" class="botonb2">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB3">
            <p className="palabra3B"><b>Estocada lateral</b></p>
            <Link to="/mostrarEjercicio/7">
            <button  type="button" class="botonb3">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB4">
            <p className="palabra4B"><b>Sentadillas de una pierna</b></p>
            <Link to="/mostrarEjercicio/8">
            <button  type="button" class="botonb4">Explorar</button>
            </Link>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
export default Piernas;