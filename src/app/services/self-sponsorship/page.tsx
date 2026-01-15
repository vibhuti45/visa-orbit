import Link from 'next/link';
import { CheckCircle, DollarSign, Clock } from 'lucide-react';

export default function SelfSponsorship() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-purple-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Self-Sponsorship Visa</h1>
        <p className="text-xl text-purple-200 max-w-3xl mx-auto">
          The ultimate route to freedom. Create your own UK company, become the director, and sponsor your own visa.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        
        {/* Requirements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8 text-center">Eligibility Criteria</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-2">1. UK Company</h3>
              <p className="text-gray-600">You must register a UK Ltd company (we help with this).</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-2">2. Capital</h3>
              <p className="text-gray-600">A business bank account with £15,000 - £30,000 investment capital.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-2">3. UK Director</h3>
              <p className="text-gray-600">A UK resident director (friend/family) to hold the Authorising Officer role.</p>
            </div>
          </div>
        </div>

        {/* Pricing Table - COPIED FROM REFERENCE */}
        <div className="bg-white border-2 border-purple-100 rounded-2xl shadow-xl overflow-hidden mb-20">
          <div className="bg-purple-100 p-6 text-center border-b border-purple-200">
            <h2 className="text-3xl font-bold font-serif text-purple-900">Total Investment Breakdown</h2>
            <p className="text-gray-600">Transparent pricing. No hidden costs.</p>
          </div>
          
          <div className="p-8">
            <h3 className="font-bold text-xl mb-4 border-b pb-2">Step 1: Our Professional Fees</h3>
            <div className="flex justify-between items-center mb-4 text-gray-700">
              <span>Initial Advance (Setup, Compliance, Licence App)</span>
              <span className="font-bold">£4,000</span>
            </div>
            <div className="flex justify-between items-center mb-8 text-gray-700">
              <span>Success Fee (Payable after Visa Approval)</span>
              <span className="font-bold">£6,000</span>
            </div>

            <h3 className="font-bold text-xl mb-4 border-b pb-2">Step 2: Government & Third-Party Costs (Approx)</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex justify-between"><span>Company Formation</span> <span>£100</span></li>
              <li className="flex justify-between"><span>Home Office Licence Fee</span> <span>£574</span></li>
              <li className="flex justify-between"><span>CoS Assignment Fee</span> <span>£574</span></li>
              <li className="flex justify-between"><span>Immigration Skills Charge (per year)</span> <span>£364</span></li>
              <li className="flex justify-between"><span>Visa Application & Health Surcharge (3 years)</span> <span>~£4,000</span></li>
            </ul>
          </div>
          
          <div className="bg-purple-900 text-white p-6 text-center">
            <p className="text-lg font-semibold mb-4">Ready to start your business journey?</p>
            <Link href="/book" className="inline-block bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-purple-100 transition">
              Book Eligibility Call
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}