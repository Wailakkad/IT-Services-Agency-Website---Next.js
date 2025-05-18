"use client";

import React, { useState, useEffect } from 'react';
import Logoimg from "../assets/W-logo.png";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [packDropdownOpen, setPackDropdownOpen] = useState(false);
  
  // Packs data
  const packs = [
    { id: "websites", name: "Websites", icon: "🌐", path: "/pages/website" },
    { id: "landing", name: "Landing Pages", icon: "🚀", path: "/pages/landingPges" },
    { id: "uiux", name: "UI/UX Design", icon: "🎨", path: "/pages/uiuxPage" },
    { id: "branding", name: "Branding", icon: "✨", path: "/pages/branding" },
    { id: "maintenance", name: "Maintenance", icon: "🔧", path: "/pages/Maintenance" }
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement> | null) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation(); // Stop event propagation
    }

    setMobileMenuOpen(false);
    setPackDropdownOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      mobileMenuOpen 
        ? 'md:bg-black/80 md:backdrop-blur-md bg-black' // Solid black for mobile/tablet, blur for desktop
        : scrolled 
          ? 'py-2 bg-black/80 backdrop-blur-md shadow-lg shadow-purple-500/10' 
          : 'py-4 bg-black/10 backdrop-blur-sm'
    }`}>
      <div className='container mx-auto px-4 lg:px-8 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center group cursor-pointer'>
          <div className={`relative transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-black rounded-lg p-0.5 w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src={Logoimg}
                alt="Company Logo"
                width={scrolled ? 36 : 40}
                height={scrolled ? 36 : 40}
                className='rounded-md transition-all duration-300'
              />
            </div>
          </div>
          <div className="ml-3">
            <span className='font-bold text-white text-lg bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200'>
              Webloom
            </span>
            <span className="block text-xs text-purple-300/80 font-medium -mt-1 tracking-wider">Digital Solutions</span>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }} 
          className='md:hidden flex flex-col gap-1.5 p-2 focus:outline-none'
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className='hidden  md:flex items-center gap-1 lg:gap-2'>
          {['home', 'about', 'services', 'portfolio'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => scrollToSection(item, e)}
              className='text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group'
            >
              <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
          
          {/* Dropdown for Packs */}
          <div className="relative">
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setPackDropdownOpen(!packDropdownOpen);
              }}
              className='text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 relative group flex items-center'
            >
              <span>Nos Packs</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${packDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            
            {/* Dropdown Menu */}
            {packDropdownOpen && (
              <div className="absolute mt-2 w-56 right-0 origin-top-right rounded-lg overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-xl bg-gray-900/90 border border-purple-500/20 transform transition-all duration-200">
                <div className="py-1">
                  {packs.map((pack) => (
                    <Link
                      href={pack.path}
                      key={pack.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPackDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="group flex items-center px-4 py-3 text-sm text-gray-200 hover:bg-purple-600/20 transition-all duration-300"
                    >
                      <span className="text-lg mr-3 opacity-70 group-hover:opacity-100">{pack.icon}</span>
                      <span className="font-medium">{pack.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Contact Button */}
          <Link 
            href="/pages/contactPage"
            onClick={(e) => e.stopPropagation()}
            className="ml-2 relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg group hover:from-purple-700 hover:to-indigo-700"
          >
            <span className="relative flex items-center">
              Contact
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-0 ml-0 group-hover:w-4 group-hover:ml-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black z-40 transition-all duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button for Mobile Menu */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(false);
          }}
          className="absolute top-6 right-6 text-white p-2 focus:outline-none"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col h-full pt-20 px-6">
          {['home', 'about', 'services', 'portfolio'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => scrollToSection(item, e)}
              className='text-white text-lg font-medium py-4 border-b border-white/10 flex justify-between items-center'
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
          
          {/* Mobile Dropdown */}
          <div className="py-4 border-b border-white/10">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setPackDropdownOpen(!packDropdownOpen);
              }}
            >
              <span className="text-white text-lg font-medium">Nos Packs</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 text-purple-400 transition-transform duration-300 ${packDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Mobile Dropdown Menu */}
            {packDropdownOpen && (
              <div className="mt-3 pl-4 space-y-2">
                {packs.map((pack) => (
                  <Link
                    key={pack.id}
                    href={pack.path}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPackDropdownOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center py-2 text-gray-300 hover:text-white"
                  >
                    <span className="text-lg mr-3">{pack.icon}</span>
                    <span>{pack.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Mobile Contact Button */}
          <Link
            href="/pages/contactPage"
            onClick={(e) => e.stopPropagation()}
            className='mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg text-center font-medium'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;