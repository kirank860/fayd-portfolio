
import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Download, Menu, X, ChevronDown, ExternalLink, Sparkles, Code2, Database, BarChart3, FileSpreadsheet } from 'lucide-react'

import { SITE } from '../../public/siteData'

const PROJECTS = [
  {
    title: 'Sales Dashboard',
    tech: 'Power BI, SQL',
    desc: 'Interactive dashboard analyzing quarterly sales trends with KPIs for revenue, profit margins, and customer segmentation.',
    link: 'https://github.com/example/sales-dashboard',
    icon: BarChart3
  },
  {
    title: 'Customer Churn Analysis',
    tech: 'Python, Pandas, Matplotlib',
    desc: 'Predictive analysis identifying at-risk customers using machine learning models with 85% accuracy.',
    link: 'https://github.com/example/churn-analysis',
    icon: Database
  },
  {
    title: 'Excel Automation Tool',
    tech: 'Advanced Excel, VBA',
    desc: 'Automated reporting system reducing manual data processing time by 70% for monthly financial reports.',
    link: 'https://github.com/example/excel-automation',
    icon: FileSpreadsheet
  },
  {
    title: 'HR Analytics Dashboard',
    tech: 'Power BI, DAX',
    desc: 'Comprehensive HR metrics dashboard tracking employee performance, retention rates, and hiring trends.',
    link: 'https://github.com/example/hr-dashboard',
    icon: Code2
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-800' : 'bg-transparent'
      }`}>
      <div className='container mx-auto flex items-center justify-between px-6 py-4'>
        <a href='#home' className='font-bold text-xl flex items-center gap-2 group'>
          <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform'>
            <Sparkles className='w-5 h-5 text-white' />
          </div>
          <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
            {SITE.name}
          </span>
        </a>

        <nav className='hidden md:flex items-center space-x-1'>
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='px-4 py-2 text-zinc-300 hover:text-white transition-colors relative group'
            >
              {item}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300'></span>
            </a>
          ))}
          <a
            href={SITE.resumePath}
            download="Mohammed_Fayd_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Download size={20} />
            Download CV
          </a>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden p-2 text-zinc-300 hover:text-white transition-all'
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800 overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className='flex flex-col p-6 space-y-4'>
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className='text-zinc-300 hover:text-white transition-all hover:translate-x-2'
            >
              {item}
            </a>
          ))}
          <a
            href={SITE.resumePath}
            download="Mohammed_Fayd_Resume.pdf"
            className="flex items-center justify-center  gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Download size={20} />
            Download CV
          </a>
        </nav>
      </div>
    </header>
  )
}
