'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Play, TrendingUp, Users, Globe } from 'lucide-react';

export default function Home() {
  // 1. List your local videos here
  const videos = [
    '/assets/hero1.mp4',
    '/assets/hero2.mp4'
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 2. This function runs automatically when a video finishes
  const handleVideoEnd = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length; 
    setCurrentVideoIndex(nextIndex);
  };

  // 3. Ensure the next video plays immediately after switching
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Autoplay caught:", e));
    }
  }, [currentVideoIndex]);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* =========================================
          1. HERO SECTION (Local Video Loop)
      ========================================= */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden bg-blue-900">
        
        {/* Video Player */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            loop={false} 
            muted
            autoPlay
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
          </video>
          
          {/* Dark Blue Overlay */}
          <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 shadow-lg">
            <span className="flex h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-white text-sm font-semibold tracking-wide">Accepting New Clients for 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold font-serif text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
            Navigate Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
              Global Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Expert guidance for Innovator Founder, Skilled Worker, and Student visas. We don't just file papers; we build your strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/book" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-xl transform hover:-translate-y-1">
              Start Free Assessment
            </Link>
            <Link href="/services" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center justify-center gap-3">
              <Play className="w-5 h-5 fill-current" /> Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          2. TRUST STRIP
      ========================================= */}
      <section className="bg-gray-50 py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Trusted by professionals from</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold text-gray-500 font-serif">Google</span>
            <span className="text-2xl font-bold text-gray-500 font-serif">Amazon</span>
            <span className="text-2xl font-bold text-gray-500 font-serif">Deloitte</span>
            <span className="text-2xl font-bold text-gray-500 font-serif">HSBC</span>
            <span className="text-2xl font-bold text-gray-500 font-serif">Microsoft</span>
          </div>
        </div>
      </section>

      {/* =========================================
          3. CORE SERVICES GRID
      ========================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-blue-900 mb-6">Our Core Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Select the path that matches your goals. We provide end-to-end support for every stage of your journey.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Innovator */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-blue-900 mb-4">Innovator Founder</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">For entrepreneurs ready to launch scalable businesses in the UK/Global markets.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="w-5 h-5 text-green-500"/> Business Plan Support</li>
              <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="w-5 h-5 text-green-500"/> Endorsement Strategy</li>
            </ul>
            <Link href="/services/innovator" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4"/></Link>
          </div>

          {/* Skilled Worker */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-blue-900 mb-4">Skilled Worker</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Secure sponsorships and jobs with end-to-end job search and CV support.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="w-5 h-5 text-green-500"/> CV Optimization</li>
              <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="w-5 h-5 text-green-500"/> Interview Coaching</li>
            </ul>
            <Link href="/services/skilled" className="text-purple-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4"/></Link>
          </div>

          {/* Student */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-blue-900 mb-4">Student Visas</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">From university admission to visa filing and post-study work options.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="w-5 h-5 text-green-500"/> University Selection</li>
              <li className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="w-5 h-5 text-green-500"/> SOP Writing</li>
            </ul>
            <Link href="/services/student" className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>
      </section>

      {/* =========================================
          4. VISUAL DEEP DIVE SECTIONS (Restored)
      ========================================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Feature 1: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-24">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-blue-900 mb-6">
                Turn Your Idea Into a <br/> UK Business
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Got a business idea? We help you refine your pitch, write a compliant business plan, and connect with endorsing bodies. Our success rate for Innovator Founder endorsements is market-leading.
              </p>
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-900 hover:bg-blue-800 md:text-lg transition shadow-md">
                Check Eligibility
              </Link>
            </div>
            <div className="flex-1 relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop" 
                alt="Business Meeting in London" 
                fill 
                className="object-cover hover:scale-105 transition duration-700" 
              />
            </div>
          </div>

          {/* Feature 2: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop" 
                alt="Happy Professional in the UK" 
                fill 
                className="object-cover hover:scale-105 transition duration-700" 
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-blue-900 mb-6">
                Land Your Dream Job <br/> With Sponsorship
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stop applying blindly. We optimize your CV for UK standards and help you target sponsors who are actually hiring. We provide mock interviews and direct access to recruiter networks.
              </p>
              <Link href="/services/skilled" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-900 hover:bg-blue-800 md:text-lg transition shadow-md">
                Start Job Search
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          5. STATS SECTION
      ========================================= */}
      <section className="bg-blue-900 py-20 text-white border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif mb-16">Join the Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-2">50+</div>
              <div className="text-blue-100 font-medium">Visas Approved</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-2">98%</div>
              <div className="text-blue-100 font-medium">Success Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-2">5+</div>
              <div className="text-blue-100 font-medium">Partner Companies</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-2">24/7</div>
              <div className="text-blue-100 font-medium">Support Access</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}