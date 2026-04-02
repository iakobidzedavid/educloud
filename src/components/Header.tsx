'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          Platform
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            About
          </Link>
          <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Services
          </a>
          <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
            Contact
          </a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        >
          <span className={`w-6 h-0.5 bg-slate-700 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-slate-700 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-slate-700 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 px-4 py-4 border-t">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium w-full">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}