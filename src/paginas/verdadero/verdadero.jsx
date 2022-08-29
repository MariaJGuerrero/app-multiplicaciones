import React from "react";
import { Link } from 'react-router-dom';
import BotonInicio from "../../componentes/boton-inicio";
import './verdadero.css'
import { useState } from 'react';





function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const generarOperadores = [getRandomIntInclusive(1, 10), getRandomIntInclusive(1, 10)]  
  
  const operacion = `${generarOperadores[0]} * ${generarOperadores[1]}`
 

  const resultado = generarOperadores[0] * generarOperadores[1]

  console.log(resultado)


  const opcionesResultados = [
    resultado,
    getRandomIntInclusive(1, 10),
    getRandomIntInclusive(1, 10),
    getRandomIntInclusive(1, 10)
    ]

  const shuffle = (arr) => {
    const length = arr.length
  
    for (let i = 0; i < length; i++) {
      const rand_index = Math.floor(Math.random() * length)
  
      const rand = arr[rand_index]
  
      arr[rand_index] = arr[i]
      arr[i] = rand
    }
  }

  shuffle(opcionesResultados)




function Verdadero() {

    const [opcionSeleccionado, setOpcionSeleccionado] = useState();

    return (
        <div className="contenedor-principal-verdadero">
            <h1 className="titulo"> ¿CUÁL ES EL CORRECTO? </h1>
            <div className="contenedor-operacion">
                <p>{operacion}</p>
            </div>
            <button 
               // onChange={() =>setOpcionSeleccionado(opcion)}
               
                /*onClick={() => {
                    if (opcionSeleccionado === resultado){
                        alert('muy bien!')
                    }else{
                        alert('sigue intentandolo!')
                    } }
                    
                }*/
                className="contenedor-opciones-resultado">
                {opcionesResultados.map((opcion) => 
                 <button className="boton">{opcion}</button>)
                
                }
                
                
            </button>
            
            <Link to="/">
                <BotonInicio 
                    texto='Volver al inicio' />
            </Link>
        </div>
            
    )
}

export default Verdadero;