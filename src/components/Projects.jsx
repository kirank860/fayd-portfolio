import React from 'react'
import { PROJECTS } from '../../public/siteData'


export default function Projects(){
  return (
    <section id='projects' className='py-12'>
      <h2 className='text-2xl font-semibold mb-6'>Projects</h2>
      <div className='grid md:grid-cols-2 gap-6'>
        {PROJECTS.map((p,idx)=> (
          <div key={idx} className='bg-white p-5 rounded-lg shadow hover:shadow-md transition'>
            <h3 className='font-bold'>{p.title}</h3>
            <p className='text-sm text-gray-600'>{p.tech}</p>
            <p className='mt-2'>{p.desc}</p>
            {p.link && <a href={p.link} target='_blank' rel='noreferrer' className='mt-3 inline-block text-sm underline'>View code</a>}
          </div>
        ))}
      </div>
    </section>
  )
}