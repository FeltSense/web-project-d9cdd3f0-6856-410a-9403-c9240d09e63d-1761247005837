'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          "Our campaign planning took weeks, and we struggled to predict which content would resonate. ROI tracking was a nightmare with scattered data across multiple platforms."
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
          "Nexus AI Labs cut our planning time by 70%. The AI predicts engagement with 94% accuracy, and unified analytics give us real-time ROI insights. Our conversion rates jumped 156% in just three months!"
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
          "Managing personalization at scale was impossible. Our team spent countless hours segmenting audiences manually, and even then, our messaging felt generic and underperformed."
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
          "Nexus AI Labs automated our entire personalization engine. We now deliver hyper-targeted content to 50,000+ segments effortlessly. Email open rates increased 89%, and our team focuses on strategy instead of manual tasks."
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
          "Our ad spend was bleeding money. We couldn't identify which channels drove real conversions, and A/B testing took forever. Budget allocation was basically guesswork."
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
          "Nexus AI Labs' predictive analytics transformed our ad strategy. We now optimize spend in real-time across 12 channels. Our cost per acquisition dropped 43%, and we're scaling campaigns with confidence backed by data."
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
          <h4 className="text-xl font-bold text-white mb-6 text-center">What's Included</h4>
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
      <'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget as HTMLFormElement;
    
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
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setFormStatus('success');
      form.reset();
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('Failed to submit form. Please try again or contact us directly.');
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Let's Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Marketing Strategy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partner with Nexus AI Labs to leverage cutting-edge AI solutions that drive measurable results for your marketing campaigns
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Get Started Today</h3>
              <p className="text-gray-300">Fill out the form and our AI marketing experts will reach out within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-200 mb-2">
                    Monthly Marketing Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="" className="bg-slate-800">Select budget range</option>
                    <option value="under-5k" className="bg-slate-800">Under $5,000</option>
                    <option value="5k-15k" className="bg-slate-800">$5,000 - $15,000</option>
                    <option value="15k-50k" className="bg-slate-800">$15,000 - $50,000</option>
                    <option value="50k-plus" className="bg-slate-800">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-gray-200 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="services"
                    name="services"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="" className="bg-slate-800">Select a service</option>
                    <option value="ai-content" className="bg-slate-800">AI Content Generation</option>
                    <option value="predictive-analytics" className="bg-slate-800">Predictive Analytics</option>
                    <option value="customer-segmentation" className="bg-slate-800">Customer Segmentation</option>
                    <option value="chatbot-automation" className="bg-slate-800">Chatbot Automation</option>
                    <option value="full-suite" className="bg-slate-800">Full AI Marketing Suite</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  placeholder="Tell us about your marketing goals and challenges..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-green-300 text-sm">Thank you! We'll contact you within 24 hours.</p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-300 text-sm">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {formStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Start Your AI Journey
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to our privacy policy and terms of service
              </p>
            </form>
          </div>

          {/* Map & Contact Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635180000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Nexus AI Labs Location"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Office Location</h4>
                    <p className="text-gray-300">350 Fifth Avenue, New York, NY 10118</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-400 mt-1">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">hello@nexusailabs.com</p>
                    <p className="text-sm text-gray-400 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="font-semibold text-white">Nexus AI Labs</span> is revolutionizing marketing with AI-powered solutions. Join over 500+ brands that trust us to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left Side - CTA/Newsletter */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            Nexus AI Labs
          </h2>
          <p className="text-slate-300 text-lg mb-6">
            Transforming marketing with cutting-edge AI solutions
          </p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
          <h3 className="text-xl font-semibold mb-3">Stay Ahead of the Curve</h3>
          <p className="text-slate-400 mb-4">
            Get the latest AI marketing insights and product updates delivered to your inbox.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        <div className="space-y-2 text-slate-400">
          <p className="flex items-center gap-2">
            <span className="text-blue-400">📧</span>
            <a href="mailto:hello@nexusailabs.com" className="hover:text-white transition-colors">
              hello@nexusailabs.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-blue-400">📞</span>
            <a href="tel:+1-555-AI-NEXUS" className="hover:text-white transition-colors">
              +1 (555) AI-NEXUS
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-blue-400">📍</span>
            <span>San Francisco, CA 94105</span>
          </p>
        </div>
      </div>

      {/* Right Side - Navigation Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Solutions</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                AI Content Generation
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Predictive Analytics
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Customer Insights
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Campaign Optimization
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Marketing Automation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Press Kit
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="mt-12 pt-8 border-t border-slate-700">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Nexus AI Labs. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}