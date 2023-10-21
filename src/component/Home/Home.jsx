import React from 'react'
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'
import Survices from '../Survices/Survices'
import Stayproductive from '../Stayproductive/Stayproductive'
import Testimonial from '../Testimonial/Testimonial'
import GetStarted from '../GetStarted/GetStarted'
import Footer from '../Footer/Footer'

const Home = () => {
  return <>
  
  <Navbar/>
    <Landing/>
    <Survices/>
    <Stayproductive/>
    <Testimonial/>
    <GetStarted/>
    <Footer/>
  </>
}

export default Home
