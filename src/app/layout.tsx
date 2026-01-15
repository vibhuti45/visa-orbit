import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// 1. Import the fancy fonts
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

// 2. Configure them
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair', // We give it a variable name to use in Tailwind
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Visa Orbit | Navigate Your Global Future',
  description: 'Expert visa consultancy for Innovator, Skilled Worker, and Student visas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      {/* 3. Apply the base font (jakarta) to the body */}
      <body className="bg-gray-50 text-gray-900 font-sans flex flex-col min-h-screen antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}