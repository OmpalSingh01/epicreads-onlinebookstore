import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'

import Home from './home/Home';
import Bookss from './Books/Bookss';
import Books from './components/Books';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import About from './components/About'
import {Navigate, Route, Routes} from 'react-router-dom'
import { useAuth } from './context/AuthProvider';




function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white' >
    <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/books" element = {authUser?<Bookss/>:<Navigate to ='/SignUp'/>}/>
        <Route path = "/signup" element = {<SignUp/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
    </Routes>
    <Toaster/>
    </div>
    </>
  );
}

export default App
