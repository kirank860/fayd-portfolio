import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react'
import { SITE } from '../../public/siteData'

export default function Hero(){
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id='home' className='min-h-screen flex items-center justify-center pt-20'>
      <div className='text-center max-w-4xl mx-auto px-6'>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className='inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium'>
            👋 Welcome to my portfolio
          </div>
          
          <h1 className='text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
            {SITE.name}
          </h1>
          
          <p className='text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed'>
            Aspiring <span className='font-semibold text-gray-100'>Data Analyst</span> skilled in{' '}
            <span className='font-semibold text-blue-600'>Power BI</span>,{' '}
            <span className='font-semibold text-purple-600'>SQL</span>,{' '}
            <span className='font-semibold text-pink-600'>Python</span>, and data storytelling
          </p>

          <div className='flex flex-wrap gap-4 justify-center mb-12'>
            <a 
              href={SITE.github} 
              target='_blank' 
              rel='noreferrer' 
              className='flex items-center gap-2 px-6 py-3 border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all hover:scale-105'
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href={SITE.linkedin} 
              target='_blank' 
              rel='noreferrer' 
              className='flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all hover:scale-105'
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
  href="/MOHAMMED_FAYD_BUSINESS_ANALYST_.pdf"
  download
  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all hover:scale-105"
>
  <Download size={20} />
  Download CV
</a>


          </div>

          <a href='#about' className='inline-block animate-bounce'>
            <ChevronDown size={32} className='text-gray-400' />
          </a>
        </div>
      </div>
    </section>
  )
}