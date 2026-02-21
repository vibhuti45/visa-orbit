import React from 'react';
import { Target, Lightbulb, Users, Globe, Shield, Star } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. WHAT WE DO (Hero Section) */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">About Visa Orbit</h1>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-blue-100 leading-relaxed font-light">
            <p>
              We specialize in securing UK Innovator Founder, Skilled Worker, and Student visas. 
              Unlike conventional services that stop at paperwork, we are committed to your long-term success.
            </p>
            <p>
              Our team provides continuous support, helping you establish and scale your business, advance your career, or pursue world-class education in the global market. We bridge the gap between your ambition and international opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE PROCESS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-serif">Our Proven Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A transparent, step-by-step methodology designed to eliminate confusion and maximize your chances of approval.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-blue-100 z-0"></div>
          
          {/* Step 1 */}
          <div className="relative z-10 text-center bg-white p-6 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-blue-200">1</div>
            <h3 className="font-bold text-xl text-blue-900 mb-3">Eligibility Strategy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">We audit your profile, identify skill gaps, and map out the exact visa route tailored to your professional or academic goals.</p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 text-center bg-white p-6 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-blue-200">2</div>
            <h3 className="font-bold text-xl text-blue-900 mb-3">Core Documentation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">From securing a Certificate of Sponsorship (CoS) for Skilled Workers to obtaining a CAS for Students, we handle the heavy lifting.</p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 text-center bg-white p-6 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-blue-200">3</div>
            <h3 className="font-bold text-xl text-blue-900 mb-3">Endorsement & Filing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">For entrepreneurs, we refine business plans to ensure they are strictly innovative, viable, and scalable for endorsing bodies before filing.</p>
          </div>

          {/* Step 4 */}
          <div className="relative z-10 text-center bg-white p-6 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-blue-200">4</div>
            <h3 className="font-bold text-xl text-blue-900 mb-3">Post-Visa Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Our commitment doesn't end at approval. We provide ongoing guidance as you land in the UK, set up your business, or start your new role.</p>
          </div>
        </div>
      </section>

{/* 3. ABOUT THE FOUNDER */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="bg-blue-900 p-12 md:w-1/3 flex flex-col justify-center items-center text-center text-white">
              
              {/* Added Next.js Image Component */}
              <Image 
                src="/ravi.jpg" 
                alt="Ravi Prakash - Founder & CEO" 
                width={128} 
                height={128} 
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-blue-100 shadow-lg"
              />
              
              <h2 className="text-3xl font-bold font-serif mb-2">Ravi Prakash</h2>
              <p className="text-blue-200 font-medium tracking-wide uppercase text-sm">Founder & CEO</p>
            </div>
            <div className="p-12 md:w-2/3">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 font-serif">Leadership Meets Innovation</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Visa Orbit was built on the belief that navigating global opportunities should be a transparent and highly structured journey. Led by Ravi, the consultancy merges deep mentorship with modern efficiency. 
                </p>
                <p>
                  With a rich background as a school principal, Ravi understands the critical importance of education, clear guidance, and long-term planning. His entrepreneurial drive—having successfully launched ventures in the agriculture and education sectors—means he knows exactly what it takes to build a business from the ground up. 
                </p>
                <p>
                  Combining this hands-on leadership experience with a strong technical background in app development and data-driven systems, Ravi ensures that Visa Orbit operates with precision, delivering a seamless experience and a deep commitment to every client's global success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-serif">Client Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here is what our global clients have to say.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex text-yellow-400 mb-4">
              <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-600 italic mb-6">"Visa Orbit transformed my confusing business idea into a fully endorsed Innovator Founder visa. Their team was there every single step of the way, even helping me prep for the endorsing body interview."</p>
            <div>
              <p className="font-bold text-blue-900">Sarah T.</p>
              <p className="text-sm text-gray-500">Innovator Founder Visa (Tech)</p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex text-yellow-400 mb-4">
              <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-600 italic mb-6">"I struggled to find a sponsored role on my own. Visa Orbit's CV optimization and interview prep helped me land a Skilled Worker visa in just 3 months. Incredibly professional team."</p>
            <div>
              <p className="font-bold text-blue-900">Rahul M.</p>
              <p className="text-sm text-gray-500">Skilled Worker Visa (Healthcare)</p>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex text-yellow-400 mb-4">
              <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-600 italic mb-6">"The guidance I received for my Student Visa and university selection was unparalleled. They made the CAS process stress-free so I could focus on moving."</p>
            <div>
              <p className="font-bold text-blue-900">Priya K.</p>
              <p className="text-sm text-gray-500">Student Visa (Masters)</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}