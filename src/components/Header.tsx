'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-blue-600">edu.cloud</div>
          <span className="text-xs text-gray-600 font-semibold hidden sm:inline">IMPACT RESEARCH</span>
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 hover:text-blue-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`hidden md:flex gap-8 items-center`}>
          <Link href="/features" className="text-gray-700 hover:text-blue-600 font-medium">Features</Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">How It Works</Link>
          <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 font-medium">Case Studies</Link>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
            Get Started
          </Link>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          <Link href="/features" className="block text-gray-700 hover:text-blue-600 font-medium">Features</Link>
          <Link href="/how-it-works" className="block text-gray-700 hover:text-blue-600 font-medium">How It Works</Link>
          <Link href="/case-studies" className="block text-gray-700 hover:text-blue-600 font-medium">Case Studies</Link>
          <Link href="/contact" className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium text-center">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
