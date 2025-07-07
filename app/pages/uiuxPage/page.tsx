"use client";

import Link from "next/link";
import Image from "next/image";
import uiux1 from "@/assets/webdesign/design6.jpg";

import design1 from "@/assets/webdesign/design1.jpg";
import design2 from "@/assets/webdesign/design2.jpg";
import design3 from "@/assets/webdesign/design3.jpg";

interface PricingCardProps {
  color: "green" | "blue" | "purple";
  tier: string;
  subtitle?: string;
  price: string;
  deliveryTime: string;
  benefits: string[];
  idealFor: string;
  emoji: string;
  buttonText?: string;
}

const PricingCard = ({
  color,
  tier,
  subtitle,
  price,
  deliveryTime,
  benefits,
  idealFor,
  emoji,
  buttonText
}: PricingCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg transition-all duration-500 
      hover:shadow-xl hover:shadow-${color === "green" ? "emerald" : "violet"}-500/20
      hover:translate-y-[-8px] group
      before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r 
      ${color === "green" 
        ? "before:from-emerald-500/0 before:via-emerald-500/5 before:to-emerald-500/0" 
        : color === "blue" 
          ? "before:from-violet-400/0 before:via-violet-400/5 before:to-violet-400/0" 
          : "before:from-violet-500/0 before:via-violet-500/5 before:to-violet-500/0"
      } 
      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
    `}>
      {/* Corner glow effect */}
      <div className={`absolute right-0 top-0 h-32 w-32 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 ${
        color === "green" ? "bg-emerald-500/20" : 
        color === "blue" ? "bg-violet-400/20" : 
        "bg-violet-500/20"
      } blur-2xl`}></div>
      
      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-[-1px] rounded-xl bg-gradient-to-r ${
          color === "green" ? "from-emerald-500/50 via-transparent to-emerald-500/50" : 
          color === "blue" ? "from-violet-400/50 via-transparent to-violet-400/50" : 
          "from-violet-500/50 via-transparent to-violet-500/50"
        } blur-sm`}></div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">{emoji}</span>
          <div>
            <h3 className={`text-xl font-bold transition-all duration-300 ${
              color === "green" ? "text-emerald-400 group-hover:text-emerald-300" : 
              color === "blue" ? "text-violet-400 group-hover:text-violet-300" : 
              "text-violet-300 group-hover:text-violet-200"
            }`}>
              {tier}
            </h3>
            {subtitle && <p className="text-sm italic text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">{subtitle}</p>}
          </div>
        </div>

        <div className="mb-6 transition-transform duration-300 group-hover:translate-x-1">
          <p className="text-3xl font-bold text-white">{price}</p>
          <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Delivery: {deliveryTime}</p>
        </div>

        <div className="mb-6">
          <h4 className="mb-3 font-medium text-white">What&apos;s Included:</h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 transition-all duration-200 hover:translate-x-1">
                <svg className={`mt-1 h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                  color === "green" ? "text-emerald-400" : 
                  color === "blue" ? "text-violet-400" : 
                  "text-violet-300"
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 transition-all duration-300 group-hover:translate-x-1">
          <h4 className="mb-1 text-sm font-medium text-zinc-400 group-hover:text-zinc-300">Ideal For:</h4>
          <p className="text-sm text-zinc-300 group-hover:text-zinc-200">{idealFor}</p>
        </div>

        <Link href="/pages/contactPage" className="block relative overflow-hidden">
          <div className={`absolute inset-0 ${
            color === "green" 
              ? "bg-gradient-to-r from-emerald-600/40 to-emerald-400/40" 
              : color === "blue" 
                ? "bg-gradient-to-r from-violet-600/40 to-violet-400/40" 
                : "bg-gradient-to-r from-violet-600/40 to-violet-400/40"
          } translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-20 rounded-lg blur-sm`}></div>
          <button className={`w-full rounded-lg py-3 font-medium transition-all duration-300 
            relative overflow-hidden
            ${
              color === "green" 
                ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-400 hover:to-emerald-500" 
                : color === "blue" 
                  ? "bg-gradient-to-r from-violet-400 to-violet-500 text-white hover:from-violet-300 hover:to-violet-400" 
                  : "bg-gradient-to-r from-violet-500 to-violet-600 text-white hover:from-violet-400 hover:to-violet-500"
            }
            hover:shadow-lg ${
              color === "green" ? "hover:shadow-emerald-500/30" : "hover:shadow-violet-500/30"
            }
            transform group-hover:scale-[1.02]
          `}>
            {buttonText || "Get Started"}
          </button>
        </Link>
      </div>
    </div>
  );
};



const UIUXPricingHero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-20 md:py-28">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.15)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1)_0%,transparent_50%)]"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          {/* Professional Title */}
          <div className="mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="text-white/90">UI/UX Design Services</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
              Transform your digital vision into exceptional user experiences with our 
              <span className="text-indigo-300 font-semibold"> expert design solutions</span>
            </p>
          </div>
          {/* Centered Image Container - FIXED */}
          <div className="relative mx-auto max-w-4xl  group mb-12">
            {/* Glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            {/* Main container */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 p-1 backdrop-blur-sm border border-white/10">
              <div className="relative overflow-hidden rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50">
                {/* FIXED: Removed fixed height, using aspect-video for proper responsive sizing */}
                <div className="relative aspect-video w-full">
                  <Image
                    src={uiux1}
                    alt="Professional UI/UX Design Process"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    fill
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Professional badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/90 to-purple-500/90 text-white rounded-full backdrop-blur-md border border-indigo-400/30">
                      <div className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">Professional Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-16">
            {/* Website 1 - FIXED */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-900/20 to-purple-900/20 p-1 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20 hover:translate-y-[-12px]">
              <div className="relative overflow-hidden rounded-xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 p-4">
                <div className="relative overflow-hidden rounded-lg h-[500px]">
                  <Image
                    src={design1}
                    alt="Creative Website Design"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-gradient-to-r from-violet-500/90 to-purple-500/90 text-white rounded-full backdrop-blur-md border border-violet-400/30">
                      <span className="w-2 h-2 bg-violet-300 rounded-full animate-pulse"></span>
                      Creative Design
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-white group-hover:text-violet-200 transition-colors duration-300 mb-2">
                    Modern Portfolio
                  </h4>
                  <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    Bold visuals with seamless interactions
                  </p>
                </div>
              </div>
            </div>

            {/* Website 2 - FIXED */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-900/20 to-pink-900/20 p-1 transition-all duration-500 hover:shadow-2xl hover:shadow-fuchsia-500/20 hover:translate-y-[-12px]">
              <div className="relative overflow-hidden rounded-xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 p-4">
                <div className="relative overflow-hidden rounded-lg h-[500px]">
                  <Image
                    src={design2}
                    alt="Professional Website Design"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-gradient-to-r from-fuchsia-500/90 to-pink-500/90 text-white rounded-full backdrop-blur-md border border-fuchsia-400/30">
                      <span className="w-2 h-2 bg-fuchsia-300 rounded-full animate-pulse"></span>
                      Professional
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-white group-hover:text-fuchsia-200 transition-colors duration-300 mb-2">
                    Business Excellence
                  </h4>
                  <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    Conversion-focused and performance-driven
                  </p>
                </div>
              </div>
            </div>

            {/* Website 3 - FIXED */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 p-1 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:translate-y-[-12px]">
              <div className="relative overflow-hidden rounded-xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 p-4">
                <div className="relative overflow-hidden rounded-lg h-[500px]">
                  <Image
                    src={design3}
                    alt="Innovative Website Design"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-gradient-to-r from-emerald-500/90 to-teal-500/90 text-white rounded-full backdrop-blur-md border border-emerald-400/30">
                      <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></span>
                      Innovative
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors duration-300 mb-2">
                    Creative Solutions
                  </h4>
                  <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    User-centered design with modern aesthetics
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            {/* <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                View All
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button> */}
            
          <Link href="/pages/portfolio">
              <button className="group flex items-center gap-2 text-gray-400 hover:text-indigo-300 transition-colors duration-300">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 group-hover:border-indigo-500/50 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
               </svg>
              </div>
                <span className="text-sm font-medium">See Portfolio</span>
             </button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};



const UiUxPricingDemo = () => {
  return (
    <>
       <section className="relative overflow-hidden bg-black text-white min-h-screen">
      {/* Back to Home Arrow */}
      <Link href="/" className="absolute left-6 top-6 z-20 group">
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-600 p-0.5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/40 group-hover:scale-110">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-900">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-violet-400 transition-transform duration-300 group-hover:-translate-x-0.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
          </div>
          <span className="text-sm font-medium text-violet-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Back to Home</span>
        </div>
      </Link>

      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-violet-900/20 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute right-0 top-1/3 h-60 w-60 rounded-full bg-violet-700/10 blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-0 left-1/3 h-40 w-60 rounded-full bg-violet-800/10 blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-4 text-center">
         <h2 className="text-4xl font-bold md:text-5xl  text-white"> 🎨 UI/UX Design Services</h2>
          <p className="text-xl font-medium text-violet-300">
            Intuitive and Beautiful Experiences That Convert
          </p>
          <p className="mx-auto max-w-3xl text-base md:text-lg text-zinc-400">
            Whether you&rsquo;re launching a product or redesigning your app, our UI/UX packages are tailored to deliver seamless, modern, and results-driven user experiences.
          </p>
        </div>

        <h3 className="mb-8 text-center text-2xl font-semibold text-white relative">
          <span className="inline-block transform transition-transform duration-500 hover:scale-105 hover:text-violet-200">📦 Our UI/UX Packages</span>
          <span className="absolute -bottom-2 left-1/2 w-12 h-1 bg-gradient-to-r from-violet-500 to-purple-500 transform -translate-x-1/2 rounded-full"></span>
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <PricingCard
            color="green"
            emoji="🌱"
            tier="Essential UX Audit"
            subtitle="Quick Wins"
            price="$149"
            deliveryTime="2–3 days"
            benefits={[
              "UX heuristics evaluation",
              "Top 5 usability issues",
              "Mobile & desktop review",
              "Actionable improvement list",
              "PDF Report with visuals"
            ]}
            idealFor="Startups, landing pages, MVPs"
            buttonText="Start Audit →"
          />

          <PricingCard
            color="blue"
            emoji="🎯"
            tier="UI/UX Revamp"
            subtitle="Modernize Your Product"
            price="$399"
            deliveryTime="4–6 days"
            benefits={[
              "Full-page redesign (up to 3 screens)",
              "Wireframes + polished UI",
              "Mobile-first and responsive",
              "Figma delivery",
              "Basic user flow improvements"
            ]}
            idealFor="Apps needing a modern and user-friendly facelift"
            buttonText="Revamp My Design →"
          />

          <PricingCard
            color="purple"
            emoji="🚀"
            tier="Premium UX Design"
            subtitle="Complete Experience Design"
            price="$799"
            deliveryTime="7–10 days"
            benefits={[
              "User research + persona definition",
              "UI/UX design for up to 6 screens",
              "Interactive prototype (Figma)",
              "Component library included",
              "Handoff-ready assets",
              "Design system included"
            ]}
            idealFor="Founders launching new products or seeking investor-ready UI"
            buttonText="Let's Build It →"
          />
        </div>
      </div>
        </section>
      <UIUXPricingHero />
    </>
  );
};

export default UiUxPricingDemo;