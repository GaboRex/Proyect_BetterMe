import React from 'react'
import {Link} from "react-router-dom";
import About from './sobreNosotros.jsx'
import './inicio.css';

const Init = () => {
    return (
    <div className="Init">
      <br /><br /><br /><br /><br /><br />
    <h1>BetterMe</h1>
    <h2>Sé fuerte cuando seas débil, valiente cuando tengas miedo y humilde cuando seas victorioso</h2>
    <div class="botonicio">
        <Link to = "/login">
        <button  type="button" class="botenetro"><b>INICIAR</b>
        </button>
        </Link>
    </div>
    
    
    <div>
      <About />
    </div>

    
    </div>
    )
}
export default Init