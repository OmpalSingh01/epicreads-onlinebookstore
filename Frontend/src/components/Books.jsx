import React, { useEffect, useState } from 'react'
import list from '../../public/list.json'

import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Books() {
    const [book, setbook] = useState([])
    useEffect(() =>{
        const getBook = async() => {
            try {
        //   const res =    await axios.get("http://localhost:4001/book");
        const res = await axios.get("https://epicreads-b.onrender.com/book");

          console.log(res.data);
          setbook(res.data);
        } catch (error) {
            console.error(error);
    
    }
}
getBook();
},[])
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-centre justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, laudantium. Iste vero quasi sequi officia fuga repellendus dolore libero nisi, maxime et mollitia debitis. Minus voluptate corporis itaque ratione expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, aut sit. Est alias obcaecati, dolor ipsam id aspernatur. Minus quae laborum cupiditate voluptatem sunt. Id quasi iste aperiam doloremque eligendi.</p>

            <Link to="/"> <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration 300'>
                Back
            </button> </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  );
}

export default Books
