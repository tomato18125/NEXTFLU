import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ItemsCalecita from "../cosasCalecita/ItemsCalecita";
import { TheMovieDatabase } from "../modulos/Llamado";

function Calecita({tipo}) {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [calecita, setcalecita] = useState([]);

  useEffect (() => {
  
    const path = `${TheMovieDatabase.base}${tipo}${TheMovieDatabase.cierreKey}`;
    console.log(path);
      fetch(path)
      .then((res) => res.json())
        .then((data) => {
          setcalecita(data.results);
      console.log(calecita[0]);
    
  
  
  
    });
  }, []);




  return (
<>  
     
    <div>
        
        <Slider {...settings}>
        {calecita.map((card) => 
        <ItemsCalecita key={card.id} titulo={card.title || card.name} imgPath={card.backdrop_path}/>

        )
        }
        
       


        </Slider>
      </div>







</>  )
}

export default Calecita