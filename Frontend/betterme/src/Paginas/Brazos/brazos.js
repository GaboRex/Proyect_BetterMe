import React from 'react'
import {Link} from "react-router-dom";
import './brazos.css';


const Brazos = () => {
    return(
        <div className="Brazos">
            <h1 className="pabrazos">BRAZOS</h1>
            <div className="contenedorB1">
            <p className="palabra1B"><b>Curl para biceps con barra <br/>olimpica</b></p>
            <Link to="/mostrarEjercicio/1">
            <button  type="button" class="botonb1">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB2">
            <p className="palabra2B"><b>Curl con barra Z</b></p>
            <Link to="/mostrarEjercicio/2">
            <button  type="button" class="botonb2">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB3">
            <p className="palabra3B"><b>Remo reverso con mancuernas</b></p>
            <Link to="/mostrarEjercicio/3">
            <button  type="button" class="botonb3">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB4">
            <p className="palabra4B"><b>Flexiones diamante con banco</b></p>
            <Link to="/mostrarEjercicio/4">
            <button  type="button" class="botonb4">Explorar</button>
            </Link>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
export default Brazos;