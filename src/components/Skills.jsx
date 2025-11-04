import React from 'react'
import { SKILLS } from '../../public/siteData'


export default function Skills(){
  return (
    <section id='skills' className='py-12'>
      <h2 className='text-2xl font-semibold mb-6'>Skills</h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {SKILLS.map((s,i)=> (
          <div key={i} className='bg-white p-4 rounded shadow-sm'>{s}</div>
        ))}
      </div>
    </section>
  )
}