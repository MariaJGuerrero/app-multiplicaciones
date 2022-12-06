import {comprobarResultado} from './utils/comprobar-resultado'
import { useState, useContext } from 'react';
import puntuacionGeneral from '../componentes/utils/contexto-marcador';
import { useEffect } from 'react';

const TablaInput = ({ numeroTabla, multiplicador }) => {
    let resultadoOperacion = numeroTabla * multiplicador;
    let resultadoDelUsuario ;
    const [esResultadoValido, setEsResultadoValido] = useState();
    const contadorPuntos = useContext(puntuacionGeneral);

    useEffect(() => {
        setEsResultadoValido(undefined)
    }, [numeroTabla])

    const showMessage = () => {
        if(esResultadoValido){
            return '¡Bien!'
        }

        if(esResultadoValido === false){
            return <span className='contenedor-evaluacion-mal'>¡Mal!</span>
        }
    }

    return(
        <div className='contenedor-fila-tabla'>
            <div className='contenedor-tabla-operacion'>{numeroTabla} x {multiplicador}</div>
                <input
                    type='number'
                    onChange={(evento) => { 
                        resultadoDelUsuario = parseInt(evento.target.value)
                        setEsResultadoValido(comprobarResultado(resultadoOperacion, resultadoDelUsuario))
                        if(resultadoDelUsuario === resultadoOperacion){
                            contadorPuntos.sumarPuntos()
                        }
                    } } 
                    className='contenedor-resultado-input'
                ></input> 
                <div className='contenedor-evaluacion'>
                    <p className='message'>{showMessage()}</p>
                </div>
        </div>   
    )  
}





export default TablaInput;