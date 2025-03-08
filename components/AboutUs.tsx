// pages/about-us.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import devImg from "../assets/openart-image_4QJTrC6j_1741402906187_raw.jpg";

export default function AboutUs() {
  // Skills data
  const skills = [
    { name: "Web Development", percentage: 92 },
    { name: "UI/UX Design", percentage: 88 },
    { name: "Video Editing", percentage: 85 },
    { name: "Branding", percentage: 77 },
  ];

  // Stats data
  const stats = [
    { number: "20+", label: "Years of Experience" },
    { number: "1,000+", label: "Projects Done" },
    { number: "300+", label: "Satisfied Clients" },
    { number: "64", label: "Certified Awards" },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>About Us | Your Company</title>
        <meta name="description" content="Learn more about our company and what we do" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header with breadcrumb */}
      <header className="py-20 px-4 md:px-8 text-center relative">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-violet-400">About Us</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/" className="hover:text-violet-300">Home</Link>
            <span>/</span>
            <span className="text-gray-400">About Us</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="px-4 md:px-8 max-w-7xl mx-auto pb-20">
        {/* Hero section with image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            {/* Using the imported image */}
            <Image 
              src={devImg}
              alt="Developer working on a project" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-violet-400">We Always Make The Best</h2>
            <p className="text-gray-400 mb-8">
              With over two decades of experience in web development and design, we've mastered the art of creating digital experiences that captivate, convert, and deliver results. Our team of certified professionals is dedicated to excellence, bringing innovation and technical expertise to every project we undertake.
            </p>
            <button className="bg-violet-600 text-white hover:bg-violet-700 px-6 py-2 rounded-full font-medium transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Skills section */}
        <div className="py-16">
          <h2 className="text-2xl font-bold mb-8 text-violet-400">Our Skills</h2>
          <p className="text-gray-400 mb-12">
            Our diverse skillset allows us to tackle any digital challenge. From front-end development to immersive design experiences, we bring technical proficiency and creative vision to every project.
          </p>
          
          {/* Skills bars with violet coloring */}
          <div className="space-y-6 mb-16">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-violet-300">{skill.name}</span>
                  <span className="text-violet-400">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full">
                  <div 
                    className="h-2 bg-gradient-to-r from-violet-400 to-violet-600 rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats grid with violet accents */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg text-center border border-violet-900 hover:border-violet-700 transition-colors duration-300">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-violet-400">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 md:px-8 text-center text-gray-400">
        <div className="max-w-7xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}