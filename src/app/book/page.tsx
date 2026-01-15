'use client';

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookConsultation() {
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        "styles": {
          "branding": {
            "brandColor": "#1e3a8a" // This is your blue-900 color
          }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold font-serif text-blue-900 mb-4">
          Book Your Consultation
        </h1>
        <p className="text-lg text-gray-600">
          Select a time below. Our experts are ready to build your visa strategy.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto shadow-2xl rounded-2xl overflow-hidden bg-white border border-gray-200">
        {/* REPLACE 'calLink' BELOW WITH YOUR ACTUAL USERNAME/EVENT */}
        {/* Example: calLink="https://cal.com/visa-orbit-jmctuh/30min" */}
        <Cal 
          calLink="visa-orbit-jmctuh/30min"
          style={{width:"100%", height:"100%", overflow:"scroll"}}
          config={{layout: 'month_view'}}
        />
      </div>
    </div>
  );
}