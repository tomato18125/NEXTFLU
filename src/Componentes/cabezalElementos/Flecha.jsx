import React from 'react'
import styles from './LogoSerie.module.css'
import FlechaDerecha from './FlechaDerecha'
import FlechaIzquierda from './FlechaIzquierda'

function Flecha() {
  return (
      <div className={ styles.contenedorFlechas}>
   
    <FlechaIzquierda />
    <FlechaDerecha />
    </div>
  )
}

export default Flecha