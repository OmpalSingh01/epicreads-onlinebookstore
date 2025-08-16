import React from 'react'
import NavBar from '../components/NavBar'
import Books from '../components/Books'
import Footer from '../components/Footer'
import list from '../../public/list.json'

function Bookss() {
  
  return (
    <>
    <NavBar/>
    <div className='min-h-screen'>
    <Books/>
    </div>
    <Footer/>
    </>
  )
}

export default Bookss
