import React from "react";
import { Link } from 'react-router-dom';
import BotonInicio from "../../componentes/boton-inicio";



function Parejas() {
    return (
        <div className="contenedor-principal-parejas">
            <h1> EMPAREJAMOS</h1>
            
            <Link to="/">
                <BotonInicio 
                    texto='Volver al inicio' />
            </Link>
        </div>
    )
}

export default Parejas;