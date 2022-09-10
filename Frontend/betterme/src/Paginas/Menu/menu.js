import React from 'react'
import {Link} from "react-router-dom";
import './menu.css';
import menuCrearRutina from './menuCrearRutina.png';
import menuDieta from './menuDieta.png';
import menuEjercicios from './menuEjercicios.png';

const Menu = () => {
   
    return(
        <div className="Menu">
            <br/><br/><br/><br/><br/><br/>
            <div className="actividades">
            <br/>
        <h10><b>Actividades</b></h10>
        </div>
        <div className="parce">
        <img src={menuEjercicios}/>
        <div>
            <h11><b>Ejercicios recomendados</b></h11>
            </div>
            <Link to = "/ejercicios">
            <button type="button">IR</button>
            </Link>
        </div>
        <div className="parce">
            <img src={menuCrearRutina}/>
            <div>
            <h11><b>Crear tu rutina</b></h11>
            </div>
            <Link to = "/ejercicios">
            <button type="button">IR</button>
            </Link>
        </div>
        <div className="parce">
            <img src={menuDieta}/>
            <div>
            <h11><b>Dieta saludable</b></h11>
            </div>
            <button type="button">IR</button>
        </div>
        <br/><br/><br/><br/><br/>
        </div>
    )
}
export default Menu;