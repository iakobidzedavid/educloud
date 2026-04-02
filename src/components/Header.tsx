'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-yellow-600">
          edu.cloud
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-yellow-600 transition">
            About
          </Link>
          <Link href="/platform" className="text-gray-700 hover:text-yellow-600 transition">
            Platform
          </Link>
          <Link href="/solutions" className="text-gray-700 hover:text-yellow-600 transition">
            Solutions
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-yellow-600 transition">
            Resources
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition">
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10"
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

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link href="/about" className="text-gray-700 hover:text-yellow-600 transition">
                About
              </Link>
              <Link href="/platform" className="text-gray-700 hover:text-yellow-600 transition">
                Platform
              </Link>
              <Link href="/solutions" className="text-gray-700 hover:text-yellow-600 transition">
                Solutions
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-yellow-600 transition">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}