import React from 'react'
import Cabezal from '../Componentes/Cabezal'
import LogueoUsuario from '../Componentes/LogueoUsuario'
import Navegacion from '../Componentes/Navegacion'
import { Peliculas } from '../Componentes/Peliculas'
import Salir from '../Componentes/Salir'
import Calecita from '../Componentes/Calecita'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Separador from '../Componentes/Separador'

function Principal() {


  


  return (
    <>
     <LogueoUsuario />
    <Navegacion /> 
    <Separador />
    <Cabezal/>
    <Separador />
    <Calecita tipo="tv/popular"/>
    <Separador />
    <Calecita tipo="movie/popular"/>
    <Separador />
    <Peliculas />
    <Salir></Salir>
    </>
  )
}

export default Principal