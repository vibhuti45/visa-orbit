'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plane, Menu, X } from 'lucide-react'; // Added Menu and X icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 px-3 py-2 font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-900 px-3 py-2 font-medium">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 font-medium">About Us</Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-900 px-3 py-2 font-medium">Resources</Link>
          </div>

          {/* Desktop Call to Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop Button */}
            <div className="hidden md:block">
              <Link href="/book" className="bg-blue-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800 transition">
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu} 
                className="text-gray-700 hover:text-blue-900 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link href="/" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-900 hover:bg-gray-50 px-3 py-3 rounded-md font-medium">
              Home
            </Link>
            <Link href="/services" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-900 hover:bg-gray-50 px-3 py-3 rounded-md font-medium">
              Services
            </Link>
            <Link href="/about" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-900 hover:bg-gray-50 px-3 py-3 rounded-md font-medium">
              About Us
            </Link>
            <Link href="/resources" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-900 hover:bg-gray-50 px-3 py-3 rounded-md font-medium">
              Resources
            </Link>
            <Link href="/book" onClick={toggleMenu} className="block bg-blue-900 text-white px-4 py-3 rounded-md font-semibold hover:bg-blue-800 transition text-center mt-4">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}