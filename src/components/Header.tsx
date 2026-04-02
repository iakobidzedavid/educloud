'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">ec</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline text-gray-900">edu.cloud</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-700 hover:text-blue-600 transition">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">
            How It Works
          </Link>
          <Link href="#metrics" className="text-gray-700 hover:text-blue-600 transition">
            Impact Metrics
          </Link>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link href="#features" className="block text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link href="#how-it-works" className="block text-gray-700 hover:text-blue-600">
              How It Works
            </Link>
            <Link href="#metrics" className="block text-gray-700 hover:text-blue-600">
              Impact Metrics
            </Link>
            <Link href="/contact" className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
