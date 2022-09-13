import React from 'react'
import {Link} from "react-router-dom";
import './inicio.css';

const Init = () => {
    return (
    <div className="Init">
      <br /><br /><br /><br /><br /><br />
    <h1>BetterMe</h1>
    <h2>Sé fuerte cuando seas débil, valiente cuando tengas miedo y humilde cuando seas victorioso</h2>
    <div class="botonicio">
        <Link to = "/signin">
        <button  type="button" class="botenetro"><b>INICIAR</b>
        </button>
        </Link>
    </div>
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    </div>
    )
}
export default Init