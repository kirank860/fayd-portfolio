import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Download, Menu, X, ChevronDown } from 'lucide-react'

// Site Data
const SITE = {
  name: 'Mohammed Fayd',
  email: 'mohammed.fayd@example.com',
  github: 'https://github.com/mohammedfayd',
  linkedin: 'https://linkedin.com/in/mohammedfayd',
  resumePath: '/resume.pdf'
}

const PROJECTS = [
  {
    title: 'Sales Dashboard',
    tech: 'Power BI, SQL',
    desc: 'Interactive dashboard analyzing quarterly sales trends with KPIs for revenue, profit margins, and customer segmentation.',
    link: 'https://github.com/example/sales-dashboard'
  },
  {
    title: 'Customer Churn Analysis',
    tech: 'Python, Pandas, Matplotlib',
    desc: 'Predictive analysis identifying at-risk customers using machine learning models with 85% accuracy.',
    link: 'https://github.com/example/churn-analysis'
  },
  {
    title: 'Excel Automation Tool',
    tech: 'Advanced Excel, VBA',
    desc: 'Automated reporting system reducing manual data processing time by 70% for monthly financial reports.',
    link: 'https://github.com/example/excel-automation'
  },
  {
    title: 'HR Analytics Dashboard',
    tech: 'Power BI, DAX',
    desc: 'Comprehensive HR metrics dashboard tracking employee performance, retention rates, and hiring trends.',
    link: 'https://github.com/example/hr-dashboard'
  }
]

const SKILLS = [
  'Power BI & DAX',
  'Advanced Excel & VBA',
  'Python (Pandas, NumPy, Matplotlib)',
  'SQL & Database Management',
  'Data Visualization',
  'Statistical Analysis',
  'Data Cleaning & ETL',
  'Dashboard Design'
]

// Navbar Component
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className='container mx-auto flex items-center justify-between px-6 py-4'>
        <a href='#home' className='font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          {SITE.name}
        </a>
        
        <nav className='hidden md:flex items-center space-x-8'>
          <a href='#about' className='hover:text-blue-600 transition-colors'>About</a>
          <a href='#skills' className='hover:text-blue-600 transition-colors'>Skills</a>
          <a href='#projects' className='hover:text-blue-600 transition-colors'>Projects</a>
          <a href='#contact' className='hover:text-blue-600 transition-colors'>Contact</a>
          <a href={SITE.resumePath} className='px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all'>
            Resume
          </a>
        </nav>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden p-2 transition-transform duration-300 hover:scale-110'
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div 
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='flex flex-col p-6 space-y-4'>
          <a 
            href='#about' 
            onClick={() => setIsMobileMenuOpen(false)} 
            className='hover:text-blue-600 transition-all duration-300 hover:translate-x-2'
          >
            About
          </a>
          <a 
            href='#skills' 
            onClick={() => setIsMobileMenuOpen(false)} 
            className='hover:text-blue-600 transition-all duration-300 hover:translate-x-2'
          >
            Skills
          </a>
          <a 
            href='#projects' 
            onClick={() => setIsMobileMenuOpen(false)} 
            className='hover:text-blue-600 transition-all duration-300 hover:translate-x-2'
          >
            Projects
          </a>
          <a 
            href='#contact' 
            onClick={() => setIsMobileMenuOpen(false)} 
            className='hover:text-blue-600 transition-all duration-300 hover:translate-x-2'
          >
            Contact
          </a>
          <a 
            href={SITE.resumePath} 
            className='px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-105'
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}