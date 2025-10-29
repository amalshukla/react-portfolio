import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'
import Ninja from  './components/Ninja'
import Flipcard from './components/Flipcard'
import Connect from './components/Connect'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-500 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen  bg-neutral-950 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent)] "></div>

      </div>
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        
        <Technologies />
        <Experience />
        <Contact />
        
      </div>
    </div>
  )
}

export default App