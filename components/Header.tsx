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
      e.stopPropagation();
    }

    setMobileMenuOpen(false);
    setPackDropdownOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <div 
      className={`fixed top-0 w-full z-50 transition-all duration-300  ${
        scrolled 
          ? 'py-2 md:bg-black/70 md:backdrop-blur-md bg-black shadow-lg shadow-purple-500/10' 
          : 'py-4 md:bg-black/10 md:backdrop-blur-sm bg-black'
      }`}
    >
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
          className='md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-50'
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-1 lg:gap-2'>
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
      
      {/* Mobile Menu - Redesigned */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 flex flex-col overflow-y-auto">
          <div className="pt-6 px-6 flex items-center justify-between border-b border-white/10 pb-6">
            {/* Logo in Mobile Menu */}
            <div className='flex items-center'>
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-sm opacity-70"></div>
                <div className="relative bg-black rounded-lg p-0.5 w-full h-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={Logoimg}
                    alt="Company Logo"
                    width={36}
                    height={36}
                    className='rounded-md'
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
            
            {/* Close Button */}
            {/* <button 
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(false);
              }}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button> */}
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            <div className="px-6 py-6 space-y-2">
              {/* Navigation Links */}
              {['home', 'about', 'services', 'portfolio'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => scrollToSection(item, e)}
                  className='text-white/90 hover:text-white flex items-center py-3 text-lg font-medium border-b border-white/5 transition-all duration-200'
                >
                  <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
              
              {/* Mobile Dropdown */}
              <div className="py-3 text-lg">
                <div 
                  className="flex items-center justify-between cursor-pointer border-b border-white/5 pb-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPackDropdownOpen(!packDropdownOpen);
                  }}
                >
                  <span className="text-white/90 font-medium">Nos Packs</span>
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
                  <div className="py-3 space-y-3 border-b border-white/5 pl-2">
                    {packs.map((pack) => (
                      <Link
                        key={pack.id}
                        href={pack.path}
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileMenuOpen(false);
                          setPackDropdownOpen(false);
                        }}
                        className="flex items-center py-2 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <span className="text-base mr-3">{pack.icon}</span>
                        <span className="text-base">{pack.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Mobile Contact Button at Bottom */}
            <div className="px-6 py-8 border-t border-white/10 mt-auto">
              <Link
                href="/pages/contactPage"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(false);
                }}
                className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg text-center font-medium flex items-center justify-center'
              >
                <span>Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;