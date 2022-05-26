import React, { useContext } from 'react'
import { LogueoContexto } from './Contexto/Contexto'
import Home from './Vistas/Home';
import { Navigate } from 'react-router-dom';

const RutaRegistro = ({children}) => {
    const { autentEstado } = useContext(LogueoContexto);

    if (autentEstado.autentificado) {
        return <Navigate to={'/Registro'}/>;
       
    } else {
        return children;
    }


 
}

export default RutaRegistro