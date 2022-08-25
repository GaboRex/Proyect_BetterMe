import React from 'react'
import {Link} from "react-router-dom";
import './menu.css';
import dietaImage from './dieta.jpeg';
import pesasSinDuenio from './pesasSinDuenio.jpeg';
import seniorJalando from './seniorJalando.jpeg';

const Menu = () => {
    return(
        <div className="Menu">
            <br/><br/><br/><br/><br/><br/>
            <div className="actividades">
        <h10><b>Actividades</b></h10>
        </div>
        <div className="parce">
        <img src={pesasSinDuenio}/>
        <div>
            <h11><b>Ejercicios recomendados</b></h11>
            </div>
            <button type="button">IR</button>
        </div>
        <div className="parce">
            <img src={seniorJalando}/>
            <div>
            <h11><b>Crear tu rutina</b></h11>
            </div>
            <button type="button">IR</button>
        </div>
        <div className="parce">
            <img src={dietaImage}/>
            <div>
            <h11><b>Dieta saludable</b></h11>
            </div>
            <button type="button">IR</button>
        </div>
        </div>
    )
}
export default Menu;