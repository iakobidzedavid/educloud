'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">ec</span>
          </div>
          <span className="text-xl font-bold text-gray-900">edu.cloud</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-700 hover:text-blue-600 transition">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">
            How It Works
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1"
        >
          <div className="w-6 h-0.5 bg-gray-900"></div>
          <div className="w-6 h-0.5 bg-gray-900"></div>
          <div className="w-6 h-0.5 bg-gray-900"></div>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
          <Link href="#features" className="block text-gray-700 hover:text-blue-600">
            Features
          </Link>
          <Link href="#how-it-works" className="block text-gray-700 hover:text-blue-600">
            How It Works
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600">
            About
          </Link>
          <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
