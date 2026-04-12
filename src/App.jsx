import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Choose from './components/Chose'
import Packages from './components/Packages'
import FloatingButtons from './components/FloatingButtons'
import Games from './components/Games'

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
    </>
  )
}

export default App
