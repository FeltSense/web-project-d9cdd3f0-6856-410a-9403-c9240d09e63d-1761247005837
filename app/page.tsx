'use client'

import React, { useState, FormEvent } from 'react'
import { CheckCircle, AlertCircle, Loader2, Send, MapPin, Phone, Mail } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget as HTMLFormElement
    
    const formData = {
      name: (form.querySelector('#name') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      phone: (form.querySelector('#phone') as HTMLInputElement).value,
      company: (form.querySelector('#company') as HTMLInputElement).value,
      budget: (form.querySelector('#budget') as HTMLSelectElement).value,
      services: (form.querySelector('#services') as HTMLSelectElement).value,
      message: (form.querySelector('#message') as HTMLTextAreaElement).value,
      source: 'Nexus AI Labs Contact Form',
      industry: 'Marketing'
    }

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setFormStatus('success')
      form.reset()
      
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    } catch (error) {
      setFormStatus('error')
      setErrorMessage('Failed to submit form. Please try again or contact us directly.')
      
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out" id="navbar">
  <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg shadow-purple-500/20 transition-all duration-500" id="nav-container">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between transition-all duration-500 py-6" id="nav-content">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-900 p-2 rounded-lg border border-purple-500/50">
              <svg className="w-8 h-8 transition-all duration-500" id="logo-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" className="fill-cyan-400" />
                <path d="M2 17L12 22L22 17" className="stroke-purple-400" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 12L12 17L22 12" className="stroke-purple-300" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500" id="brand-name">
              Nexus AI Labs
            </h1>
            <p className="text-xs text-purple-300 font-light tracking-wider transition-all duration-500" id="brand-tagline">
              Marketing Intelligence
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" className="px-4 py-2 text-gray-200 hover:text-cyan-400 transition-all duration-300 relative group">
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/20 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <a href="#services" className="px-4 py-2 text-gray-200 hover:text-cyan-400 transition-all duration-300 relative group">
            <span className="relative z-10">Services</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/20 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <a href="#about" className="px-4 py-2 text-gray-200 hover:text-cyan-400 transition-all duration-300 relative group">
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/20 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <a href="#pricing" className="px-4 py-2 text-gray-200 hover:text-cyan-400 transition-all duration-300 relative group">
            <span className="relative z-10">Pricing</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/20 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <a href="#contact" className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-200 hover:text-cyan-400 transition-colors duration-300 p-2" id="mobile-menu-button">
          <svg className="w-6 h-6 transition-all duration-500" id="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/30" id="mobile-menu">
    <div className="px-4 pt-2 pb-4 space-y-2">
      <a href="#home" className="block px-4 py-3 text-gray-200 hover:text-cyan-400 hover:bg-purple-900/30 rounded-lg transition-all duration-300">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-gray-200 hover:text-cyan-400 hover:bg-purple-900/30 rounded-lg transition-all duration-300">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-gray-200 hover:text-cyan-400 hover:bg-purple-900/30 rounded-lg transition-all duration-300">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-gray-200 hover:text-cyan-400 hover:bg-purple-900/30 rounded-lg transition-all duration-300">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
        Contact
      </a>
    </div>
  </div>
</nav>

<script dangerouslySetInnerHTML={{__html: `
  (function() {
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    const navContent = document.getElementById('nav-content');
    const brandName = document.getElementById('brand-name');
    const brandTagline = document.getElementById('brand-tagline');
    const logoIcon = document.getElementById('logo-icon');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        navContent.classList.remove('py-6');
        navContent.classList.add('py-3');
        brandName.classList.remove('text-2xl');
        brandName.classList.add('text-xl');
        brandTagline.classList.add('opacity-0', 'h-0');
        logoIcon.classList.remove('w-8', 'h-8');
        logoIcon.classList.add('w-6', 'h-6');
      } else {
        navContent.classList.remove('py-3');
        navContent.classList.add('py-6');
        brandName.classList.remove('text-xl');
        brandName.classList.add('text-2xl');
        brandTagline.classList.remove('opacity-0', 'h-0');
        logoIcon.classList.remove('w-6', 'h-6');
        logoIcon.classList.add('w-8', 'h-8');
      }
      
      lastScroll = currentScroll;
    });

    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      if (mobileMenu.classList.contains('hidden')) {
        hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
      } else {
        hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
      }
    });
  })();
`}} />
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-slate-950">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-950 to-blue-900/40 animate-gradient-shift"></div>
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>

  {/* Floating Grid Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

  {/* Content Container */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
    
    {/* Floating Badge */}
    <div className="mb-8 animate-float">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
        <span className="text-sm font-medium text-purple-300">AI-Powered Marketing Intelligence</span>
      </div>
    </div>

    {/* Main Headline with Floating Animation */}
    <h1 className="text-center mb-6 animate-fade-in-up">
      <div className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
        <span className="inline-block bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
          Nexus AI Labs
        </span>
      </div>
      <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90">
        Transform Marketing with
        <span className="inline-block ml-3 text-transparent bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text animate-pulse">
          Neural Intelligence
        </span>
      </div>
    </h1>

    {/* Description with Staggered Float */}
    <p className="text-lg md:text-xl text-slate-300 text-center max-w-3xl mb-12 leading-relaxed animate-fade-in-up delay-200">
      Harness the power of advanced AI algorithms to predict customer behavior, 
      optimize campaigns in real-time, and unlock unprecedented ROI. 
      <span className="text-purple-300 font-medium"> The future of marketing is autonomous.</span>
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
      <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
        <span className="relative z-10">Start Free Trial</span>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-violet-400 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
      </button>
      <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
        Watch Demo
        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
      </button>
    </div>

    {/* Floating Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
      <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float delay-100">
        <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2">
          10x
        </div>
        <div className="text-slate-300 text-sm">Campaign Performance</div>
      </div>
      <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float delay-200">
        <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-2">
          94%
        </div>
        <div className="text-slate-300 text-sm">Prediction Accuracy</div>
      </div>
      <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float delay-300">
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          24/7
        </div>
        <div className="text-slate-300 text-sm">Autonomous Optimization</div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes gradient-shift {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-gradient-shift {
      animation: gradient-shift 8s ease infinite;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .animate-gradient-x {
      background-size: 200% auto;
      animation: gradient-x 3s linear infinite;
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    .delay-100 {
      animation-delay: 100ms;
    }
    .delay-200 {
      animation-delay: 200ms;
    }
    .delay-300 {
      animation-delay: 300ms;
    }
    .delay-500 {
      animation-delay: 500ms;
    }
    .delay-1000 {
      animation-delay: 1000ms;
    }
  `}</style>
</div>
      
      {/* Services Section */}
      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">
        AI-Powered Marketing Solutions
      </h2>
      <p className="text-xl text-purple-200 max-w-3xl mx-auto">
        Nexus AI Labs delivers cutting-edge AI solutions that transform marketing strategies with measurable ROI
      </p>
    </div>

    {/* Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-fr">
      
      {/* Large Card - Predictive Analytics */}
      <div className="md:col-span-6 lg:col-span-7 lg:row-span-2 bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-300 group">
        <div className="flex flex-col h-full">
          <div className="bg-purple-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Predictive Customer Analytics</h3>
          <p className="text-purple-100 text-lg mb-6 flex-grow">
            End-to-end AI development from strategy to deployment. Our PhD-level researchers build custom predictive models that forecast customer behavior, optimize campaign timing, and maximize conversion rates across all channels.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-purple-500/30 rounded-full text-sm text-purple-200">Behavior Forecasting</span>
            <span className="px-4 py-2 bg-purple-500/30 rounded-full text-sm text-purple-200">ROI Optimization</span>
            <span className="px-4 py-2 bg-purple-500/30 rounded-full text-sm text-purple-200">Real-time Insights</span>
          </div>
        </div>
      </div>

      {/* Tall Card - Content Generation */}
      <div className="md:col-span-3 lg:col-span-5 lg:row-span-2 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 hover:border-blue-400/60 transition-all duration-300 group">
        <div className="flex flex-col h-full">
          <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">AI Content Generation Engine</h3>
          <p className="text-blue-100 mb-6 flex-grow">
            Industry-specific AI solutions powered by cutting-edge technology. Generate personalized marketing content at scale with our secure, scalable implementation backed by continuous optimization.
          </p>
          <ul className="space-y-3 text-blue-100">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              Multi-channel campaigns
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              Brand voice consistency
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              A/B testing automation
            </li>
          </ul>
        </div>
      </div>

      {/* Wide Card - Customer Segmentation */}
      <div className="md:col-span-3 lg:col-span-5 bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-sm border border-emerald-500/30 rounded-3xl p-8 hover:border-emerald-400/60 transition-all duration-300 group">
        <div className="flex items-start gap-6">
          <div className="bg-emerald-500/20 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Intelligent Customer Segmentation</h3>
            <p className="text-emerald-100 mb-4">
              Proven track record with measurable ROI. Our senior engineers deliver transparent processes with regular communication, creating hyper-targeted audience segments that drive engagement.
            </p>
            <div className="flex items-center gap-2 text-emerald-300 font-semibold">
              <span>Learn more</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Wide Card - Marketing Automation */}
      <div className="md:col-span-3 lg:col-span-7 bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8 hover:border-orange-400/60 transition-all duration-300 group">
        <div className="flex items-start gap-6">
          <div className="bg-orange-500/20 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Marketing Automation & Optimization</h3>
            <p className="text-orange-100 mb-4">
              Post-launch support with continuous optimization. Nexus AI Labs implements best practices with scalable, secure technology that automates campaign management and maximizes marketing efficiency across industries.
            </p>
            <div className="flex items-center gap-2 text-orange-300 font-semibold">
              <span>Explore solutions</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-12 text-center">
      <p className="text-purple-200 mb-6">Trusted by leading marketing teams worldwide</p>
      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
        Schedule a Consultation with Nexus AI Labs
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        What Marketing Leaders Say
      </h2>
      <p className="text-lg text-slate-600">
        See how Nexus AI Labs transforms marketing strategies
      </p>
    </div>

    {/* First Comparison */}
    <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Sarah Chen"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-bold text-slate-900">Sarah Chen</h3>
            <p className="text-sm text-slate-600">CMO, BrandVision Inc.</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-red-500 font-semibold text-sm uppercase">Before Nexus AI Labs</span>
        </div>
        <p className="text-slate-700 italic">
          &quot;Our campaign planning took weeks, and we struggled to predict which content would resonate. ROI tracking was a nightmare with scattered data across multiple platforms.&quot;
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-xl border-l-4 border-green-400">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Sarah Chen"
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white"
          />
          <div>
            <h3 className="font-bold text-white">Sarah Chen</h3>
            <p className="text-sm text-blue-100">CMO, BrandVision Inc.</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-green-300 font-semibold text-sm uppercase">After Nexus AI Labs</span>
        </div>
        <p className="text-white italic">
          &quot;Nexus AI Labs cut our planning time by 70%. The AI predicts engagement with 94% accuracy, and unified analytics give us real-time ROI insights. Our conversion rates jumped 156% in just three months!&quot;
        </p>
        <div className="flex gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
    </div>

    {/* Second Comparison */}
    <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Marcus Rodriguez"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-bold text-slate-900">Marcus Rodriguez</h3>
            <p className="text-sm text-slate-600">Director of Digital Marketing, TechFlow</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-red-500 font-semibold text-sm uppercase">Before Nexus AI Labs</span>
        </div>
        <p className="text-slate-700 italic">
          &quot;Managing personalization at scale was impossible. Our team spent countless hours segmenting audiences manually, and even then, our messaging felt generic and underperformed.&quot;
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl border-l-4 border-green-400">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Marcus Rodriguez"
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white"
          />
          <div>
            <h3 className="font-bold text-white">Marcus Rodriguez</h3>
            <p className="text-sm text-purple-100">Director of Digital Marketing, TechFlow</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-green-300 font-semibold text-sm uppercase">After Nexus AI Labs</span>
        </div>
        <p className="text-white italic">
          &quot;Nexus AI Labs automated our entire personalization engine. We now deliver hyper-targeted content to 50,000+ segments effortlessly. Email open rates increased 89%, and our team focuses on strategy instead of manual tasks.&quot;
        </p>
        <div className="flex gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
    </div>

    {/* Third Comparison */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            alt="Emily Thompson"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-bold text-slate-900">Emily Thompson</h3>
            <p className="text-sm text-slate-600">VP of Growth, Momentum Digital</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-red-500 font-semibold text-sm uppercase">Before Nexus AI Labs</span>
        </div>
        <p className="text-slate-700 italic">
          &quot;Our ad spend was bleeding money. We couldn&apos;t identify which channels drove real conversions, and A/B testing took forever. Budget allocation was basically guesswork.&quot;
        </p>
      </div>

      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 shadow-xl border-l-4 border-green-400">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            alt="Emily Thompson"
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white"
          />
          <div>
            <h3 className="font-bold text-white">Emily Thompson</h3>
            <p className="text-sm text-emerald-100">VP of Growth, Momentum Digital</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-green-300 font-semibold text-sm uppercase">After Nexus AI Labs</span>
        </div>
        <p className="text-white italic">
          &quot;Nexus AI Labs&apos; predictive analytics transformed our ad strategy. We now optimize spend in real-time across 12 channels. Our cost per acquisition dropped 43%, and we&apos;re scaling campaigns with confidence backed by data.&quot;
        </p>
        <div className="flex gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="relative max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30">
        <span className="text-purple-300 text-sm font-semibold">Nexus AI Labs Pricing</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Transform Your Marketing
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        AI-powered solutions designed for modern marketing teams
      </p>
    </div>

    {/* Tiered Gradient Pricing Card */}
    <div className="relative max-w-4xl mx-auto">
      {/* Gradient Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 rounded-3xl border border-purple-500/30 overflow-hidden">
        {/* Top Tier - Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-2">Marketing Pro Suite</h3>
          <p className="text-purple-100">Complete AI Marketing Toolkit</p>
        </div>

        {/* Middle Tier - Pricing Section */}
        <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/40 px-8 py-12 text-center border-y border-purple-500/20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-6xl font-bold text-white">$79</span>
            <div className="text-left">
              <span className="text-gray-400 text-lg">/month</span>
              <p className="text-purple-300 text-sm">billed monthly</p>
            </div>
          </div>
          <p className="text-gray-300 mb-8">Everything you need to scale your marketing</p>

          {/* CTA Button */}
          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
            className="group relative w-full max-w-md mx-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-5 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Start Your AI Marketing Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400 font-semibold">Stripe</span>
              <span>Protected</span>
            </div>
          </div>
        </div>

        {/* Bottom Tier - Features Section */}
        <div className="bg-gradient-to-br from-slate-900/90 to-purple-950/50 px-8 py-12">
          <h4 className="text-xl font-bold text-white mb-6 text-center">What&apos;s Included</h4>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">AI Content Generation</h5>
                <p className="text-gray-400 text-sm">Create engaging marketing copy in seconds</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">Advanced Analytics</h5>
                <p className="text-gray-400 text-sm">Real-time campaign performance insights</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">Audience Targeting</h5>
                <p className="text-gray-400 text-sm">AI-powered customer segmentation</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">Automated Scheduling</h5>
                <p className="text-gray-400 text-sm">Schedule posts across all platforms</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">Brand Voice Training</h5>
                <p className="text-gray-400 text-sm">Customize AI to match your brand</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-1">24/7 Priority Support</h5>
                <p className="text-gray-400 text-sm">Dedicated Nexus AI Labs support team</p>
              </div>
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Trusted by 10,000+ marketing teams worldwide
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Money Back Guarantee */}
    <div className="text-center mt-12">
      <div className="inline-flex items-center gap-2 text-purple-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="font-semibold">30-Day Money-Back Guarantee</span>
      </div>
    </div>
  </div>
</section>
      
      {/* Contact Form - Supabase Integration */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1