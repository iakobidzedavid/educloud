'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          edu.cloud
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition">
            Solutions
          </Link>
          <Link href="/features" className="text-gray-700 hover:text-blue-600 transition">
            Features
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          <Link href="/solutions" className="block text-gray-700 hover:text-blue-600">
            Solutions
          </Link>
          <Link href="/features" className="block text-gray-700 hover:text-blue-600">
            Features
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;