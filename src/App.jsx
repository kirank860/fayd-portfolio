import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 container mx-auto px-6 py-12'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className='bg-white border-t py-6'>
        <div className='container mx-auto text-center text-sm'>© {new Date().getFullYear()} Mohammed Fayd • Built with React + Tailwind</div>
      </footer>
    </div>
  )
}