'use client';

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  questions: string;
  date: string;
  time: string;
}

const services = [
  "Innovator Founder",
  "Skilled Worker",
  "Student Visa",
  "Self Sponsorship",
  "Other",
];

export default function BookConsultation() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    questions: "",
    date: "",
    time: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<any>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setResult(data);
    setSubmitting(false);
    setStep(3);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold font-serif text-blue-900 mb-4">
          Book Your Consultation
        </h1>
        {step === 1 && (
          <p className="text-lg text-gray-600">
            Please enter your contact details and choose a service.
          </p>
        )}
        {step === 2 && (
          <p className="text-lg text-gray-600">
            Select a preferred date and time slot for the meeting.
          </p>
        )}
        {step === 3 && result && (
          <p className="text-lg text-gray-600">
            {result.success ? (
              <>Your appointment has been booked! A meet link has been sent to your email.</>
            ) : (
              <>There was an error scheduling your appointment: {result.error}</>
            )}
          </p>
        )}
      </div>

      {step < 3 && (
        <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); setStep(step+1); }} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
          {step === 1 && (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input required name="name" value={form.name} onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input required name="phone" value={form.phone} onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Service</label>
                  <select required name="service" value={form.service} onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                    <option value="">-- Select --</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Other questions / notes</label>
                  <textarea name="questions" value={form.questions} onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows={3}/>
                </div>
              </div>
              <div className="mt-6 text-right">
                <button type="button" onClick={() => setStep(2)}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Next →
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input required type="date" name="date" value={form.date} onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <input required type="time" name="time" value={form.time} onChange={handleChange}
                    step="1800"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                  <p className="text-xs text-gray-500 mt-1">Slots are 30 minutes long.</p>
                </div>
              </div>
              <div className="mt-6 text-right">
                <button type="button" onClick={() => setStep(1)}
                  className="px-6 py-2 mr-2 border border-gray-300 rounded hover:bg-gray-100">
                  Back
                </button>
                <button type="submit" disabled={submitting}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  {submitting ? "Booking…" : "Book Appointment"}
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
}
