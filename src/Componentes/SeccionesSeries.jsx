import React from 'react'
import styles from './SeccionesSeries.module.css'



// const titulares = "Las 10 mejores series de la semana"

function SeccionesSeries(serie) {
  return (
    <div className={styles.tituloSerie}>{ serie.nombre }</div>
  )
}

export default SeccionesSeries