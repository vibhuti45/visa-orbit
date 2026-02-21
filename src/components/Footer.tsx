import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Visa Orbit</h3>
            <p className="text-blue-200 mb-6 text-sm leading-relaxed">
              Empowering your global journey with expert visa consultancy and long-term career support. 
              We turn paperwork into pathways.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white text-blue-300 transition"><Linkedin className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white text-blue-300 transition"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white text-blue-300 transition"><Instagram className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-50">Quick Links</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-50">Visa Services</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li><Link href="/services/innovator" className="hover:text-white transition">Innovator Founder</Link></li>
              <li><Link href="/services/skilled" className="hover:text-white transition">Skilled Worker</Link></li>
              <li><Link href="/services/student" className="hover:text-white transition">Student Visa</Link></li>
              <li><Link href="/services/self-sponsor" className="hover:text-white transition">Self Sponsorship</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-50">Contact Us</h4>
            <ul className="space-y-4 text-blue-200 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <span>10 Downing Street,<br/>London, UK</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+44 7577 011 891</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@visaorbit.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="border-t border-blue-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Visa Orbit. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition underline-offset-4 hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/refund" className="hover:text-white transition underline-offset-4 hover:underline">
              Refund Policy
            </Link>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 text-xs text-blue-400/60 text-center max-w-3xl mx-auto">
          <p>Disclaimer: Visa Orbit is a private consultancy and is not affiliated with any government body. We provide advice and support, not legal immigration representation.</p>
        </div>
      </div>
    </footer>
  );
}