import React from 'react';
import { Link } from 'react-router-dom';
import BotonInicio from '../../componentes/boton-inicio';
import BienHecho from '../../componentes/verdadero-bien-hecho';
import './verdadero.css'
import{ useState, useContext } from 'react';
import puntuacionGeneral from '../../componentes/utils/contexto-marcador';
import Marcador from '../../componentes/marcador/marcador';


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

const Verdadero = () => {
   const[bienHecho, setBienHecho] = useState();
   const[operadores, setOperadores] = useState(generarOperadores());
   const contadorPuntos = useContext(puntuacionGeneral);

   const resultado = operadores[0] * operadores[1]
   const opcionesResultados = generarOpcionesResultados(resultado)

   function clearState (){
        setOperadores(generarOperadores())
        setBienHecho(undefined)
    }
    
    function clickHandler(opcion) {
        let esValido = opcion === resultado
        setBienHecho(esValido )
        if(esValido){
            contadorPuntos.sumarPuntos()
            console.log(contadorPuntos.puntuacion)
        }
    }


    return (
        <div className='contenedor-principal-verdadero'>
            <Marcador />
            <h1 className='titulo'> ¿CUÁL ES EL CORRECTO? </h1>
            <div className='contenedor-operacion'>
                <p>{`${operadores[0]} * ${operadores[1]}`}</p>
            </div>
            
            <div 
                className='contenedor-opciones-resultado'
            >
                {opcionesResultados.map((opcion) => 
                    <button
                        onClick={() => clickHandler(opcion)} 
                        className='boton'
                        key= {opcion}
                    >
                        {opcion}
                    </button>)
                }
                
            </div>
            {bienHecho ? <BienHecho LimpiarEstado={clearState} /> : ''}
            {bienHecho === false ? <h1 className='titulo'>Sigue intentándolo!</h1> : ''}
            
            
            <Link to='/'>
                <BotonInicio texto='Volver al inicio' />
            </Link>
        </div>
            
    )
}

export default Verdadero;