import React from 'react'

export default function About(){
  return (
    <section id='about' className='py-20 '>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            About Me
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8'></div>
          <p className='text-lg text-gray-700 leading-relaxed'>
            Aspiring Data Analyst with hands-on experience in <span className='font-semibold text-blue-600'>Power BI</span>, 
            <span className='font-semibold text-purple-600'> Advanced Excel</span>, 
            <span className='font-semibold text-pink-600'> Python</span>, and 
            <span className='font-semibold text-blue-600'> SQL</span>. Skilled in data cleaning, visualization, 
            and KPI dashboard creation through portfolio projects. Passionate about transforming raw data into 
            actionable insights that drive business decisions.
          </p>
        </div>
      </div>
    </section>
  )
}