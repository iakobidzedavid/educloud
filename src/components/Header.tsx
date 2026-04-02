'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">e</span>
            </div>
            <span className="font-bold text-xl text-gray-900">edu.cloud</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">
              How It Works
            </Link>
            <Link href="#impact" className="text-gray-600 hover:text-gray-900 transition">
              Impact
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">
              How It Works
            </Link>
            <Link href="#impact" className="text-gray-600 hover:text-gray-900">
              Impact
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}