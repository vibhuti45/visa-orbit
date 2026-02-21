import Link from 'next/link';
import { Briefcase, MapPin, Clock, ArrowRight, Star, Users, Globe } from 'lucide-react';

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: "Immigration Case Worker",
      type: "Full-time",
      location: "Remote (UK/India)",
      department: "Consulting",
      description: "Manage end-to-end visa applications, specifically focusing on UK Skilled Worker and Innovator Founder routes. You will be responsible for reviewing documents, liaising with clients, and ensuring compliance with UKVI guidelines.",
      requirements: [
        "Minimum 2 years experience with UK immigration processing.",
        "Strong attention to detail and legal documentation.",
        "Excellent written and verbal communication skills."
      ]
    },
    {
      id: 2,
      title: "Client Success Manager",
      type: "Full-time",
      location: "Remote",
      department: "Operations",
      description: "Act as the primary point of contact for our clients once they sign up. You will guide them through our onboarding process, schedule their expert consultations, and ensure a premium, stress-free experience.",
      requirements: [
        "Experience in customer success, account management, or hospitality.",
        "High empathy and ability to manage anxious clients gracefully.",
        "Proficiency with CRM software and Google Workspace."
      ]
    },
    {
      id: 3,
      title: "Digital Marketing & Content Intern",
      type: "Internship (3-6 Months)",
      location: "Remote",
      department: "Marketing",
      description: "Help us demystify complex visa processes! You will create engaging content for LinkedIn, write SEO-optimized blog posts, and assist in running our 'Success Hub' webinars.",
      requirements: [
        "Strong copywriting skills and a creative mindset.",
        "Familiarity with Canva, LinkedIn, and basic SEO principles.",
        "A passion for global mobility and helping international students."
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Join Visa Orbit</h1>
          <p className="text-xl text-blue-200 leading-relaxed mb-8">
            Help ambitious professionals, entrepreneurs, and students navigate their global journeys. We are building the most trusted visa consultancy, and we need your expertise.
          </p>
          <div className="flex justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2"><Globe className="w-5 h-5" /> Remote-First</div>
            <div className="flex items-center gap-2"><Users className="w-5 h-5" /> Global Team</div>
            <div className="flex items-center gap-2"><Star className="w-5 h-5" /> High Impact</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">Open Positions</h2>
          <p className="text-gray-600">Find your next role and help us change lives.</p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 group">
              
              {/* Job Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                      job.type === 'Full-time' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {job.type}
                    </span>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{job.department}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">{job.title}</h3>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" /> Flexible Hours
                  </div>
                </div>
              </div>

              {/* Job Description & Requirements */}
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed mb-6">{job.description}</p>
                <h4 className="font-semibold text-gray-900 mb-3">What we're looking for:</h4>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <div className="border-t border-gray-100 pt-6 mt-2">
                <a 
                  href="mailto:careers@visaorbit.com" 
                  className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  Apply via Email
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-gray-400 mt-3">
                  Please include your CV and a brief cover letter mentioning the role in the subject line.
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}