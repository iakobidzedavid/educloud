'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          edu.cloud
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/platform" className="text-gray-700 hover:text-blue-600 transition">
            Platform
          </Link>
          <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition">
            Solutions
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-t md:hidden flex flex-col">
            <Link href="/platform" className="px-4 py-3 text-gray-700 hover:bg-gray-50">
              Platform
            </Link>
            <Link href="/solutions" className="px-4 py-3 text-gray-700 hover:bg-gray-50">
              Solutions
            </Link>
            <Link href="/about" className="px-4 py-3 text-gray-700 hover:bg-gray-50">
              About
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}