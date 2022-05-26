import React from 'react'
import styles from './Cabezal.module.css'

function ImagenDeFondo(props) {





  return (
    <div className={styles.fondo}><img src={props} alt=""/></div>
  )
}

export default ImagenDeFondo