import React from 'react'
 import styles from './ItemsCalecita.module.css'

function ItemsCalecita({titulo, imgPath}) {

    const fondo = `https://image.tmdb.org/t/p/w300`;





  return (
      <>
   

    <div className={styles.titulos} style={ {backgroundImage: `url(${fondo}${imgPath})`,} }> 
        
        <p>{`${titulo}`}</p>
        </div>


    
    </>
  )
}

export default ItemsCalecita