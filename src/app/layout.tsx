import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // You will create this next

export const metadata = {
  title: 'Visa Orbit | Navigate Your Global Future',
  description: 'Expert visa consultancy for Innovator, Skilled Worker, and Student visas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        {/* <Footer /> Uncomment this after creating Footer.tsx */}
      </body>
    </html>
  );
}