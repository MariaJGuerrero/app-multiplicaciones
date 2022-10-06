import { Link } from 'react-router-dom';
import Boton from '../componentes/Boton'
import Marcador from '../componentes/marcador/marcador';


const Home = () => {

       return (
        <div className="App">
            <Marcador />
            <h1 className='titulo'>TÍTULO</h1>
                <div className='contenedor-menu'>
                <Link to="/repaso">
                    <Boton  
                        texto='REPASO' />
                </Link>
                <Link to="/verdadero">
                    <Boton 
                        texto='VERDADERO' />
                </Link>
                <Link to="/parejas">
                    <Boton 
                        texto='PAREJAS' />
                </Link>
                </div>
            
        </div>
    )
}

export default Home