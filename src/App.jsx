import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Trips from './pages/Trips/Trips.jsx'
import Header from './components/Header/Header'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Destinations from './pages/Destinations/Destinations'
import Contact from './pages/Contact/Contact'
// import Visuals from './pages/Visuals/Visuals'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Destinations" element={<Destinations/>} />
      <Route path="/Contact" element={<Contact/>} />
      {/* <Route path="/Visuals" element={<Visuals/>} /> */}
      <Route path="/Trips" element={<Trips/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>

    
    </>
  )
}

export default App
