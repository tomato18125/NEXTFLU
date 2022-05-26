import React from 'react'
import styles from "./Navegacion.module.css"
import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <div className={styles.contenedor}>
    <header>
   
    <Link to='/' className={styles.flu}> 
    <h1 className={styles.logo}>NEXTFLU</h1>
    </Link>
    <p className={styles.bajada}>¿Te agarraste una gripe? Aprovechá el reposo y mirate una serie</p>
    
</header>
</div>
  )
}

export default Navegacion

