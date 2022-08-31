import React from "react";
import { Link } from 'react-router-dom';
import BotonInicio from "../../componentes/boton-inicio";
import BienHecho from "../../componentes/verdadero-bien-hecho";
import './verdadero.css'
import{useState} from 'react';


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const generarOperadores = () => [getRandomIntInclusive(1, 10), getRandomIntInclusive(1, 10)]

const generarOpcionesResultados = (resultado) => {
    
    const opcionesResultados = [
        resultado,
        getRandomIntInclusive(1, 100),
        getRandomIntInclusive(1, 100),
        getRandomIntInclusive(1, 100)
    ]

    shuffle(opcionesResultados)

    return opcionesResultados
}

const shuffle = (arr) => {
    const length = arr.length

    for (let i = 0; i < length; i++) {
        const rand_index = Math.floor(Math.random() * length)

        const rand = arr[rand_index]

        arr[rand_index] = arr[i]
        arr[i] = rand
    }
}

function Verdadero() {
   const[bienHecho, setBienHecho] = useState();
   const[operadores, setOperadores] = useState(generarOperadores());

   const resultado = operadores[0] * operadores[1]
   const opcionesResultados = generarOpcionesResultados(resultado)

   function clearState (){
        setOperadores(generarOperadores())
        setBienHecho(undefined)
    }


    function clickHandler(opcion) {
        let opcionSeleccionado = opcion
        setBienHecho(opcionSeleccionado === resultado)
    }


    return (
        <div className="contenedor-principal-verdadero">
            <h1 className="titulo"> ¿CUÁL ES EL CORRECTO? </h1>
            <div className="contenedor-operacion">
                <p>{`${operadores[0]} * ${operadores[1]}`}</p>
            </div>
            
            <div 
                className="contenedor-opciones-resultado"
            >
                {opcionesResultados.map((opcion) => 
                    <button
                        onClick={() => clickHandler(opcion)} 
                        className="boton"
                    >
                        {opcion}
                    </button>)
                }
                
            </div>
            {bienHecho ? <BienHecho LimpiarEstado={clearState} /> : ''}
            {bienHecho === false ? <h1 className="titulo">Sigue intentándolo!</h1> : ''}
            
            
            <Link to="/">
                <BotonInicio texto='Volver al inicio' />
            </Link>
        </div>
            
    )
}

export default Verdadero;