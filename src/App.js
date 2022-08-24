
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Repaso from './paginas/repaso/repaso';
import Verdadero from './paginas/verdadero/verdadero';
import Home from './paginas/home';
import Parejas from './paginas/parejas/parejas';
import Cuentoremas from './paginas/cuentoremas/cuentoremas';



function App() {
  return (
    <>
      <Router>      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/repaso" element={<Repaso />} />
          <Route exact path="/verdadero" element={<Verdadero />} />
          <Route exact path="/parejas" element={<Parejas />} />
          <Route exact path="/cuentoremas" element={<Cuentoremas />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
