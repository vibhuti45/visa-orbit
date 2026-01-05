import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6">
            Navigate Your Global Future <br/> with Confidence
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Expert guidance for Innovator Founder, Skilled Worker, and Student visas. 
            We don't just file papers; we build your strategy.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-800 transition">
              Start Free Assessment
            </Link>
            <Link href="/services" className="bg-white text-blue-900 border border-blue-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
              Explore Visas
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid (Similar to Idea Warehouse clickable boxes) */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Innovator Founder</h3>
            <p className="text-gray-600 mb-6">For entrepreneurs ready to launch scalable businesses in the UK/Global markets.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500"/> Business Plan Support</li>
              <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500"/> Endorsement Strategy</li>
            </ul>
            <Link href="/services/innovator" className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">Learn More <ArrowRight className="w-4 h-4"/></Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Skilled Worker</h3>
            <p className="text-gray-600 mb-6">Secure sponsorships and jobs with end-to-end job search and CV support.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500"/> CV Optimization</li>
              <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500"/> Interview Coaching</li>
            </ul>
            <Link href="/services/skilled" className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">Learn More <ArrowRight className="w-4 h-4"/></Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Student Visas</h3>
            <p className="text-gray-600 mb-6">From university admission to visa filing and post-study work options.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500"/> University Selection</li>
              <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500"/> SOP Writing</li>
            </ul>
            <Link href="/services/student" className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">Learn More <ArrowRight className="w-4 h-4"/></Link>
          </div>

        </div>
      </section>
    </div>
  );
}