import Link from 'next/link';
import { Check, Star } from 'lucide-react';

export default function SkilledWorker() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-green-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Skilled Worker Success Hub</h1>
        <p className="text-xl text-green-200 max-w-3xl mx-auto">
          We don't just write CVs. We find you a job. Our success-based model ensures we are invested in your career.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">How We Get You Hired</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <span className="font-bold text-green-700">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">CV & LinkedIn Optimization</h3>
                  <p className="text-gray-600">We rewrite your profile to beat the ATS bots and impress UK recruiters.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <span className="font-bold text-green-700">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Targeted Job Search</h3>
                  <p className="text-gray-600">We apply to hidden jobs and leverage our network of sponsor companies.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <span className="font-bold text-green-700">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Interview Coaching</h3>
                  <p className="text-gray-600">Mock interviews to ensure you pass the behavioral and technical rounds.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-white border-2 border-green-500 rounded-2xl p-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg font-bold text-sm">POPULAR</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">The Ultimate Placement</h3>
            <p className="text-gray-500 mb-6">Full support until you get a job offer.</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between border-b pb-2">
                <span>Advance (Refundable*)</span>
                <span className="font-bold">£1,000</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Admin Fee (Upon Selection)</span>
                <span className="font-bold">£1,500</span>
              </div>
              <div className="flex justify-between border-b pb-2 text-green-700">
                <span>Final Fee (After CoS Issued)</span>
                <span className="font-bold">£3,500</span>
              </div>
              <div className="flex justify-between pt-2 font-extrabold text-xl">
                <span>Total Package</span>
                <span>£6,000</span>
              </div>
            </div>

            <Link href="/book" className="block w-full text-center bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition">
              Apply Now
            </Link>
            <p className="text-xs text-center text-gray-400 mt-4">*Advance is refundable if profile is rejected during screening.</p>
          </div>

        </div>
      </div>
    </div>
  );
}