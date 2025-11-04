import React from 'react'
import { SITE } from '../../public/siteData'

const Footer = () => {
  return (
    <footer className='bg-white border-t border-gray-200 py-8'>
    <div className='container mx-auto px-6'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
        <p className='text-gray-600 text-sm'>
          © {new Date().getFullYear()} Mohammed Fayd. Crafted with passion for data.
        </p>
        
        <div className='flex items-center gap-6'>
          <a href={SITE.github} target='_blank' rel='noreferrer' 
             className='text-gray-600 hover:text-blue-600 transition-colors'>
            GitHub
          </a>
          <a href={SITE.linkedin} target='_blank' rel='noreferrer' 
             className='text-gray-600 hover:text-blue-600 transition-colors'>
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`} 
             className='text-gray-600 hover:text-blue-600 transition-colors'>
            Email
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
