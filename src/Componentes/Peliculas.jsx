import { GrillaPeliculas } from "./GrillaPeliculas";
import SeccionesSeries from "./SeccionesSeries";

export function Peliculas() {

return (


<main>
<SeccionesSeries nombre={"Las mejores series de la semana"}/>
<GrillaPeliculas nombre={"tv/popular"}/>
<SeccionesSeries nombre={"Las mejores Películas de la semana"}/>
<GrillaPeliculas nombre={"movie/popular"}/>
</main>

);
}