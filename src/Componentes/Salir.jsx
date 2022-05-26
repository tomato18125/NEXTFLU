import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Salir.module.css'
import { LogueoContexto } from '../Contexto/Contexto';
import { useContext } from 'react';
import { tipos } from '../Tipos/tipos'


function Salir() {
  const navegarHome = useNavigate();
  const {despacho1} = useContext(LogueoContexto);

  const manejarSalir = (e) => {
   

    e.preventDefault();

    despacho1({
        tipos: tipos.LOGOUT,
        payload: null,
      });

      // navegarHome("/", {replace: true,});  
      navegarHome("/");  

    };

  return (
    <div className={styles.botonSalir}>
        <button onClick={manejarSalir}><p className={styles.texto} >Salir</p></button>
        
        </div>
  )
}

export default Salir