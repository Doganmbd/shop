import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navbar/Navbar';
import Home from './navbar/Home';
import About from './navbar/About';

const Router = () => {
  return (
    <div>
         <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />

          </Routes>        
        </BrowserRouter>
    </div>
  )
}

export default Router