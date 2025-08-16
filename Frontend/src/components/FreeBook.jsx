
import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import list from "../../public/list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import axios from 'axios';

function FreeBook() {
  const [book, setbook] = useState([])
    useEffect(() =>{
        const getBook = async() => {
            try {
          const res =    await axios.get("http://localhost:4001/book");


          const data = res.data.filter((data)=>data.category === "Free");
          console.log(data);
          setbook(data);

        } catch (error) {
            console.error(error);
    
    }
}
getBook();
},[])

    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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


  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 '>
    <div>        
    <h1 className='font-semibold text-xl pb-2'>Free offered Books</h1>
    <p>
    "Explore our Free Books category at Epic Reads! Dive into a selection of handpicked books available at no cost, perfect for readers on a budget or those looking to discover something new. Enjoy timeless classics, popular reads, and exclusive titles, all for free. Start your reading adventure without any barriers—just pick a book and enjoy!"</p>
    </div>
    
        <div>
    <Slider {...settings}>
        {book.map((item) =>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
       </div>
    </div>
    </>
  );
}

export default FreeBook
