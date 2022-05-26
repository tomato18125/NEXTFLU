import { useEffect, useState } from "react";
import { TheMovieDatabase } from "../modulos/Llamado"
 



export function TraerSerie(quever) {

   const [serie, setearSerie] = useState([]);

   useEffect(() => {

      fetch(`${TheMovieDatabase.base}${quever.nombre}${TheMovieDatabase.cierreKey}`)
      .then((results) => results.json())
      .then((data) => {
        setearSerie(data.results)
       });

      },
      []);

   



return (serie
//    <>
//  <ul className={styles.peliculaGrilla}>
//     {
//         peliculas10.map((peli) => (
//         <Tarjetas key={peli.id} peli={peli}/>
//         ))   }
// </ul>
// </>

);
}

export default TraerSerie;