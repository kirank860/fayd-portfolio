import React from 'react'
import { SKILLS } from '../../public/siteData'


export default function Skills(){
  return (
    <section id='skills' className='py-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Skills & Expertise
        </h2>
        <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12'></div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto'>
          {SKILLS.map((skill, i) => (
            <div 
              key={i}
              className='group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100'
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-150 transition-transform'></div>
                <span className='font-medium text-gray-800'>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}