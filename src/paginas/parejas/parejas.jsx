import React from 'react';
import { Link } from 'react-router-dom';
import BotonInicio from '../../componentes/boton-inicio';
import './parejas.css'
import { useState, useContext } from 'react';
import puntuacionGeneral from '../../componentes/utils/contexto-marcador';
import Marcador from '../../componentes/marcador/marcador';
import { useEffect } from 'react';


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}



const generarOperadores = () => [
      { a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10) },
      { a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10) },
      { a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10) },
      { a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10) },
  ]

  
const generarResultados = (operadores) => operadores.map((operador) => operador.a * operador.b);

const shuffle = (arr) => {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    const rand_index = Math.floor(Math.random() * length)
    const rand = arr[rand_index]
    arr[rand_index] = arr[i]
    arr[i] = rand
  }
}

const restart = (setOperaciones, setResultados) => {
  const operadores = generarOperadores()
  setOperaciones(operadores) 

  const resultado = generarResultados(operadores)
  console.log('restart', {operadores, resultado})
  shuffle(resultado);  
  setResultados(resultado) 
}

let operacionSeleccionada = undefined;
const mostrarOperaciones = (operaciones, resultadoValido) => {
  console.log(operaciones)
  return operaciones.map((operador,i) =>
   <button
     onClick={() => {
        operacionSeleccionada = operador.a * operador.b
       
     }}
     className= {resultadoValido ? 'tarjeta hecho' : 'tarjeta operacion'}
     key= {i}
   >
     {`${operador.a} x ${operador.b}`}
   </button>)
}





const Parejas = () => {

  //const [operadoresSeleccionados, setOperadoresSeleccionados] = useState();
  const [resultadoValido, setResultadoValido] = useState();
  const [operaciones, setOperaciones] = useState([]);
  const [resultados, setResultados] = useState([]);


  const contadorPuntos = useContext(puntuacionGeneral);
  useEffect(()=> {
    restart(setOperaciones, setResultados)
  }, [])
 
  return (
    <div className='contenedor-principal-parejas'>
      <header>
        <Link to='/'>
            <BotonInicio
              texto='Volver al inicio' />
        </Link>
        <h1 className='titulo'>EMPAREJAMOS</h1>
        <Marcador />
      </header>
      <section className='contenedor-parejas'>
        <div className='columna-parejas-operaciones'>
            {mostrarOperaciones(operaciones, resultadoValido)}  
        </div>
        <div className='columna-parejas-resultados'>
          {resultados.map((resultado, i) =>
            <button 
              onClick={() => {
                const esValido = operacionSeleccionada === resultado
                setResultadoValido(esValido);
                if (esValido){
                  contadorPuntos.sumarPuntos()
                  
                }else{
                  contadorPuntos.restarPuntos()
                }
              } }
              className= {resultadoValido ? 'tarjeta hecho' : 'tarjeta resultado'}
              key= {i}
            >
              {resultado}
            </button>)
          }
        </div>
      </section>
          <h3>
              {resultadoValido ? 'Bien hecho!' : undefined}
              {resultadoValido === false ? 'no, no, no, no, no' : undefined}
          </h3>
          <button className='boton' onClick={() => restart(setOperaciones, setResultados)}>Volver a jugar</button>
    </div>
  )
}



export default Parejas;


