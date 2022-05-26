import React, { useEffect, useState } from 'react'
import styles from "./Cabezal.module.css"
import LogoSerie from './cabezalElementos/LogoSerie'
import TextoSerie from './cabezalElementos/TextoSerie'
import Reproducir from './cabezalElementos/Reproducir'
import MasInfo from './cabezalElementos/MasInfo'
import  { TheMovieDatabase } from '../modulos/Llamado'
import ImagenDeFondo from './ImagenDeFondo'
import stylesLogo from "./cabezalElementos/LogoSerie.module.css"


function Cabezal() {
  const fondo = `https://image.tmdb.org/t/p/w500`;
  const [ventanal, setVentanal] = useState([
    
    {"name": "tomas2","overview": "algo2", "backdrop_path": "/dfdf"}, 
    {"name": "tomas2","overview": "algo2", "backdrop_path": "/dfdf"}, 
    {"name": "tomas2","overview": "algo2", "backdrop_path": "/dfdf"}, 
    {"name": "tomas2","overview": "algo2", "backdrop_path": "/dfdf"}, 
    {"name": "tomas2","overview": "algo2", "backdrop_path": "/dfdf"}, 
    {"name": "tomas2","overview": "algo2", "backdrop_path": "/dfdf"}, 
    
  ]);
   


useEffect (() => {
  
  const path = `${TheMovieDatabase.base}tv/popular${TheMovieDatabase.cierreKey}`;
  console.log(path);
    fetch(path)
    .then((res) => res.json())
      .then((data) => {
        setVentanal(data.results);
    console.log(ventanal[0]);
  



  });
}, []);

const [ind, setInd] = useState(3);

const adelantar = () => {
if (ind === 5) {
  setInd(0);
} else {
  setInd(ind + 1);
}



 
console.log(ind);
}

const retrasar = () => {
 
  if (ind === 0) {
    setInd(5);
  } else {
    setInd(ind - 1);
  }

  console.log(ind);

  
  }





  return (
    <div >
            
      <div className={styles.granContenedor}
      style={
        {backgroundImage: `url(${fondo}${ventanal[ind].backdrop_path})`,}
      }>
      
        <div className={styles.soloContenedor}>
      
          <LogoSerie nombre={ventanal[ind].name}/>
          <div className={styles.cajaTexto}>
         <TextoSerie nombre={ventanal[ind].overview} />
         </div>
                  <div className={styles.botonesFlex}>  
                    <Reproducir />
                    <MasInfo />
                  </div>

                  <div className={ stylesLogo.contenedorFlechas}>
                    <div className={stylesLogo.flechasLink} onClick={adelantar}>←</div>
                    <div className={stylesLogo.flechasLink} onClick={retrasar}>→</div>
                  </div>





        
        </div>  
        {/* <ImagenDeFondo nombre={ventanal[0].backdrop_path}/> */}
      </div>
   
    </div>

  )
}

export default Cabezal