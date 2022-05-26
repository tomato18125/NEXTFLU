

export const peliculas10 = async () => {

    try {
        
        const llamando = await fetch("https://api.themoviedb.org/3/tv/latest?api_key=9671c0a33ead2b3fbf0d54612ac63d9e&language=es-ES&page=1")
        .then((respuesta) => respuesta.json())
        console.log(llamando);
    
    
    } catch (error) {
        
    }
    
    
    
    };