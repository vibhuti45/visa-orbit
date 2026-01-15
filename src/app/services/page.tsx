import Link from 'next/link';
import { ArrowRight, Star, Shield, TrendingUp, GraduationCap } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Our Premium Services</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Choose the pathway that matches your goals. We provide end-to-end support from strategy to settlement.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 grid md:grid-cols-2 gap-8">
        
        {/* Service 1: Innovator */}
        <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-600 hover:shadow-2xl transition">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">Innovator Founder Visa</h2>
          <p className="text-gray-600 mb-6">
            For entrepreneurs with a unique business idea. We handle your business plan, endorsement, and visa coaching.
          </p>
          <ul className="space-y-2 mb-8 text-gray-500 text-sm">
            <li>• 3 Original Business Ideas Generated</li>
            <li>• Endorsing Body Negotiation</li>
            <li>• 3-Month Fast Track</li>
          </ul>
          <Link href="/services/innovator" className="block text-center bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            View Process & Pricing
          </Link>
        </div>

        {/* Service 2: Self-Sponsorship */}
        <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-purple-600 hover:shadow-2xl transition">
          <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">Self-Sponsorship Visa</h2>
          <p className="text-gray-600 mb-6">
            Don't have a job offer? Sponsor yourself. We set up your UK Ltd company and get you a Sponsor Licence.
          </p>
          <ul className="space-y-2 mb-8 text-gray-500 text-sm">
            <li>• No Job Offer Needed</li>
            <li>• Bring Your Family</li>
            <li>• Full Ownership & Control</li>
          </ul>
          <Link href="/services/self-sponsorship" className="block text-center bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">
            View Cost Breakdown
          </Link>
        </div>

        {/* Service 3: Skilled Worker */}
        <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-green-600 hover:shadow-2xl transition">
          <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">Skilled Worker Solutions</h2>
          <p className="text-gray-600 mb-6">
            For professionals seeking employment. We optimize your CV and connect you with licensed sponsors.
          </p>
          <ul className="space-y-2 mb-8 text-gray-500 text-sm">
            <li>• Guaranteed Interview Calls</li>
            <li>• CV & LinkedIn Optimization</li>
            <li>• "No Win, No Fee" Options</li>
          </ul>
          <Link href="/services/skilled" className="block text-center bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
            See Packages
          </Link>
        </div>

        {/* Service 4: Student */}
        <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-orange-600 hover:shadow-2xl transition">
          <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <GraduationCap className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">Student Visa Support</h2>
          <p className="text-gray-600 mb-6">
            Secure your admission in top UK universities and get post-study work support.
          </p>
          <ul className="space-y-2 mb-8 text-gray-500 text-sm">
            <li>• University Selection</li>
            <li>• SOP Writing</li>
            <li>• Post-Study Work Strategy</li>
          </ul>
          <Link href="/services/student" className="block text-center bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition">
            Start Your Studies
          </Link>
        </div>

      </div>
    </div>
  );
}