import {comprobarResultado} from './utils/comprobar-resultado'
import {useState} from 'react';

const TablaInput = ({ numeroTabla, multiplicador }) => {
    let resultadoOperacion = numeroTabla * multiplicador;
    let resultadoDelUsuario ;
    const [esResultadoValido, setEsResultadoValido] = useState();


    return(
        <div className='contenedor-fila-tabla'>
            <div className='contenedor-tabla-operacion'>{numeroTabla} x {multiplicador}</div>
                <input
                    type='number'
                    onChange={(evento) => { 
                        resultadoDelUsuario = parseInt(evento.target.value)
                        setEsResultadoValido(comprobarResultado(resultadoOperacion, resultadoDelUsuario))
                    } } 
                    className='contenedor-resultado-input'
                ></input> 
                <div className='contenedor-evaluacion'>
                    {esResultadoValido ? 'bien!' : undefined}      
                    {esResultadoValido === false  ? <span className='contenedor-evaluacion-mal'>mal!</span> : undefined}
                </div>
        </div>   
    )  
}




export default TablaInput;