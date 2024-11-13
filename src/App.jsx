import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

const App = () => {
  return (
    <>
     <Navbar/> 
     <Header/>
     <About/>
     <Projects/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
