'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Target, FileText, Linkedin, Users, Briefcase, Award, Globe, Wallet } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { QRCodeSVG } from 'qrcode.react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function SkilledWorker() {
  return (
    <PayPalScriptProvider options={{ 
      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
      currency: "GBP" 
    }}>
      <div className="bg-white min-h-screen pb-20">
        
        {/* Hero Section */}
        <div className="bg-green-900 text-white py-24 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Skilled Worker Success Hub</h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto mb-8">
            The proven roadmap for international students and professionals to secure UK job offers with Tier 2 visa sponsorship—fast.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12 bg-green-800/50 py-6 rounded-2xl max-w-4xl mx-auto backdrop-blur-sm border border-green-700">
            <div>
              <div className="text-3xl font-bold text-white mb-1">10x</div>
              <div className="text-sm text-green-200 uppercase tracking-wide">More Interviews</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-green-700"></div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">&lt;1 Week</div>
              <div className="text-sm text-green-200 uppercase tracking-wide">To First Interview</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-green-700"></div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">92%</div>
              <div className="text-sm text-green-200 uppercase tracking-wide">Offer in 6 Weeks</div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-7xl mx-auto px-4 py-20 border-b border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">How We Secure Your UK Job Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We have engineered a foolproof, step-by-step system to help you bypass ATS filters and connect directly with hiring managers at Tier 2 sponsoring companies.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <Target className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">1. Target Sponsoring Employers</h3>
              <p className="text-gray-600 text-sm">Stop wasting time on non-sponsoring companies. We teach you how to identify and apply exclusively to A-rated Tier 2 sponsors.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <FileText className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">2. UK-Optimized CV Crafting</h3>
              <p className="text-gray-600 text-sm">We format your CV to strict UK hiring standards, ensuring it bypasses automated ATS filters and grabs the recruiter's attention instantly.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <Linkedin className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">3. LinkedIn Profile Domination</h3>
              <p className="text-gray-600 text-sm">We rebuild your LinkedIn presence to act as a magnet for recruiters, drastically increasing your inbound visa-sponsored job opportunities.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <Users className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">4. Master Strategic Networking</h3>
              <p className="text-gray-600 text-sm">Online applications are not enough. Learn to connect directly with decision-makers, secure referrals, and uncover hidden job markets.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <Briefcase className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">5. Targeted Application Strategy</h3>
              <p className="text-gray-600 text-sm">We replace the "blind-apply" method with a highly concentrated, precision-based application strategy that yields real callbacks.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <Award className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">6. Interview & Sponsorship Coaching</h3>
              <p className="text-gray-600 text-sm">Master the STAR method for UK interviews and learn exactly how to confidently negotiate visa sponsorship during the final rounds.</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">Choose Your Success Pathway</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">From DIY guidance to full end-to-end placement guarantees, select the support level that fits your goals.</p>
          </div>

          {/* Top Tier Packages (High Ticket) - Direct Invoice Route */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border-2 border-green-600 rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 bg-green-600 text-white px-6 py-1 rounded-bl-xl font-bold text-sm">PREMIUM SECURE</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-4">A-Rated Tech Sponsorship</h3>
              <p className="text-gray-500 mb-6 text-sm">A secure alternative to uncertain CoS arrangements. Partnering exclusively with A-rated UK sponsors for day-rate contract jobs.</p>
              <div className="text-3xl font-bold text-green-700 mb-6">£6,000</div>
              
              <div className="space-y-4 mb-8 text-sm flex-grow">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Advance Payment (Refundable*)</span>
                  <span className="font-bold text-gray-900">£1,000</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Admin Fees (Upon Selection)</span>
                  <span className="font-bold text-gray-900">£1,500</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2 text-green-800">
                  <span>Final Payment (After CoS Issued)</span>
                  <span className="font-bold">£3,500</span>
                </div>
              </div>
              <Link href="/book" className="block w-full text-center bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition">Book Consultation to Apply</Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition relative flex flex-col">
               <div className="absolute top-0 right-0 bg-gray-900 text-white px-6 py-1 rounded-bl-xl font-bold text-sm">END-TO-END</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-4">Tier-2 Visa Support Program</h3>
              <p className="text-gray-500 mb-6 text-sm">A comprehensive step-by-step Tier 2 visa program offering top-tier career support at a highly competitive structure.</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">£5,985 <span className="text-lg text-gray-500 font-normal">+£500/yr</span></div>
              
              <div className="space-y-4 mb-8 text-sm flex-grow">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Registration & CV (Week 1)</span>
                  <span className="font-bold text-gray-900">£995</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Active Job Search Services</span>
                  <span className="font-bold text-gray-900">£1,995</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">ILR Support (per yr for 4 yrs)</span>
                  <span className="font-bold text-gray-900">£500</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2 text-green-800">
                  <span>Success Fee (After Job Offer)</span>
                  <span className="font-bold">£2,995</span>
                </div>
              </div>
              <Link href="/book" className="block w-full text-center bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition">Book Consultation to Apply</Link>
            </div>
          </div>

          {/* Coaching & Resources Packages with Dual Checkout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col">
              <h3 className="font-bold text-lg text-gray-900">Essential Search Pack</h3>
              <div className="text-2xl font-bold text-green-700 my-4">£49</div>
              <p className="text-sm text-gray-600 mb-6">Perfect for DIY applicants needing expert strategic guidance.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600 flex-grow">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 5 Career Strategy eBooks</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 1-Hour Expert Q&A Session</li>
              </ul>
              <CheckoutButton planName="Essential Search Pack" priceGBP="49.00" priceINR="5150" />
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col">
              <h3 className="font-bold text-lg text-gray-900">Coaching Lite</h3>
              <div className="text-2xl font-bold text-green-700 my-4">£99</div>
              <p className="text-sm text-gray-600 mb-6">Tailored prep best suited for current PSW holders.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600 flex-grow">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 1-on-1 Assessment Call</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> CV & LinkedIn Review</li>
              </ul>
              <CheckoutButton planName="Coaching Lite" priceGBP="99.00" priceINR="10400" />
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col">
              <h3 className="font-bold text-lg text-gray-900">Starter Plan</h3>
              <div className="text-2xl font-bold text-green-700 my-4">£400</div>
              <p className="text-sm text-gray-600 mb-6">Designed specifically to help you start landing real interviews.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600 flex-grow">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 1:1 Strategy Session</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 4-Week Unlimited Support</li>
              </ul>
              <CheckoutButton planName="Starter Plan" priceGBP="400.00" priceINR="42000" />
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-green-600 flex flex-col shadow-md relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full font-bold text-xs whitespace-nowrap">BEST SELLER</div>
              <h3 className="font-bold text-lg text-gray-900 mt-2">Ultimate Plan</h3>
              <div className="text-2xl font-bold text-green-700 my-4">£850</div>
              <p className="text-sm text-gray-600 mb-6">End-to-end coaching designed to turn interviews into job offers.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600 flex-grow">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 1:1 Interview Prep Coaching</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 6-Months Unlimited Support</li>
              </ul>
              <CheckoutButton planName="Ultimate Plan" priceGBP="850.00" priceINR="89250" />
            </div>

          </div>
          
        </div>
      </div>
    </PayPalScriptProvider>
  );
}

// ==========================================
// DUAL CHECKOUT BUTTON COMPONENT (WITH QR)
// ==========================================
const CheckoutButton = ({ planName, priceGBP, priceINR }: { planName: string; priceGBP: string; priceINR: string }) => {
  const [showUpiModal, setShowUpiModal] = useState(false);
  
  // !!! IMPORTANT: REPLACE THIS WITH YOUR ACTUAL UPI ID !!!
  const upiId = "vibhutimayank@okicici"; 
  
  // Generates the standard NPCI-compliant UPI Intent string
  const upiLink = `upi://pay?pa=${upiId}&pn=Visa%20Orbit&am=${priceINR}&cu=INR&tn=${encodeURIComponent(planName)}`;

  return (
    <div className="mt-auto pt-6 border-t border-gray-200 flex flex-col gap-4 relative z-0">
      
      {/* 1. International Option (GBP via PayPal) */}
      <div>
        <p className="text-xs text-gray-500 font-bold mb-2 uppercase tracking-wide flex items-center gap-1">
          <Globe className="w-3 h-3" /> International
        </p>
        <div className="relative z-0">
          <PayPalButtons 
            style={{ layout: "vertical", shape: "rect", color: "blue", label: "pay", height: 40 }}
            createOrder={(data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [{
                  description: `Visa Orbit - ${planName}`,
                  amount: { currency_code: "GBP", value: priceGBP },
                }],
              });
            }}
            onApprove={async (data, actions) => {
              if (actions.order) {
                const details = await actions.order.capture();
                
                try {
                  // 1. Save to Firebase Database
                  await addDoc(collection(db, "payments"), {
                    name: details.payer?.name?.given_name + ' ' + (details.payer?.name?.surname || ''),
                    email: details.payer?.email_address,
                    amount: priceGBP,
                    currency: "GBP",
                    plan: planName,
                    method: "PayPal",
                    orderId: details.id,
                    status: "Completed",
                    timestamp: new Date()
                  });
                  
                  // 2. Redirect to Success Page
                  window.location.href = `/success?method=paypal&name=${details.payer?.name?.given_name}`;
                } catch (e) {
                  console.error("Error adding document: ", e);
                  window.location.href = '/success'; // Redirect anyway so they don't panic
                }
              }
            }}
            onError={(err) => {
              console.error("PayPal Error:", err);
            }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="relative flex items-center py-1">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink-0 mx-3 text-gray-400 text-xs font-medium uppercase">Or</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      {/* 2. Domestic Option (INR via Direct UPI) */}
      <div>
        <p className="text-xs text-gray-500 font-bold mb-2 uppercase tracking-wide flex items-center gap-1">
          <Wallet className="w-3 h-3" /> India Domestic
        </p>
        <button 
          onClick={() => setShowUpiModal(true)}
          className="w-full flex items-center justify-center bg-gray-900 text-white py-2.5 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors shadow-sm"
        >
          Pay ₹{Number(priceINR).toLocaleString('en-IN')} via UPI
        </button>
      </div>

    {/* UPI QR Code Modal */}
      {showUpiModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            <button 
              onClick={() => setShowUpiModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-xl font-bold"
            >
              ✕
            </button>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pay via UPI</h3>
            <p className="text-sm text-gray-500 mb-6">Scan with Google Pay, PhonePe, or Paytm</p>
            
            {/* The Dynamic QR Code */}
            <div className="bg-white p-4 rounded-xl border-2 border-gray-100 flex justify-center mb-6">
              <QRCodeSVG value={upiLink} size={200} level="H" />
            </div>

            <div className="text-2xl font-bold text-gray-900 mb-6">
              ₹{Number(priceINR).toLocaleString('en-IN')}
            </div>

            {/* Fallback link for mobile users who tapped the button instead of scanning */}
            <a 
              href={upiLink}
              className="block w-full border-2 border-green-600 text-green-700 py-3 rounded-xl font-bold hover:bg-green-50 transition mb-3"
            >
              Open UPI App (Mobile Only)
            </a>

            {/* NEW: Redirect to Success Page to capture Firebase data */}
            <Link 
              href={`/success?method=upi&plan=${encodeURIComponent(planName)}`}
              className="block w-full bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition mb-4"
            >
              I Have Paid
            </Link>
            
            <p className="text-xs text-gray-400 leading-relaxed">
              After paying, click <strong>"I Have Paid"</strong> to submit your 12-digit UTR/Reference number and complete your enrollment.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};