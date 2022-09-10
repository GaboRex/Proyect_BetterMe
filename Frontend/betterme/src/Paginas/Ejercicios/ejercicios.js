import React from 'react'
import { Link } from "react-router-dom";
import './ejercicios.css';
import abdomen from './Abdomen.png';
import brazos from './brazos.png';
import hombros from './hombros.png';
import piernas from './piernas.png';


const Ejercicios = () => {
    return (
        <div className="Ejercicios">
            <h1 className="palabra">Ejercicios</h1>
            <h2 className="palabra2">Busca el ejercicio que deseas y empieza a trabajarlo</h2>
            <div className="primerlinea">
                <div className="container">
                    <img src={brazos} />
                    <h3 className="pab">BRAZOS</h3>
                    <Link to="/brazos">
                        <button className="btn">IR</button>
                    </Link>
                </div>
                <div className="container1">
                    <img src={piernas} />
                    <h3 className="pab1">PIERNAS</h3>
                    <button className="btn1">IR</button>
                </div>
            </div>
            <div className="container2">
                <img src={abdomen} />
                <h3 className="pab2">ABDOMEN</h3>
                <button className="btn2">IR</button>
            </div>
            <div className="container3">
                <img src={hombros} />
                <h3 className="pab3">HOMBROS</h3>
                <button className="btn3">IR</button>
            </div>
        </div>
    )
}
export default Ejercicios;