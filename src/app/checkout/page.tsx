'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Globe, Wallet, ArrowLeft, ShieldCheck } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { QRCodeSVG } from 'qrcode.react';
import { db } from '@/lib/firebase'; // Assuming Firebase is set up here
import { collection, addDoc } from 'firebase/firestore';

// !!! IMPORTANT: REPLACE THIS WITH YOUR ACTUAL UPI ID !!!
const UPI_ID = "your_actual_upi_id_here@bank";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const planName = searchParams.get('plan') || 'Custom Plan';
  const priceGBP = searchParams.get('priceGBP') || '0.00';
  const priceINR = searchParams.get('priceINR') || '0';

  const [showUpiModal, setShowUpiModal] = useState(false);
  const upiLink = `upi://pay?pa=${UPI_ID}&pn=Visa%20Orbit&am=${priceINR}&cu=INR&tn=${encodeURIComponent(planName)}`;

  // Safety check if someone visits /checkout directly without selecting a plan
  if (priceGBP === '0.00') {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">No plan selected.</h2>
        <Link href="/skilled-worker" className="text-blue-600 hover:underline">Return to Services</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      
      {/* Left Column: Order Summary */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 h-fit">
        <h2 className="text-2xl font-bold font-serif text-gray-900 mb-6">Order Summary</h2>
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
          <span className="font-semibold text-gray-700">{planName}</span>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center text-gray-600">
            <span>Price (International)</span>
            <span>£{priceGBP} GBP</span>
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <span>Price (Domestic)</span>
            <span>₹{Number(priceINR).toLocaleString('en-IN')} INR</span>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 mt-8">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-sm text-blue-900">
            Secure checkout. Your personal and payment details are encrypted.
          </p>
        </div>
      </div>

      {/* Right Column: Payment Methods */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Select Payment Method</h3>

        {/* 1. International Option (GBP via PayPal) */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 font-bold mb-3 uppercase tracking-wide flex items-center gap-2">
            <Globe className="w-4 h-4" /> Pay via Card / PayPal
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
                    // Save to Firebase Database
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
                    window.location.href = `/success?method=paypal&name=${details.payer?.name?.given_name}`;
                  } catch (e) {
                    console.error("Firebase Error:", e);
                    window.location.href = `/success?method=paypal`;
                  }
                }
              }}
              onError={(err) => console.error("PayPal Error:", err)}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center py-4 mb-8">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium uppercase">Or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* 2. Domestic Option (INR via Direct UPI) */}
        <div>
          <p className="text-sm text-gray-500 font-bold mb-3 uppercase tracking-wide flex items-center gap-2">
            <Wallet className="w-4 h-4" /> Pay via Indian UPI
          </p>
          <button 
            onClick={() => setShowUpiModal(true)}
            className="w-full flex items-center justify-center bg-gray-900 text-white py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-md text-lg"
          >
            Pay ₹{Number(priceINR).toLocaleString('en-IN')} via UPI
          </button>
        </div>
      </div>

      {/* UPI QR Code Modal */}
      {showUpiModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowUpiModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-xl font-bold"
            >✕</button>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pay via UPI</h3>
            <p className="text-sm text-gray-500 mb-6">Scan with Google Pay, PhonePe, or Paytm</p>
            
            <div className="bg-white p-4 rounded-xl border-2 border-gray-100 flex justify-center mb-6">
              <QRCodeSVG value={upiLink} size={200} level="H" />
            </div>

            <div className="text-2xl font-bold text-gray-900 mb-6">
              ₹{Number(priceINR).toLocaleString('en-IN')}
            </div>

            <a href={upiLink} className="block w-full border-2 border-green-600 text-green-700 py-3 rounded-xl font-bold hover:bg-green-50 transition mb-3">
              Open UPI App (Mobile Only)
            </a>

            <Link href={`/success?method=upi&plan=${encodeURIComponent(planName)}`} className="block w-full bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition mb-4">
              I Have Paid
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              After paying, click <strong>"I Have Paid"</strong> to submit your 12-digit UTR/Reference number.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test", currency: "GBP" }}>
      <div className="min-h-screen bg-white pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto mb-8">
          <Link href="/skilled-worker" className="inline-flex items-center text-gray-500 hover:text-gray-900 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
        </div>
        <Suspense fallback={<div className="text-center py-20 text-gray-500 font-bold text-xl">Loading Secure Checkout...</div>}>
          <CheckoutContent />
        </Suspense>
      </div>
    </PayPalScriptProvider>
  );
}