import React, { useContext } from 'react'
import { LogueoContexto } from '../Contexto/Contexto';
import styles from "./Cabezal.module.css"


function LogueoUsuario() {

    const {autentEstado} = useContext(LogueoContexto);
    // console.log(autentEstado?.usuario.name)







  return (
    <div className={styles.usuarioInfo}>Usuario: {autentEstado.usuario.name}</div>
    // <div className={styles.usuarioInfo}>Usuario:</div>

  )
}

export default LogueoUsuario