import React, { useContext } from 'react'
import { LogueoContexto } from './Contexto/Contexto'
// import Home from './Vistas/Home';
import { Navigate } from 'react-router-dom';

const RutasPrivadas = ({children}) => {
    const { autentEstado } = useContext(LogueoContexto);

    if (autentEstado.autentificado) {
        return children;
    } else {
        return <Navigate to='/'/>;
    }


 
}

export default RutasPrivadas;