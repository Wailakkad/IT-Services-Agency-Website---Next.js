import React from 'react'
import Logoimg from "../assets/programming (2).png"
import Image from 'next/image'

const Header = () => {
  return (
    <div className='sticky top-0 z-50'>
      <div className='flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-sm bg-black/10'>
        {/* Logo Image */}
        <div className='flex items-center'>
          <Image 
            src={Logoimg} 
            alt="Company Logo" 
            width={40} 
            height={40}
            className='rounded-md'
          />
          <span className='ml-2 font-bold text-white text-lg'>IT Services</span>
        </div>
        
        {/* Mobile Menu */}
        <h1 className='md:hidden text-white hover:text-purple-300 cursor-pointer transition-colors duration-300'>menu</h1>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6 items-center text-white'>
          <a 
            href="" 
            className='hover:text-purple-300 transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full'
          >
            Home
          </a>
          <a 
            href="" 
            className='hover:text-purple-300 transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full'
          >
            About
          </a>
          <a 
            href="" 
            className='hover:text-purple-300 transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full'
          >
            Services
          </a>
          <a 
            href="" 
            className='hover:text-purple-300 transition-colors duration-300 relative after:absolute after:w-0 after:h-0.5 after:bg-purple-300 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full'
          >
            Portfolio
          </a>
          <button className='bg-black text-white px-4 py-2 rounded-lg inline-flex hover:bg-purple-900 hover:shadow-lg hover:shadow-purple-700/20 transition-all duration-300 transform hover:-translate-y-1'>
            Contact
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Header