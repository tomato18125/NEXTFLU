import { useEffect, useReducer } from 'react';
import './App.css';
import { autentInicial, autentReductor } from './Contexto/autentReducer';
import { LogueoContexto } from './Contexto/Contexto';
// import { peliculas10 } from './modulos/Llamado'
import Rutas from './Rutas';




function App() {
  
  const [autentEstado, despacho1] = useReducer(autentReductor, {}, autentInicial);

  useEffect( () => {
    if (autentEstado.autentificado) {
      localStorage.setItem('autent', JSON.stringify(autentEstado));
    } else {
      localStorage.removeItem('autent');   };
  }, [autentEstado.autentificado]);


  return (
    <>
    <LogueoContexto.Provider value={{
      autentEstado,
      despacho1,
    }}>
    <Rutas />
   </LogueoContexto.Provider>
    </>
  );
}

export default App;
