
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Boton from '../componentes/Boton'



function Home() {
    return (
        <div className="App">
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
            <Link to="/cuentoremas">
                <Boton 
                     texto='CUENTOREMAS' />
            </Link>
            </div>
        </div>
    )
}

export default Home