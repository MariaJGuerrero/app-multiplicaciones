import React from "react";
import { Link } from 'react-router-dom';
import BotonInicio from "../../componentes/boton-inicio";
import ColumnaTarjetasResultados from "../../componentes/parejas-columna- resultados";
import ColumnaTarjetasOperaciones from "../../componentes/parejas-columna-operaciones";
import './parejas.css'




function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
 
const operadores = [
    {a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10)},
    {a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10)},
    {a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10)},
    {a: getRandomIntInclusive(1, 10), b: getRandomIntInclusive(1, 10)},
]

const resultados = operadores.map((operador) => operador.a * operador.b)


function Parejas() {
    return (
        <div className="contenedor-principal-parejas">
            <header>
                <h1 className="titulo"> EMPAREJAMOS</h1>
            </header>
            
            <section className="contenedor-parejas">
            <div className="columna-parejas-operaciones">
                {operadores.map((operador) => <ColumnaTarjetasOperaciones operacion= {operador.a + ' * ' + operador.b} />)}
            </div>
            <div className="columna-parejas-resultados">
                {resultados.map((operador) => <ColumnaTarjetasResultados resultado= {operador} /> )}
            </div>
            </section>
           
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