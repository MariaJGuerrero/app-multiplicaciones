import React from "react";
import { Link } from 'react-router-dom';
import BotonInicio from "../../componentes/boton-inicio";
import './parejas.css'
import { useState, useContext } from 'react';
import puntuacionGeneral from "../../componentes/utils/contexto-marcador";





function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const operadores = [
  { a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10) },
  { a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10) },
  { a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10) },
  { a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10) },
]



const resultados = operadores.map((operador) => operador.a * operador.b)


const shuffle = (arr) => {
  const length = arr.length

  for (let i = 0; i < length; i++) {
    const rand_index = Math.floor(Math.random() * length)

    const rand = arr[rand_index]

    arr[rand_index] = arr[i]
    arr[i] = rand
  }
}

shuffle(resultados);







function Parejas() {

  const [operadoresSeleccionados, setOperadoresSeleccionados] = useState();
  const [resultadoValido, setResultadoValido] = useState();

  const contadorPuntos = useContext(puntuacionGeneral);

  console.log('En el Parejas()', contadorPuntos.puntuacion)

  return (
    <div className="contenedor-principal-parejas">
      <header>
        <h1 className="titulo">EMPAREJAMOS</h1>
      </header>

      <section className="contenedor-parejas">
        <div className="columna-parejas-operaciones">
          {operadores.map((operador) =>
            <button
              onClick={() => {
                setOperadoresSeleccionados(operador.a * operador.b) 
                setResultadoValido(undefined)
              }}
              className="tarjeta operacion"
            >
              {`${operador.a} * ${operador.b}`}
            </button>)
          }
        </div>
        <div className="columna-parejas-resultados">
          {resultados.map((resultado) =>
            <button 
              onClick={() => {
                const esValido = operadoresSeleccionados === resultado
                setResultadoValido(esValido);
                if (esValido){
                  contadorPuntos.sumarPuntos()
                  console.log('En el click', contadorPuntos.puntuacion)
                }
              } }
              className="tarjeta resultado"
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
      <footer>
        <Link to="/">
          <BotonInicio
            texto='Volver al inicio' />
        </Link>
      </footer>

    </div>
  )
}

export default Parejas;


