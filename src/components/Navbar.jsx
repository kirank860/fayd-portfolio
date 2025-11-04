import React from 'react'
import { SITE } from '../../public/siteData'


export default function Navbar(){
  return (
    <header className='sticky top-0 bg-white/80 backdrop-blur z-40 border-b'>
      <div className='container mx-auto flex items-center justify-between px-6 py-4'>
        <a href='#home' className='font-bold text-lg'>{SITE.name}</a>
        <nav className='space-x-4 hidden md:block'>
          <a href='#about' className='hover:underline'>About</a>
          <a href='#projects' className='hover:underline'>Projects</a>
          <a href='#skills' className='hover:underline'>Skills</a>
          <a href='#contact' className='hover:underline'>Contact</a>
          <a href={SITE.resumePath} className='ml-4 inline-block px-3 py-1 border rounded'>Resume</a>
        </nav>
      </div>
    </header>
  )
}