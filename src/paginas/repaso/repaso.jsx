import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TablaInput from '../../componentes/tabla-input';
import './repaso.css'
import BotonInicio from '../../componentes/boton-inicio';
import Marcador from '../../componentes/marcador/marcador';
import { useRef } from 'react';

const tablas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Repaso = () =>{

    const [numeroTablaElegido, setNumeroTablaElegido] = useState(1);
    const divRef = useRef();
    
    const clearInputs = () => {
        const inputs = divRef.current.querySelectorAll('input')
        console.log([...inputs]);
        [...inputs].map((input) => input.value = '');
    }

    return(
        <div ref={divRef} className='contenedor-Repaso'>
            <header>
                <Link to='/'>
                    <BotonInicio 
                        texto='Volver al inicio' />
                </Link>
                <h1 className='titulo'>REPASO</h1>
                <Marcador />   
            </header>
            <section className='section'>
                <div className='menu-botons'>
                    {tablas.map((numeroTabla) => 
                        <button 
                            className='tabla-boton'
                            onClick={() => {
                                setNumeroTablaElegido(numeroTabla)
                                clearInputs()
                            }}
                            key= {numeroTabla}
                        >
                            Tabla {numeroTabla}
                        </button>)}
                </div>
                <div className='contenedor-principal-tabla'>  
                  
                    {multiplicadores.map((numero) =>  
                        <TablaInput numeroTabla = {parseInt(numeroTablaElegido)} multiplicador = {parseInt(numero)} key={numero}/>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Repaso;