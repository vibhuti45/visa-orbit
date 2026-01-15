import Link from 'next/link';

export default function Student() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-orange-500 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Student Visa & Admission</h1>
        <p className="text-xl text-orange-100 max-w-3xl mx-auto">
          From university selection to your first job in the UK.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mb-12">
          Most agents just want to get you into any university. We focus on your <strong>career</strong>. 
          We select courses that actually have job prospects in the UK market.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Admission Support</h3>
            <p className="text-gray-600">SOP writing, University selection, and CAS interview prep.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Post-Landing Support</h3>
            <p className="text-gray-600">Accommodation help, Part-time job search, and bank account setup.</p>
          </div>
        </div>
      </div>
    </div>
  );
}