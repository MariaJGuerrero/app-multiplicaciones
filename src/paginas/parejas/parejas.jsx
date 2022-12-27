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
let operacionAcertada = undefined;

const mostrarOperaciones = (operaciones, operacionesAcertadas) => {
  
  return operaciones.map((operador,i) =>{
  const clase = `tarjeta operacion${operacionesAcertadas.includes(i) ? ' hecho' : ''}`
  return (<button
     onClick={() => {
        operacionSeleccionada = operador.a * operador.b
        operacionAcertada = i
        console.log('operacion acertada', operacionAcertada)
     }}
     className= {clase}
     key= {i}
   >
     {`${operador.a} x ${operador.b}`}
   </button>)
   
})}

let resultadoAcertado = undefined;
const mostrarResultados = (resultados, setResultadoValido, contadorPuntos, setOperacionesAcertadas, operacionesAcertadas) => {
  console.log('RESULTADOS', resultados)
   return resultados.map((resultado, i) =>
    <button 
      onClick={() => {
        const esValido = operacionSeleccionada === resultado
        resultadoAcertado = i;
        setResultadoValido(esValido);
        if (esValido){
          contadorPuntos.sumarPuntos()
          operacionesAcertadas = [...operacionesAcertadas, operacionAcertada]
          setOperacionesAcertadas(operacionesAcertadas)
          console.log('OPERACIONES ACERTADAS', operacionesAcertadas)

        }else{
          contadorPuntos.restarPuntos()
        }
      } }
      className='tarjeta resultado'
      key= {i}
    >
      {resultado}
    </button>)
  }



const Parejas = () => {

  const [resultadoValido, setResultadoValido] = useState();
  const [operaciones, setOperaciones] = useState([]);
  const [operacionesAcertadas, setOperacionesAcertadas] = useState([]);
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
            {mostrarOperaciones(operaciones, operacionesAcertadas )}  
        </div>
        <div className='columna-parejas-resultados'>
          {mostrarResultados(resultados, setResultadoValido, contadorPuntos, setOperacionesAcertadas, operacionesAcertadas)}
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


