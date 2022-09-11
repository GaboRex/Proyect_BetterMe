import React from 'react'
import {Link} from "react-router-dom";
import './abdomen.css';


const Abdomen = () => {
    return(
        <div className="Abdomen">
            <h1 className="pabrazos">ABDOMEN</h1>
            <div className="contenedorB1">
            <p className="palabra1B"><b>Plancha</b></p>
            <Link to="/mostrarEjercicio/9">
            <button  type="button" class="botonb1">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB2">
            <p className="palabra2B"><b>Escalada de montaña</b></p>
            <Link to="/mostrarEjercicio/10">
            <button  type="button" class="botonb2">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB3">
            <p className="palabra3B"><b>Hollow hold</b></p>
            <Link to="/mostrarEjercicio/11">
            <button  type="button" class="botonb3">Explorar</button>
            </Link>
            </div>
            <div className="contenedorB4">
            <p className="palabra4B"><b>Plancha Superman</b></p>
            <Link to="/mostrarEjercicio/12">
            <button  type="button" class="botonb4">Explorar</button>
            </Link>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
export default Abdomen;