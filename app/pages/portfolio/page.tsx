"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image'; // Import StaticImageData type

// Import images using the original format
import project1 from "@/assets/websites/project1.jpg";
import project2 from "@/assets/websites/project2.jpg";
import project3 from "@/assets/websites/project3.jpg";
import project4 from "@/assets/websites/project4.jpg";
import project5 from "@/assets/websites/project5.jpg";
import project7 from "@/assets/websites/project7.jpg";
import project8 from "@/assets/websites/project8.jpg";
import project9 from "@/assets/websites/project9.jpg";
import project10 from "@/assets/websites/project10.jpg";
import project11 from "@/assets/websites/project11.jpg";
import project12 from "@/assets/websites/project12.jpg";
import project13 from "@/assets/websites/project13.jpg";
import project14 from "@/assets/websites/project14.png";
import project15 from "@/assets/websites/constraction.png";
import project16 from "@/assets/websites/fashion.jpg";
import project17 from "@/assets/websites/creap.png";
import project18 from "@/assets/websites/jewerly.jpg";
import project19 from "@/assets/websites/myPortfolio.jpg";
import P_branding1 from "@/assets/branding/branding1.png";
import P_branding2 from "@/assets/branding/branding2.png";
import P_branding3 from "@/assets/branding/branding3.png";
import P_branding4 from "@/assets/branding/branding4.png";



interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData; 
  category: string;
  link: string;
  technologies: string; // Add this line
}

const PortfolioPage = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with seamless payment integration and responsive design.",
      image: project1,
      category: "Websites",
      link: "#",
      technologies: "React, Next.js, Tailwind CSS", // Add this line
    },
    {
      id: 2,
      title: "Corporate Landing Page",
      description: "Professional landing page designed for maximum conversion and brand identity.",
      image: project2,
      category: "Landing Page",
      link: "#",
      technologies: "React, Next.js, Tailwind CSS",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Creative portfolio website showcasing artistic work with elegant animations.",
      image: project3,
      category: "Websites",
      link: "#",
      technologies: "React, Next.js, Tailwind CSS",
    },
    {
      id: 4,
      title: "Restaurant Booking System",
      description: "Interactive booking platform with real-time availability and user-friendly interface.",
      image: project4,
      category: "Websites",
      link: "#",
      technologies: "React, Next.js, Tailwind CSS",
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      description: "Comprehensive dashboard with analytics and user management features.",
      image: project5,
      category: "Websites",
      link: "#",
      technologies: "React, Next.js, Tailwind CSS",
    },
    {
      id: 6,
      title: "serum product landing page",
      description: "serum product landing page with a focus on user engagement and lead generation.",
      image: project7,
      category: "Landing Page",
      link: "#",
      technologies: "HTML, CSS, JavaScript",
    },
      {
      id: 7,
      title: "Natural Skincare Product Landing Page", 
      description: "Natural skincare product landing page with a focus on user engagement and lead generation.",
      image: project8,
      category: "Landing Page",
      link: "#",
      technologies: "HTML, CSS, JavaScript",
    },
      {
      id: 8,
      title: "it agency landing page",
      description: "it agency landing page with a focus on user engagement and lead generation.", 
      image: project9,
      category: "Landing Page",
      link: "#",
      technologies: "HTML, CSS, JavaScript",
    },
      {
      id: 9,
      title: "designer portfolio",
      description: "designer portfolio with a focus on user engagement and lead generation.",
      image: project10,
      category: "Portfolio",
      link: "#",
      technologies: "React, Next.js, Tailwind CSS"
      
    },
    {
      id: 10,
      title: "designer portfolio",
      description: "designer portfolio with a focus on user engagement and lead generation.",
      image: project11,
      category: "Portfolio",
      link: "#",
      technologies: "React, Next.js, Tailwind CSS"
    },
    {
      id: 11,
      title: "ui/ux Designer portfolio",
      description: "ui/ux Designer portfolio with a focus on user engagement and lead generation.",
      image: project12,
      category: "Portfolio",
      link: "#",
      technologies: "React, Next.js, Tailwind CSS"
    },
     {
      id: 12,
      title: "freelance web portfolio",
      description: "freelance web portfolio with a focus on user engagement and lead generation.",
      image: project13,
      category: "Portfolio",
      link: "#",
      technologies: "React, Next.js, Tailwind CSS"
    },
     {
      id: 13,
      title: "travel agency website",
      description: "travel agency website with a focus on user engagement and lead generation.",
      image: project14,
      category: "Websites",
      link: "#",
      technologies: "React, Next.js, Tailwind CSS"
    },
   {
  id: 14,
  title: "Motion Branding & Platform Design",
  description: "A sleek and modern brand identity for a community-focused platform. Designed to enhance trust, engagement, and digital presence across mobile and desktop.",
  image: P_branding1,
  category: "Branding",
  link: "#",
  technologies: "Figma, Photoshop, Illustrator"
},

    {
  id: 15,
  title: "Luxbrick Homes – Premium Real Estate Branding",
  description: "A high-end brand identity for a luxury real estate company. Designed to evoke sophistication, trust, and architectural elegance across signage, print, digital platforms, and outdoor advertising.",
  image: P_branding2,
  category: "Branding",
  link: "#",
  technologies: "Figma, Photoshop, Illustrator"
},{
  id: 16,
  title: "Lumina Living – Elegant Stationery & Brand Identity",
  description: "A refined and cohesive brand identity crafted for Lumina Living. This elegant design system features a modern logo and premium stationery set, reflecting trust, sophistication, and a strong presence across both digital and print touchpoints.",
  image: P_branding3,
  category: "Branding",
  link: "#",
  technologies: "Figma, Photoshop, Illustrator"
},

     {
  id: 17,
  title: "Mayeli – Luxury Fashion & Lifestyle Branding",
  description: "A premium brand identity for Mayeli, blending timeless elegance with modern luxury. Featuring a refined logotype with regal elements, this branding captures sophistication and style across fashion visuals and high-end lifestyle marketing.",
  image: P_branding4,
  category: "Branding",
  link: "#",
  technologies: "Figma, Photoshop, Illustrator"
},
   {
  id: 18,
  title: "Construction Company Landing Page",
  description: "A professional and modern website designed for a construction company, showcasing services, testimonials, and a quote request form. Built with React, Next.js, and Tailwind CSS for speed and responsiveness.",
  image: project15,
  category: "Websites",
  link: "#",
  technologies: "React, Next.js, Tailwind CSS"
},
{
  id: 19,
  title: "Le Petit Brunch – Modern Brunch Café Website",
  description: "A refined and elegant website for a Barcelona-based brunch café, designed to highlight its cozy ambiance, curated menu, and photo-rich storytelling. Built with modern web technologies for a seamless and responsive user experience.",
  image: project17,
  category: "Websites",
  link: "#",
  technologies: "React, Next.js, Tailwind CSS"
},
{
  id: 20,
  title: "Wild Style – Modern Fashion E-Commerce UI",
  description: "A high-end fashion e-commerce UI/UX design featuring a bold aesthetic, smooth layout transitions, and product-focused storytelling. Tailored for brands seeking a sleek, premium online shopping experience.",
  image: project16,
  category: "UI/UX Design",
  link: "#",
  technologies: "Figma, Photoshop"
},
{
  id: 21,
  title: "Jewelry E-Commerce UI – Elegant Shopping Experience",
  description: "A refined UI/UX design for a luxury jewelry brand, showcasing products with minimal elegance and rich visual storytelling. Designed for a seamless shopping journey with clear product focus and high-end aesthetic appeal.",
  image: project18,
  category: "UI/UX Design",
  link: "#",
  technologies: "Figma, Adobe XD"
},
{
  id: 22,
  title: "Modern Developer Portfolio",
  description: "A sleek and responsive personal portfolio website showcasing full-stack projects, skills, and contact details. Built to reflect a clean design and professional developer branding.",
  image: project19,
  category: "Portfolio",
  link: "#",
  technologies: "React, Next.js, Tailwind CSS"
}


  ];

  const [filter, setFilter] = useState('All');
  // For modal functionality
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Function to handle opening the modal
  const openProjectModal = (project: Project, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Back to Home Arrow */}
      <Link href="/" className="absolute left-6 top-6 z-20 group">
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-purple-500 transition-transform duration-300 group-hover:-translate-x-0.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
          </div>
          <span className="text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Back to Home</span>
        </div>
      </Link>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our collection of websites and landing pages that showcase our expertise in creating stunning digital experiences.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-violet-800 text-white'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 transform group-hover:translate-y-2 group-hover:shadow-2xl">
                {/* Project Image with Overlay - Using standard img tag */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-violet-900 opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10"></div>
                  
                  {/* Using original img tag format */}
                  <Image
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button 
                      onClick={(e) => openProjectModal(project, e)}
                      className="bg-white text-black font-semibold px-6 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105"
                    >
                      View Project
                    </button>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <span className="text-violet-400 text-sm font-medium mb-2 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        {/* Modal/Popup for project details */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Project content */}
              <div className="px-8 pb-8">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-auto" 
                  />
                </div>
                
                <span className="text-violet-400 text-sm font-medium mb-2 inline-block">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                
                {/* Additional project details could go here */}
                <div className="bg-gray-800 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3">Project Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400">Client:</p>
                      <p className="text-white">Example Client</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Date:</p>
                      <p className="text-white">March 2025</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Services:</p>
                      <p className="text-white">Web Design, Development</p>
                    </div>
                   <div>
                      <p className="text-gray-400">Technologies:</p>
                      <p className="text-white">{selectedProject.technologies}</p>
                   </div>
                  </div>
                </div>
                
             
              </div>
            </div>
          </div>
        )}

        {/* Call To Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-violet-900 to-violet-800 py-12 px-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to create your dream website?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Let s collaborate to build a stunning website that perfectly represents your brand and drives results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/pages/contactPage"   className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
             
              Get in Touch
            
           </Link>
           <Link href="/pages/services"  className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
             
              View Services
            
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;