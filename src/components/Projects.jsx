import React from 'react'
import { PROJECTS } from '../../public/siteData'


export default function Projects(){
  return (
    <section id='projects' className='py-20 bg-gradient-to-br from-purple-50 to-pink-50'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Featured Projects
        </h2>
        <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12'></div>
        
        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx}
              className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100'
            >
              <div className='flex items-start justify-between mb-4'>
                <h3 className='text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>
                  {project.title}
                </h3>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform'>
                  <div className='w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded'></div>
                </div>
              </div>
              
              <p className='text-sm text-blue-600 font-medium mb-3'>{project.tech}</p>
              <p className='text-gray-600 mb-6 leading-relaxed'>{project.desc}</p>
              
              {project.link && (
                <a 
                  href={project.link} 
                  target='_blank' 
                  rel='noreferrer' 
                  className='inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all'
                >
                  View Code
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}