import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Refund Policy | Visa Orbit',
  description: 'Refund and cancellation policy for Visa Orbit consultations and visa services.',
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-blue-900 mb-6">Refund & Cancellation Policy</h1>
          <p className="text-gray-500 mb-8 italic">Last Updated: February 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <p>
                At Visa Orbit, we are committed to providing exceptional guidance for your global journey. Due to the nature of immigration consulting and the time dedicated to reviewing your unique profile, we have established the following refund and cancellation policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">1. Initial Consultations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cancellations:</strong> If you need to cancel or reschedule your consultation, you must do so at least <strong>24 hours</strong> before the scheduled time to receive a full refund.</li>
                <li><strong>Late Cancellations & No-Shows:</strong> Cancellations made within 24 hours of the appointment, or failure to attend the meeting (no-show), are strictly <strong>non-refundable</strong>. The fee compensates our experts for the time reserved on their calendar.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">2. Visa Processing & Retained Services</h2>
              <p className="mb-3">For full end-to-end services (such as Innovator Founder business plans, Skilled Worker applications, or Student Visa processing):</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Once a service agreement is signed and work has commenced (e.g., document review, strategy building, or drafting), the service fees are <strong>non-refundable</strong>.</li>
                <li>If you choose to withdraw your application before we have submitted it to the relevant immigration authorities, you will not receive a refund for the professional hours already logged by our team.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">3. Third-Party & Government Fees</h2>
              <p>
                Please be aware that Visa Orbit's professional fees do not include government application fees. Any payments made directly to immigration authorities (such as UK Visas and Immigration), endorsing bodies, embassy fees, or healthcare surcharges (IHS) are entirely subject to the refund policies of those specific institutions. <strong>Visa Orbit cannot refund government fees under any circumstances.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">4. Application Rejections</h2>
              <p>
                While we maintain a market-leading success rate and meticulously prepare every application, the final decision rests entirely with the immigration authorities. Therefore, <strong>we do not offer refunds if your visa application is refused or rejected</strong>. We will, however, advise you on your options for administrative review, appeal, or re-application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-blue-900 mb-4">5. How to Request a Refund</h2>
              <p>
                To request a refund for a consultation (subject to the 24-hour rule), please reply directly to your booking confirmation email or contact us at:
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="font-medium text-blue-900">Email: visaorbitconsultancy@gmail.com</p>
                <p className="text-sm text-blue-800 mt-1">Please include your full name, appointment date, and the email address used to book.</p>
              </div>
              <p className="mt-4 text-sm">Approved refunds will be processed to the original method of payment within 5-10 business days.</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}