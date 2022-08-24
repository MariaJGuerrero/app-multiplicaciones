import React from "react";
import { Link } from 'react-router-dom';
import BotonInicio from "../../componentes/boton-inicio";



function Cuentoremas() {
    return(
        <div className="contenedor-principal-cuentoremas">
            <h1>CUENTOREMAS </h1>
            
            <Link to="/">
                <BotonInicio 
                    texto='Volver al inicio' />
            </Link>
        </div>
    )
}

export default Cuentoremas;