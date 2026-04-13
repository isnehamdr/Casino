import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Choose from './components/Chose'
import Packages from './components/Packages'
import FloatingButtons from './components/FloatingButtons'
import Games from './components/Games'
import TestimonialCarousel from './components/TestimonialCarousel'
import Footer from './components/Footer'
import FAQSection from './components/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <FloatingButtons/>
      <Hero/>
      <About/>
      <Choose/>
      <Packages/>
      <Games/>
      <TestimonialCarousel/>
       <FAQSection/>
      <Footer/>
    </>
  )
}

export default App
