import React from 'react'
import { SITE } from '../../public/siteData'


export default function Hero(){
  return (
    <section id='home' className='py-12'>
      <div className='grid md:grid-cols-2 gap-8 items-center'>
        <div>
          <h1 className='text-4xl md:text-5xl font-extrabold'>{SITE.name}</h1>
          <p className='mt-4 text-lg'>Aspiring Data Analyst skilled in Power BI, SQL, Python, and data storytelling.</p>
          <div className='mt-6 flex gap-3'>
            <a href={SITE.github} target='_blank' rel='noreferrer' className='px-4 py-2 border rounded'>GitHub</a>
            <a href={SITE.linkedin} target='_blank' rel='noreferrer' className='px-4 py-2 border rounded'>LinkedIn</a>
            <a href={SITE.resumePath} className='px-4 py-2 bg-black text-white rounded'>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}