import React from "react";
import TablaInput from "../../componentes/tabla-input";
import './repaso.css'
import { useState } from "react";



const tablas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function Repaso (){

    const [numeroTablaElegido, setNumeroTablaElegido] = useState(1);

    
    return(
        <>
            <div className="contenedor-Repaso">
                <h1>REPASO</h1>
                <div className="menu-botons">
                    {tablas.map( (numeroTabla) => <button className="tabla-boton" onClick={ () => setNumeroTablaElegido(numeroTabla) }>Tabla {numeroTabla}</button> )}
                  
                </div>
                <div className="contenedor-principal-tabla">
                    
                   {multiplicadores.map((numero) =>  <TablaInput numeroTabla = {parseInt(numeroTablaElegido)} multiplicador = {parseInt(numero)}/>)}

                </div>
                
                
            </div>
            
        </>
    )
}

export default Repaso;