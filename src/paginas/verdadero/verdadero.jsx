import React from "react";
import { Link } from 'react-router-dom';
import BotonInicio from "../../componentes/boton-inicio";
import './verdadero.css'


const opcionesResultados = [1, 2, 3, 4]

function Verdadero() {
    return (
        <div className="contenedor-principal-verdadero">
            <h1 className="titulo"> ¿CUÁL ES EL CORRECTO? </h1>
            <div className="contenedor-operacion">
                <p>4x5</p>
            </div>
            <div className="contenedor-opciones-resultado">
                {opcionesResultados.map((opcion) => <button className="boton">{opcion}</button>)}
            </div>
            <Link to="/">
                <BotonInicio 
                    texto='Volver al inicio' />
            </Link>
        </div>
            
    )
}

export default Verdadero;