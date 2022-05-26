import styles from "./Tarjetas.module.css"
import { Link } from 'react-router-dom'


export function Tarjetas({peli}) {

     const imagenPath = "https://image.tmdb.org/t/p/w300" + peli.poster_path;
    return (
        
        <li className={styles.tarjetas1}>
            <Link to="/Detalle">
            <img className={styles.peliSize} src={imagenPath} alt={peli.title} />
            <div>{peli.title}</div>
            </Link>
        </li>
)

}

// /1qpUk27LVI9UoTS7S0EixUBj5aR.jpg