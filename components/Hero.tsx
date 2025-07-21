'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import imgAi from "@/public/imageProjects/ai-chatbot.png"
import aiimg from "@/public/imageProjects/secondAi.png"
import Link from 'next/link';
import Chat from './Chat'
import { ArrowRight, Code, Palette, Layout, Sparkles } from 'lucide-react';

// Type definition for Spline Application
interface SplineApplication {
  load: (scene: string) => Promise<void>;
  dispose: () => void;
}

// Spline Component using @splinetool/runtime
interface SplineSceneProps {
  scene: string;
}

const SplineScene: React.FC<SplineSceneProps> = ({ scene }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let app: SplineApplication | null = null;
    
    const loadSpline = async () => {
      try {
        const { Application } = await import('@splinetool/runtime');
        const canvas = canvasRef.current;
        
        if (canvas) {
          app = new Application(canvas) as SplineApplication;
          await app.load(scene);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error loading Spline scene:', error);
        setIsLoading(false);
      }
    };

    loadSpline();

    return () => {
      if (app) {
        app.dispose();
      }
    };
  }, [scene]);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center text-white z-10">
          Loading 3D Scene...
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 lg:py-38">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-600 blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 h-80 w-80 rounded-full bg-violet-800/15 blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
          {/* Content section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-indigo-200 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
              Trusted by 500+ businesses worldwide
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block text-white">Digital Solutions for</span>
              <span className="bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 bg-clip-text text-transparent animate-gradient">
                Modern Businesses
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-indigo-100/80 mb-8 max-w-xl mx-auto lg:mx-0">
              We craft stunning websites, intuitive UI/UX designs, and high-converting landing pages 
              to transform your digital presence and drive business growth.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/pages/services">
                <button className="px-6 py-3 bg-white text-indigo-900 font-medium rounded-lg hover:shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center gap-2 group">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/pages/portfolio">
                <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-lg hover:bg-white/20 transition duration-300">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
          
          {/* Visual section with Spline */}
          <div className="w-full lg:w-1/2 relative">
            {/* Spline 3D Scene */}
            <div className="w-full aspect-square max-w-lg mx-auto">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <SplineScene scene="https://prod.spline.design/W-eFTVXHonhVV9T3/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chat />

      {/* Services Section */}
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Web Design Card */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Web Design</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Zero downtime. 100% compliant websites. AI + split testing
            </p>
          </div>

          {/* Development Card */}
          <div className="group bg-white backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-black/10 rounded-xl group-hover:bg-black/20 transition-colors">
                <Code className="w-6 h-6 text-black" />
              </div>
              <ArrowRight className="w-5 h-5 text-black/60 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <h3 className="text-black font-semibold text-lg mb-2">Development</h3>
            <p className="text-black/70 text-sm leading-relaxed">
              Zero downtime. 100% monitored servers. AI work at startup
            </p>
          </div>

          {/* Branding Card */}
          <div className="group bg-white backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-black/10 rounded-xl group-hover:bg-black/20 transition-colors">
                <Palette className="w-6 h-6 text-black" />
              </div>
              <ArrowRight className="w-5 h-5 text-black/60 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <h3 className="text-black font-semibold text-lg mb-2">Branding</h3>
            <p className="text-black/70 text-sm leading-relaxed">
              Zero downtime. 100% prioritized creatives. AI + HeartContent
            </p>
          </div>

          {/* AI Support Card */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">AI Support</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Zero latetime. 24/7. 100% Blended support. AI + long learned
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AI Assistant Card */}
          <div className="lg:col-span-2 group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <Image 
                  src={imgAi} 
                  alt="AI Assistant Robot" 
                  className='w-[300px] h-[450px] object-contain' 
                  priority
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-4xl lg:text-6xl xl:text-8xl mb-2 leading-tight">
                  Meet your AI assistant—
                </h3>
                <p className="text-white font-semibold text-xl mb-4">always on, always learning.</p>
                <button className="px-12 lg:px-16 xl:px-20 py-4 mt-12 bg-white hover:bg-violet-700 hover:text-white cursor-pointer text-black rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group">
                  <span>GO 1 MIN</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="group bg-white backdrop-blur-sm border border-white/20 rounded-2xl  hover:bg-white/90 transition-all duration-300 flex flex-col justify-between h-full">
            <div className="text-center p-6">
              <p className="text-black/70 text-sm font-medium mb-2">Prov Word for manjoo</p>
              <div className="text-6xl lg:text-7xl xl:text-9xl font-bold text-black mb-2">24/7+</div>
              <p className="text-black/70 text-sm">brands transformed</p>
            </div>
            
            <div className="flex justify-center mt-4">
              <Image 
                src={aiimg} 
                alt="AI Technology" 
                className='w-[200px] lg:w-[250px] xl:w-[300px] h-[150px] lg:h-[175px] xl:h-[200px] object-contain' 
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;