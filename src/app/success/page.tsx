'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

function SuccessContent() {
  const searchParams = useSearchParams();
  const method = searchParams.get('method');
  const name = searchParams.get('name') || 'Client';
  const plan = searchParams.get('plan') || 'your package';

  // State for the UPI Verification Form
  const [upiData, setUpiData] = useState({ name: '', email: '', utr: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUpiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "payments"), {
        ...upiData,
        plan: plan,
        method: "UPI",
        status: "Pending Verification",
        timestamp: new Date()
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error saving UPI data", error);
      alert("Failed to submit. Please contact us on WhatsApp.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white max-w-xl w-full rounded-2xl shadow-xl p-8 md:p-12 text-center border-t-4 border-green-500">
      
      <div className="flex justify-center mb-6">
        <div className="bg-green-100 p-4 rounded-full">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
      </div>

      <h1 className="text-3xl font-bold font-serif text-gray-900 mb-2">
        {method === 'upi' && !submitted ? "Payment Initiated!" : "Payment Successful!"}
      </h1>
      
      {method === 'paypal' && (
        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you, <span className="font-bold text-gray-900">{name}</span>. Your payment has been securely processed. Our Client Success team will email your onboarding package within 24 hours.
        </p>
      )}

      {/* UPI Verification Form */}
      {method === 'upi' && !submitted && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8 text-left">
          <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> Verify Your UPI Payment
          </h3>
          <p className="text-sm text-blue-800 mb-4">
            Since you paid via UPI, please enter your details and the 12-digit UTR/Reference Number from your bank app so we can match your payment.
          </p>
          <form onSubmit={handleUpiSubmit} className="space-y-4">
            <input required type="text" placeholder="Full Name" 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-blue-500"
              onChange={(e) => setUpiData({...upiData, name: e.target.value})} />
            <input required type="email" placeholder="Email Address" 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-blue-500"
              onChange={(e) => setUpiData({...upiData, email: e.target.value})} />
            <input required type="text" placeholder="12-Digit UTR / Ref Number" 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-blue-500 font-mono"
              onChange={(e) => setUpiData({...upiData, utr: e.target.value})} />
            <button disabled={isSubmitting} type="submit" 
              className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition">
              {isSubmitting ? "Verifying..." : "Verify Payment"}
            </button>
          </form>
        </div>
      )}

      {(submitted || (!method && !submitted)) && (
         <p className="text-gray-600 mb-8 leading-relaxed">
          Your details have been securely saved. Our Client Success team will email you shortly to begin the process.
         </p>
      )}

      <Link href="/" className="inline-flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
        Return to Homepage <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-20">
      {/* Suspense is required by Next.js when using useSearchParams in App Router */}
      <Suspense fallback={<div className="text-gray-500">Loading your secure checkout...</div>}>
        <SuccessContent />
      </Suspense>
    </div>
  );
}