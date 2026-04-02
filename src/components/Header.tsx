'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ec</span>
            </div>
            <span className="text-xl font-bold text-gray-900">edu.cloud</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/platform" className="text-gray-700 hover:text-blue-600 transition">
              Platform
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition">
              Solutions
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition">
              Resources
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 space-y-4 pt-4">
            <Link href="/platform" className="block text-gray-700 hover:text-blue-600">
              Platform
            </Link>
            <Link href="/solutions" className="block text-gray-700 hover:text-blue-600">
              Solutions
            </Link>
            <Link href="/resources" className="block text-gray-700 hover:text-blue-600">
              Resources
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-2 bg-blue-600 text-white rounded-lg text-center"
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}