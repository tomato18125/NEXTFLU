import React from 'react'
import styles from './LogoSerie.module.css'


const LogoSerie = (props) => {
  return (
    <>
    <div className={styles.logo}>{props.nombre}</div>
     </>
  );
};

export default LogoSerie