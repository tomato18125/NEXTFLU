import React, { useEffect, useState } from 'react'
// import { TheMovieDatabase } from '../modulos/Llamado';
import styles from "./Cabezal.module.css"



function CambiardorCabezal({poster}) {

    const [imagenFondo, setearimagenFondo] = useState([]);

    useEffect(() => {

    const pedido = async() => await fetch('')
    .then((res) => res.json())
    .then((data) => {
        console.log(pedido);
        setearimagenFondo(data.results);
      });
  
      }, []);
  
      //  const seriesMostrar = Cabezal.slice(0,4);



      const imagenPath = "https://image.tmdb.org/t/p/w300/gG9fTyDL03fiKnOpf2tr01sncnt.jpg";



  return (
    <div className={styles.imagenCabezal}><img src={imagenFondo} alt=""></img></div>
  )
}

export default CambiardorCabezal