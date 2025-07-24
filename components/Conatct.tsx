'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Sparkle icon component
const SparkleIcon = () => (
  <svg
    className="w-8 h-8 text-white mb-4 mx-auto"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0l2.4 7.2L22 9.6l-7.6 2.4L12 24l-2.4-7.6L2 14l7.6-2.4L12 0z" />
  </svg>
);

// Arrow icon component
const ArrowIcon = () => (
  <svg
    className="w-5 h-5 ml-2"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
);

// Loading spinner component
const LoadingSpinner = () => (
  <svg
    className="w-5 h-5 mr-2 animate-spin"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// Success icon component
const SuccessIcon = () => (
  <svg
    className="w-6 h-6 text-green-400 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Error icon component
const ErrorIcon = () => (
  <svg
    className="w-6 h-6 text-red-400 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

interface FormData {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
        
        // Reset form after successful submission
        setFormData({
          fullname: '',
          email: '',
          subject: '',
          message: ''
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Failed to send message. Please try again.');
        
        // Auto-hide error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
      console.error('Error submitting form:', error);
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  // Status message component
  const StatusMessage = () => {
    if (submitStatus === 'idle') return null;

    const baseClasses = "mb-6 p-4 rounded-lg border backdrop-blur-sm transition-all duration-300 ease-in-out transform";
    
    const statusClasses = {
      success: "bg-green-900/30 border-green-400/30 text-green-100",
      error: "bg-red-900/30 border-red-400/30 text-red-100",
      loading: "bg-blue-900/30 border-blue-400/30 text-blue-100"
    };

    return (
      <div className={`${baseClasses} ${statusClasses[submitStatus === 'loading' ? 'loading' : submitStatus]} animate-fade-in`}>
        <div className="flex items-center">
          {submitStatus === 'loading' && <LoadingSpinner />}
          {submitStatus === 'success' && <SuccessIcon />}
          {submitStatus === 'error' && <ErrorIcon />}
          <p className="text-sm font-medium">{statusMessage}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black font-sans">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/contact.jpg"
                alt="Modern workspace with MacBook and chair"
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay status indicator on image */}
              {submitStatus !== 'idle' && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-3xl transition-all duration-300">
                  <div className={`p-6 rounded-2xl border backdrop-blur-md ${
                    submitStatus === 'success' 
                      ? 'bg-green-900/40 border-green-400/40' 
                      : submitStatus === 'error'
                      ? 'bg-red-900/40 border-red-400/40'
                      : 'bg-blue-900/40 border-blue-400/40'
                  }`}>
                    <div className="flex flex-col items-center text-center">
                      {submitStatus === 'loading' && (
                        <>
                          <LoadingSpinner />
                          <p className="text-blue-100 font-medium mt-2">Sending...</p>
                        </>
                      )}
                      {submitStatus === 'success' && (
                        <>
                          <SuccessIcon />
                          <p className="text-green-100 font-medium">Message Sent!</p>
                        </>
                      )}
                      {submitStatus === 'error' && (
                        <>
                          <ErrorIcon />
                          <p className="text-red-100 font-medium">Send Failed</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="order-1 lg:order-2 text-white">
            <div className="max-w-md mx-auto lg:mx-0">
              
              {/* Sparkle Icon */}
              <div className="text-center lg:text-left">
                <div className="inline-block">
                  <SparkleIcon />
                </div>
              </div>

              
              <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center lg:text-left">
                  Let&apos;s Get <span className='text-purple-400'>Touch</span>
              </h1>

              {/* Status Message */}
              <StatusMessage />

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Fullname Input */}
                <div>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    disabled={submitStatus === 'loading'}
                    className={`w-full px-4 py-4 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
                      submitStatus === 'loading' 
                        ? 'border-gray-600 opacity-60 cursor-not-allowed' 
                        : 'border-white focus:border-purple-400'
                    }`}
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={submitStatus === 'loading'}
                    className={`w-full px-4 py-4 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
                      submitStatus === 'loading' 
                        ? 'border-gray-600 opacity-60 cursor-not-allowed' 
                        : 'border-white focus:border-purple-400'
                    }`}
                    required
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={submitStatus === 'loading'}
                    className={`w-full px-4 py-4 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors ${
                      submitStatus === 'loading' 
                        ? 'border-gray-600 opacity-60 cursor-not-allowed' 
                        : 'border-white focus:border-purple-400'
                    }`}
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={submitStatus === 'loading'}
                    rows={5}
                    className={`w-full px-4 py-4 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                      submitStatus === 'loading' 
                        ? 'border-gray-600 opacity-60 cursor-not-allowed' 
                        : 'border-white focus:border-purple-400'
                    }`}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className={`w-full lg:w-auto inline-flex items-center justify-center px-8 py-4 border font-bold rounded-lg transition-all duration-300 transform ${
                      submitStatus === 'loading'
                        ? 'border-gray-600 text-gray-400 bg-gray-900/30 cursor-not-allowed scale-95'
                        : submitStatus === 'success'
                        ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black scale-105'
                        : submitStatus === 'error'
                        ? 'border-red-400 text-red-400 hover:bg-red-400 hover:text-black scale-105'
                        : 'border-white text-white hover:bg-white hover:text-black hover:scale-105'
                    }`}
                  >
                    {submitStatus === 'loading' && <LoadingSpinner />}
                    {submitStatus === 'loading' ? 'Sending...' : 
                     submitStatus === 'success' ? 'Sent!' :
                     submitStatus === 'error' ? 'Try Again' : 'Send'}
                    {submitStatus !== 'loading' && <ArrowIcon />}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;