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
      <div id="contact" className="h-screen w-full overflow-hidden items-center justify-center">
        <Vortex
          particleCount={700}
          baseHue={220}
          backgroundColor="#000000"
          className="text-white"
          containerClassName="h-full w-full"
          baseSpeed={0.1}
          rangeSpeed={1.5}
          baseRadius={1}
          rangeRadius={2}
        >
          <div className="min-h-screen flex flex-col items-center justify-center p-4">
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="rounded-full bg-white w-10 h-10 mx-auto mb-2 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold">Get In Touch</h1>
              <p className="text-sm text-gray-400 mt-1">Feel free to drop us a message</p>
            </div>

            {/* Contact Info */}
            <div className="flex justify-center space-x-6 mb-8">
              <div className="flex items-center group">
                <div className="bg-[#3f37c9] rounded-full p-2 mr-2 transition-all duration-300 group-hover:bg-blue-600 transform group-hover:scale-110 group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-xs opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">07.02.30.84.81</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-[#3f37c9] rounded-full p-2 mr-2 transition-all duration-300 group-hover:bg-blue-600 transform group-hover:scale-110 group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">akkadouail8@gmail.com</span>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900 rounded-lg p-6 w-full max-w-md hover:shadow-xl hover:shadow-[#3f37c9]/10 transition-all duration-500"
            >
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">First Name</label>
                  <input
                    type="text"
                    name="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="w-full bg-gray-800 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3f37c9] focus:bg-gray-700 transition-all duration-300"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="w-full bg-gray-800 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3f37c9] focus:bg-gray-700 transition-all duration-300"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3f37c9] focus:bg-gray-700 transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-xs text-gray-400 mb-1">Your Message</label>
                <textarea
                  name="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-800 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3f37c9] focus:bg-gray-700 transition-all duration-300"
                  rows={5}
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="relative w-full bg-[#3f37c9] text-white py-2 rounded-full font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[#3f37c9]/50"
              >
                <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">SEND</span>
                <span className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </Vortex>
      </div>
      <Footer />
    </>
  );
}