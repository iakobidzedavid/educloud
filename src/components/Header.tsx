'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">e</span>
          </div>
          <span className="font-bold text-xl text-gray-900 hidden sm:inline">edu.cloud</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Home
          </Link>
          <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Solutions
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            About
          </Link>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/solutions" className="block text-gray-700 hover:text-blue-600 font-medium">
              Solutions
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}