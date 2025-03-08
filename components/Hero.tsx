import React from 'react'
import img from "../assets/concept-of-seo-ranking.png"
import coding from "../assets/code.png"
import UiUx from "../assets/frontend.png"
import landingPage from "../assets/landing-page.png"
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      className='pt-8 pb-20 w-full min-h-[95vh] flex items-center'
      style={{
        background: 'radial-gradient(ellipse 200% 100% at bottom left, #7b2cbf, #240046 66%)'
      }}
    >
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center gap-6 lg:gap-12'>
        {/* Left section - more responsive text sizing */}
        <div className='md:w-1/2 w-full'>
          <div className='text-xs sm:text-sm inline-flex px-3 sm:px-4 py-1 rounded-lg border border-white/20 mb-3 sm:mb-4 text-white/80'>Version 2.3.4</div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-[#b8c0ff] to-[#c8b6ff] text-transparent bg-clip-text mb-3 sm:mb-4 leading-tight'>It Services for All Businesses</h1>
          <p className='text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-white/90 max-w-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas necessitatibus eum
            unde repellendus, quia labore debitis minima velit ipsam illum.
          </p>
          <div className='flex gap-3 sm:gap-4 items-center flex-wrap'>
            <button className='bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 transition-all duration-300 text-sm sm:text-base'>Get started with us</button>
            <button className='text-white hover:text-[#c8b6ff] transition-all duration-300 text-sm sm:text-base'>Learn More →</button>
          </div>
        </div>

        {/* Right section - responsive image with floating icons */}
        <div className='md:w-1/2 w-full mt-8 md:mt-0 flex items-center justify-center'>
          <div className='relative w-full max-w-lg'>
            {/* Main hero image */}
            <Image
              src={img}
              alt='hero image'
              className='w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-500'
              priority
            />
            
            {/* Floating icon 1 - Top Left - Moved higher */}
            <div className='absolute -top-2 -left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 animate-pulse'>
              <div className='bg-white/10 backdrop-blur-sm p-2 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-all duration-300'>
                <Image
                  src={coding}
                  alt='Coding icon'
                  className='w-full h-auto rounded'
                />
              </div>
            </div>
            
            {/* Floating icon 2 - Top Right */}
            <div className='absolute -top-24 -right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 animate-pulse delay-300'>
              <div className='bg-white/10 backdrop-blur-sm p-2 rounded-lg shadow-lg transform -rotate-12 hover:rotate-0 transition-all duration-300'>
                <Image
                  src={UiUx}
                  alt='UI/UX icon'
                  className='w-full h-auto rounded'
                />
              </div>
            </div>
            
            {/* Floating icon 3 - Right Center */}
            <div className='absolute  -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 animate-pulse delay-700'>
              <div className='bg-white/10 backdrop-blur-sm p-2 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-all duration-300'>
                <Image
                  src={landingPage}
                  alt='Landing page icon'
                  className='w-full h-auto rounded'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero