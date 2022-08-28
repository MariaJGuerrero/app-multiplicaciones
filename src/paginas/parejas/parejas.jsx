import React from "react";
import { Link } from 'react-router-dom';
import BotonInicio from "../../componentes/boton-inicio";
import './parejas.css'
import { useState } from 'react';




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

  return (
    <div className="contenedor-principal-parejas">
      <header>
        <h1 className="titulo"> EMPAREJAMOS</h1>
      </header>

      <section className="contenedor-parejas">
        <div className="columna-parejas-operaciones">
          {operadores.map((operador, index) =>
            <button
              onClick={() =>
                setOperadoresSeleccionados(operador.a * operador.b)
              }
              className={"tarjeta operacion"}
            >
              {`${operador.a} * ${operador.b}`}
            </button>)
          }
        </div>
        <div className="columna-parejas-resultados">
          {resultados.map((resultado) =>
            <button 
              onClick={() => {
                if (operadoresSeleccionados === resultado) {
                  setResultadoValido(true)
                }
              }}
              className={"tarjeta resultado"}
            >
              {resultado}
            </button>)
          }
        </div>
      </section>
          <p>{resultadoValido? 'Bien hecho!' : 'no, no, no, no, no'}</p>
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