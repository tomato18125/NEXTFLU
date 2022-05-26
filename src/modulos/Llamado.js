
//export const indiceAleatorio = () => {

//  const tiempo = Date.now();
// numeroAleatorio = tiempo



// }


export const TheMovieDatabase = {
    base: 'https://api.themoviedb.org/3/',
    pelis: {
      ultimas: 'movie/latest',
      populares: 'movie/popular'
  
    },
    series: {
      ultimas: 'tv/latest',
      populares: 'tv/popular'
    },
    cierreKey: '?api_key=9671c0a33ead2b3fbf0d54612ac63d9e&language=es-ES&page=1'
  }
  
 
  
  
  


export const peliculas10 = async () => {

try {
    
    const llamando = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9671c0a33ead2b3fbf0d54612ac63d9e&language=es-ES&page=1")
    .then((respuesta) => respuesta.json())
    console.log(llamando);


} catch (error) {
    return error
}



};