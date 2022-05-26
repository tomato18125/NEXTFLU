import React from 'react'
import styles from './LogoSerie.module.css'


const TextoSerie = ({nombre}) => {
  return (
    <div className={styles.textoSerie}>{nombre}</div>
  );
};

export default TextoSerie