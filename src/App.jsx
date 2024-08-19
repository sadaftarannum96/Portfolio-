import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { Footer } from './components/Footer'
import Skills from './components/Skills'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <div className='bg-fuchsia-100'>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App 