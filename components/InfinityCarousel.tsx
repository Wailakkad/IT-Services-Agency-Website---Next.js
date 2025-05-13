import { InfiniteSlider } from "@/components/ui/infinite-slider";
import react from "@/assets/logoSliders/react.png";
import js from "@/assets/logoSliders/js.png";
import html from "@/assets/logoSliders/html.png";
import css from "@/assets/logoSliders/css.png";
import tailwindcss from "@/assets/logoSliders/tailwindcss.png";
import figma from "@/assets/logoSliders/figma.png";
import next from "@/assets/logoSliders/next.png";
import ps from "@/assets/logoSliders/ps.png";
import Image from "next/image";

function InfiniteSliderEnhanced() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 bg-black backdrop-blur-md"></div>
      
      {/* Light effect overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      {/* Glow effects */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl"></div>
      
      {/* Content container */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600 text-2xl mb-8">
            Technologies We Use
          </h3>
          
          {/* Slider container with glass effect */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
            <InfiniteSlider 
              gap={44} 
              reverse 
              className="w-full flex items-center justify-center"
              
            >
              {/* Enhanced logo items */}
              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                <Image
                  src={react}
                  alt="React logo"
                  className="h-16 w-[100px]  object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full">React</span>
              </div>
              
              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                <Image
                  src={next}
                  alt="Next.js logo"
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full">Next.js</span>
              </div>
              
              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                <Image
                  src={js}
                  alt="JavaScript logo"
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full">JavaScript</span>
              </div>
              
              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                <Image
                  src={html}
                  alt="HTML logo"
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full">HTML</span>
              </div>
              
              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                <Image
                  src={css}
                  alt="CSS logo"
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full">CSS</span>
              </div>
              
              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                <Image
                  src={tailwindcss}
                  alt="Tailwind CSS logo"
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full">Tailwind</span>
              </div>
              
              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                <Image
                  src={figma}
                  alt="Figma logo"
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full">Figma</span>
              </div>
              
              <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg border border-white/10 flex items-center justify-center w-[350px]">
                <Image
                  src={ps}
                  alt="Photoshop logo"
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-xs font-medium text-white bg-indigo-500/70 px-3 py-1 rounded-full">Photoshop</span>
              </div>
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfiniteSliderEnhanced;