"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MarketingServices from "@/components/MarketingServices";
import Footer from "@/components/Footer";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Vortex } from "@/components/ui/vortex";
import toast from "react-hot-toast";

const products = [
  {
    id: 1,
    title: "Product 1",
    link: "/product-1",
    thumbnail: "https://i.pinimg.com/736x/43/ae/4f/43ae4f74391da19c8002556643abee01.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    link: "/product-2",
    thumbnail: "https://i.pinimg.com/736x/ea/6e/94/ea6e9461504e45d004e6ce9e55c65750.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    link: "/product-3",
    thumbnail: "https://i.pinimg.com/736x/b0/33/4c/b0334caa4f6f092d8bb019a66a33c2d0.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    link: "/product-4",
    thumbnail: "https://i.pinimg.com/736x/dc/0c/46/dc0c46529061e684be6db846c4c3c86d.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    link: "/product-5",
    thumbnail: "https://i.pinimg.com/736x/43/ae/4f/43ae4f74391da19c8002556643abee01.jpg",
  },
  {
    id: 6,
    title: "Product 6",
    link: "/product-6",
    thumbnail: "https://i.pinimg.com/736x/ea/6e/94/ea6e9461504e45d004e6ce9e55c65750.jpg",
  },
  {
    id: 7,
    title: "Product 7",
    link: "/product-7",
    thumbnail: "https://i.pinimg.com/736x/b0/33/4c/b0334caa4f6f092d8bb019a66a33c2d0.jpg",
  },
  {
    id: 8,
    title: "Product 8",
    link: "/product-8",
    thumbnail: "https://i.pinimg.com/736x/dc/0c/46/dc0c46529061e684be6db846c4c3c86d.jpg",
  },
  {
    id: 9,
    title: "Product 9",
    link: "/product-9",
    thumbnail: "https://i.pinimg.com/736x/43/ae/4f/43ae4f74391da19c8002556643abee01.jpg",
  },
  {
    id: 10,
    title: "Product 10",
    link: "/product-10",
    thumbnail: "https://i.pinimg.com/736x/ea/6e/94/ea6e9461504e45d004e6ce9e55c65750.jpg",
  },
  {
    id: 11,
    title: "Product 11",
    link: "/product-11",
    thumbnail: "https://i.pinimg.com/736x/b0/33/4c/b0334caa4f6f092d8bb019a66a33c2d0.jpg",
  },
  {
    id: 12,
    title: "Product 12",
    link: "/product-12",
    thumbnail: "https://i.pinimg.com/736x/dc/0c/46/dc0c46529061e684be6db846c4c3c86d.jpg",
  },
  {
    id: 13,
    title: "Product 13",
    link: "/product-13",
    thumbnail: "https://i.pinimg.com/736x/b0/33/4c/b0334caa4f6f092d8bb019a66a33c2d0.jpg",
  },
  {
    id: 14,
    title: "Product 14",
    link: "/product-14",
    thumbnail: "https://i.pinimg.com/736x/dc/0c/46/dc0c46529061e684be6db846c4c3c86d.jpg",
  },
];

export default function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      firstname,
      lastname,
      email,
      message,
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Form submission successful:", result);

      // Reset form fields
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");

      // Show success toast
      toast.success("Thank you for contacting us! We'll get back to you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error toast
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <MarketingServices />
      </div>
      <div id="portfolio">
        <HeroParallax products={products} />
      </div>
      <div id="callToAction" className="h-screen w-full overflow-hidden items-center justify-center">
      <Vortex
        particleCount={700}
        baseHue={220}
        backgroundColor="#000000"
        className="text-white flex items-center justify-center"
        containerClassName="h-full w-full"
        baseSpeed={0.1}
        rangeSpeed={1.5}
        baseRadius={1}
        rangeRadius={2}
      >
        <div className="relative w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center mt-20">
          {/* Modern gradient badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm border border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
            Web Design Experts
          </div>
          
          {/* Main heading with gradient text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 leading-tight">
            Make Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Presence Online</span> With Us
          </h1>
          
          {/* Description with increased readability */}
          <p className="text-gray-300 text-center text-lg max-w-2xl mb-10 leading-relaxed">
            We craft stunning digital experiences that convert visitors into customers. Our expert team specializes in creating websites that not only look amazing but drive real business results.
          </p>
          
          {/* Modern CTA buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-medium overflow-hidden shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                Get Started Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            
            <button className="px-8 py-4 border border-indigo-500/30 rounded-full text-indigo-300 font-medium backdrop-blur-sm hover:bg-indigo-500/10 transition-all duration-300">
              View Our Work
            </button>
          </div>
          
          {/* Stats section for social proof */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 w-full max-w-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">100+</div>
              <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">95%</div>
              <div className="text-gray-400 text-sm mt-1">Client Satisfaction</div>
            </div>
            <div className="text-center md:col-span-1 col-span-2 mx-auto">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400">24/7</div>
              <div className="text-gray-400 text-sm mt-1">Support Available</div>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-0 -left-20 w-40 h-40 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
          <div className="absolute -bottom-8 left-20 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
          <div className="absolute top-0 -right-20 w-40 h-40 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
          
   
        </div>
      </Vortex>
    </div>
      <Footer />
    </>
  );
}