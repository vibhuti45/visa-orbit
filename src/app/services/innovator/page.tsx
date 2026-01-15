import Link from 'next/link';

export default function Innovator() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-blue-600 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Innovator Founder Visa</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Fast-track your endorsement. We help you build a viable, scalable, and innovative business in the UK.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-12">
          
          <section>
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">The Process</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li><strong>Idea Generation:</strong> We develop 3 original business concepts tailored to your background.</li>
                <li><strong>Business Plan:</strong> Our team writes a comprehensive, endorsing-body compliant plan (10-11 days).</li>
                <li><strong>Financials:</strong> Detailed 3-year financial projections and viable scaling strategy.</li>
                <li><strong>Endorsement:</strong> We guide you through the interview and application with the Endorsing Body.</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">Pricing Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-blue-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Accelerator Program</h3>
                <p className="text-4xl font-bold mb-4">£499</p>
                <p className="text-gray-600 mb-4">8-week intensive course to prepare your own application.</p>
                <Link href="/book" className="text-blue-600 font-bold hover:underline">Book Details &rarr;</Link>
              </div>
              <div className="border border-blue-600 bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Full Done-For-You</h3>
                <p className="text-4xl font-bold mb-4">Custom Quote</p>
                <p className="text-gray-600 mb-4">Complete handling of business plan, financials, and endorsement.</p>
                <Link href="/book" className="text-blue-600 font-bold hover:underline">Get a Quote &rarr;</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}