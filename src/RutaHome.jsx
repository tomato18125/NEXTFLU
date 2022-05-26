import React, { useContext } from 'react'
import { LogueoContexto } from './Contexto/Contexto'
 import { Navigate } from 'react-router-dom';

const RutaHome = ({children}) => {
    const { autentEstado } = useContext(LogueoContexto);

    if (autentEstado.autentificado) {
        return <Navigate to={'/Principal'}/>;
       
    } else {
        return children;
    }


 
};
 export default RutaHome;

