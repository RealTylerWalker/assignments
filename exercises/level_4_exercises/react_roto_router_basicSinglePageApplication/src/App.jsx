import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'


function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
