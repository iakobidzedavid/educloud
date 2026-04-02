import Link from 'next/link';
import { Cloud } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition">
              <Cloud className="text-blue-400" size={24} />
              <span className="text-lg font-bold text-white">edu<span className="text-blue-400">.cloud</span></span>
            </Link>
            <p className="text-sm">Demonstrating the impact of education on alumni and society.</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions" className="hover:text-blue-400 transition">Solutions</Link></li>
              <li><Link href="/" className="hover:text-blue-400 transition">Features</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link href="/" className="hover:text-blue-400 transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-blue-400 transition">Terms of Service</Link></li>
              <li><Link href="/" className="hover:text-blue-400 transition">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 edu.cloud. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-blue-400 transition">Twitter</Link>
            <Link href="/" className="hover:text-blue-400 transition">LinkedIn</Link>
            <Link href="/" className="hover:text-blue-400 transition">Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}