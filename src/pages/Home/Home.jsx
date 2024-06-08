import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Abouta from '../../components/Abouta/Abouta'
import BigFive from '../../components/bigfive/BigFive'
import Destination from '../../components/Destination/Destination'
import Testimonials from '../../components/Testimonials/Testimonials'
import "./home.css"

function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Abouta/>
    <BigFive/>
    <Destination/>
    <Testimonials/>    
    </>
  )
}

export default Home