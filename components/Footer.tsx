"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// Import your logo
import Logoimg from "../assets/programming (2).png";

// TypeScript interfaces
interface SocialIconProps {
  icon: React.ReactNode;
  href?: string;
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image 
                  src={Logoimg} 
                  alt="Agency Logo" 
                  layout="fill" 
                  objectFit="contain"
                />
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300">
                Your Agency
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              We create cutting-edge digital solutions for businesses looking to make an impact in the digital world.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon icon={<FaFacebookF />} href="https://facebook.com" />
              <SocialIcon icon={<FaTwitter />} href="https://twitter.com" />
              <SocialIcon icon={<FaInstagram />} href="https://instagram.com" />
              <SocialIcon icon={<FaLinkedinIn />} href="https://linkedin.com" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 after:bg-purple-600">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/faq">Q&A</FooterLink>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 after:bg-purple-600">
              Contact Us
            </h3>
            <div className="space-y-3">
              <ContactItem 
                icon={<FaMapMarkerAlt />} 
                text="123 Agency Street, Tech City" 
              />
              <ContactItem 
                icon={<FaEnvelope />} 
                text="info@youragency.com" 
                href="mailto:info@youragency.com" 
              />
              <ContactItem 
                icon={<FaPhoneAlt />} 
                text="+1 (234) 567-8900" 
                href="tel:+12345678900" 
              />
              <ContactItem 
                icon={<FaWhatsapp />} 
                text="WhatsApp Us" 
                href="https://wa.me/12345678900" 
              />
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-12 after:bg-purple-600">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer / Copyright */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Your Agency. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" legacyBehavior>
              <a className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms" legacyBehavior>
              <a className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Media Icon Component
const SocialIcon: React.FC<SocialIconProps> = ({ icon, href = "#" }) => {
  return (
    <a 
      href={href} 
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

// Footer Link Component
const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href} legacyBehavior>
        <a className="text-gray-400 hover:text-white relative overflow-hidden group flex items-center">
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            {children}
          </span>
        </a>
      </Link>
    </li>
  );
};

// Contact Item Component
const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-purple-500">{icon}</div>
      {href ? (
        <a 
          href={href} 
          className="text-gray-400 hover:text-white transition-colors duration-300"
          target={href.startsWith('http') ? "_blank" : undefined}
          rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        >
          {text}
        </a>
      ) : (
        <span className="text-gray-400">{text}</span>
      )}
    </div>
  );
};

export default Footer;