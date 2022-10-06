import { useContext } from 'react';
import puntuacionGeneral from '../../componentes/utils/contexto-marcador';
import './marcador.css'


const Marcador = () => {
    const contadorPuntos = useContext(puntuacionGeneral);
    return(
        <div className='marcador-container'>
            <h4 className='texto'>Has conseguido <span className='puntos'>{contadorPuntos.puntuacion}</span> puntos</h4>
        </div>
    )
}
export default Marcador;