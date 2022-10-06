
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { useState } from 'react';
import Repaso from './paginas/repaso/repaso';
import Verdadero from './paginas/verdadero/verdadero';
import Home from './paginas/home';
import Parejas from './paginas/parejas/parejas';
import puntuacionGeneral from './componentes/utils/contexto-marcador';



function App() {
  const [marcador, setMarcador] = useState(0)
 
  function sumarPuntos () {
    setMarcador(marcador+1)
  }

  return (
    <>
      <Router>      
        <Routes>
          <Route exact path="/" element={
            <puntuacionGeneral.Provider value={{ puntuacion: marcador, sumarPuntos: sumarPuntos }}>
              <Home />
            </puntuacionGeneral.Provider>
          } />
          <Route exact path="/repaso" element={
            <puntuacionGeneral.Provider value={{ puntuacion: marcador, sumarPuntos: sumarPuntos }}>
              <Repaso />
            </puntuacionGeneral.Provider>
          } />
          <Route exact path="/verdadero" element={
            <puntuacionGeneral.Provider value={{ puntuacion: marcador, sumarPuntos: sumarPuntos }}>
              <Verdadero />
            </puntuacionGeneral.Provider>
          } />
          <Route exact path="/parejas" element={ 
            <puntuacionGeneral.Provider value={{ puntuacion: marcador, sumarPuntos: sumarPuntos }}>
              <Parejas />
            </puntuacionGeneral.Provider>
         } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
