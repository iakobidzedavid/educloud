import Link from 'next/link';
import { Cloud } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <Cloud className="text-blue-600" size={32} />
          <span className="text-2xl font-bold text-gray-900">edu<span className="text-blue-600">.cloud</span></span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition font-medium">Solutions</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact</Link>
        </nav>
        
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
          Get Started
        </Link>
      </div>
    </header>
  );
}