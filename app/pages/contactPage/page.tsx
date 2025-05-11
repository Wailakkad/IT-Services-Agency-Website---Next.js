"use client"
import { Mail, MessageSquare, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
const [hoveredItem, setHoveredItem] = useState<string | null>(null);

const contactItems = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    link: "https://wa.me/123456789",
    icon: <MessageSquare size={24} />,
    description: "Quick responses during business hours",
  },
  {
    id: "email",
    label: "Email",
    link: "mailto:contact@example.com",
    icon: <Mail size={24} />,
    description: "For detailed inquiries and proposals",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    link: "https://linkedin.com/in/yourprofile",
    icon: <Linkedin size={24} />,
    description: "Connect professionally",
  },
  {
    id: "instagram",
    label: "Instagram",
    link: "https://instagram.com/yourhandle",
    icon: <Instagram size={24} />,
    description: "View our latest work and updates",
  },
];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Let's talk about your website project. Choose a platform below to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`
                p-6 rounded-lg border border-gray-800 
                transition-all duration-300 ease-in-out
                ${hoveredItem === item.id ? 'bg-violet-900 bg-opacity-30 border-violet-500 transform -translate-y-1' : 'bg-gray-800 bg-opacity-50 hover:bg-gray-700'}
              `}>
                <div className="flex items-center mb-3">
                  <div className={`
                    mr-4 p-3 rounded-full 
                    transition-colors duration-300
                    ${hoveredItem === item.id ? 'bg-violet-700' : 'bg-gray-700'}
                  `}>
                    {item.icon}
                  </div>
                  <h2 className="text-xl font-semibold">{item.label}</h2>
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className={`
                  text-sm font-medium
                  transition-colors duration-300
                  ${hoveredItem === item.id ? 'text-violet-300' : 'text-gray-300'}
                `}>
                  Contact now 
                  <span className="ml-2 transform inline-block transition-transform duration-300">
                    {hoveredItem === item.id ? '→' : '—'}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

       
      </div>
    </div>
  );
}