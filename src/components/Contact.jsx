import React from 'react'
import { SITE } from '../../public/siteData'
import { Github, Linkedin, Mail } from 'lucide-react'


export default function Contact(){
  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Get In Touch
        </h2>
        <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12'></div>
        
        <div className='max-w-2xl mx-auto'>
          <div className='bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl mb-8 text-center'>
            <p className='text-lg mb-6 text-gray-700'>
              I'm always open to discussing new opportunities and projects
            </p>
            <a 
              href={`mailto:${SITE.email}`} 
              className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-xl transition-all hover:scale-105'
            >
              <Mail size={20} />
              {SITE.email}
            </a>
          </div>

          <div className='text-center mb-8'>
            <p className='text-gray-600 mb-4'>Or reach out via</p>
            <div className='flex justify-center gap-6'>
              <a 
                href={SITE.github} 
                target='_blank' 
                rel='noreferrer'
                className='p-4 bg-gray-900 text-white rounded-full hover:scale-110 transition-transform'
              >
                <Github size={24} />
              </a>
              <a 
                href={SITE.linkedin} 
                target='_blank' 
                rel='noreferrer'
                className='p-4 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform'
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}