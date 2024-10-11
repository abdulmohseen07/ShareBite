import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Root from './Components/Root';
import Login from './Components/Login'
import Navbar from './Components/Navbar'

import HeroSection from './Components/HeroSection'
import Register from './Components/Register'
import Footer from './Components/Footer'
import Button from './Useables/Button'  
import styled from 'styled-components'
import FoodCart from './Components/FoodCart';
import Delievery from './Components/Delievery';


const App = () => {
  return (
  <>
 
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/foodcart" element={<FoodCart />} />
          <Route path="/delievery" element={<Delievery />} />
          


          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>


  </>  
  
  )
}

export default App