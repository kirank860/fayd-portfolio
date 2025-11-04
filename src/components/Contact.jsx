import React from 'react'
import { SITE } from '../../public/siteData'


export default function Contact(){
  return (
    <section id='contact' className='py-12'>
      <h2 className='text-2xl font-semibold mb-4'>Contact</h2>
      <p className='mb-4'>Email: <a href={`mailto:${SITE.email}`} className='underline'>{SITE.email}</a></p>
      <form action='https://formspree.io/f/mayvlrqn' method='POST' className='max-w-xl'>
        <label className='block mb-2'>Name</label>
        <input name='name' className='w-full p-2 border rounded mb-3' />
        <label className='block mb-2'>Email</label>
        <input name='email' type='email' className='w-full p-2 border rounded mb-3' />
        <label className='block mb-2'>Message</label>
        <textarea name='message' className='w-full p-2 border rounded mb-3' rows='5'></textarea>
        <button type='submit' className='px-4 py-2 bg-black text-white rounded'>Send</button>
      </form>
      <div className='mt-6'>
        <a href={SITE.github} target='_blank' rel='noreferrer'>GitHub</a> • <a href={SITE.linkedin} target='_blank' rel='noreferrer'>LinkedIn</a>
      </div>
    </section>
  )
}