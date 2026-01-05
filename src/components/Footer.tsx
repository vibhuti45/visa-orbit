import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Visa Orbit</h3>
            <p className="text-blue-200 mb-6">
              Empowering your global journey with expert visa consultancy and long-term career support.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-300 transition"><Linkedin className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-blue-300 transition"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-blue-300 transition"><Instagram className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-blue-200">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2 inline-block">Services</h4>
            <ul className="space-y-3 text-blue-200">
              <li><Link href="/services/innovator" className="hover:text-white transition">Innovator Founder</Link></li>
              <li><Link href="/services/skilled" className="hover:text-white transition">Skilled Worker</Link></li>
              <li><Link href="/services/student" className="hover:text-white transition">Student Visa</Link></li>
              <li><Link href="/services/self-sponsor" className="hover:text-white transition">Self Sponsorship</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-blue-200">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>123 Business Park,<br/>London, UK</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+44 7000 000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>contact@visaorbit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Visa Orbit. All rights reserved.</p>
          <p>
            Disclaimer: Visa Orbit is a private consultancy and is not affiliated with any government body.
            We provide advice and support, not legal immigration representation.
          </p>
        </div>
      </div>
    </footer>
  );
}