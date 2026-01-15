import Link from 'next/link';
import { Plane } from 'lucide-react'; // Icon

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Area */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-blue-900" />
              <span className="font-bold text-xl text-blue-900 tracking-tight">Visa Orbit</span>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 px-3 py-2 font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-900 px-3 py-2 font-medium">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 font-medium">About Us</Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-900 px-3 py-2 font-medium">Resources</Link>
          </div>

          {/* Call to Action Button */}
          <div>
            <Link href="/book" className="bg-blue-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800 transition">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}