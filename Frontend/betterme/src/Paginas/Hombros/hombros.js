import React from 'react'
import {Link} from "react-router-dom";
import './hombros.css';


const Hombros = () => {
    return(
        <div className="Hombros">
            <h1 className="pabrazos">HOMBROS</h1>
            <div className="contenedorB1">
            <p className="palabra1B"><b>Press Militar</b></p>
            <Link to="/mostrarEjercicio/13">
            <button  type="button" class="botonb1">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB2">
            <p className="palabra2B"><b>Elevaciones laterales con mancuernas</b></p>
            <Link to="/mostrarEjercicio/14">
            <button  type="button" class="botonb2">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB3">
            <p className="palabra3B"><b>Remo al mentón</b></p>
            <Link to="/mostrarEjercicio/15">
            <button  type="button" class="botonb3">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB4">
            <p className="palabra4B"><b>Encogimientos de hombros</b></p>
            <Link to="/mostrarEjercicio/16">
            <button  type="button" class="botonb4">Explorar</button>
            </Link>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
export default Hombros;