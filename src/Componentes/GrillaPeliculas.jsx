import { Tarjetas } from "./Tarjetas";
import styles from "./Peliculas.module.css"
import { useEffect, useState } from "react";
import { TheMovieDatabase } from "../modulos/Llamado"
 



export function GrillaPeliculas(quever) {

   const [peliculas10, setearPeliculas10] = useState([]);

   useEffect(() => {

      fetch(`${TheMovieDatabase.base}${quever.nombre}${TheMovieDatabase.cierreKey}`)
      .then((res) => res.json())
      .then((data) => {
         setearPeliculas10(data.results);
         // console.log(peliculas10[1]);
       });

      },
      []);

   



return (
   <>
 <ul className={styles.peliculaGrilla}>
    {
        peliculas10.map((peli) => (
        <Tarjetas key={peli.id} peli={peli}/>
        ))   }
</ul>
</>

);
}