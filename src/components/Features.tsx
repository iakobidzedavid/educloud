export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Companies Started',
      description: 'Track how many alumni have founded successful companies and ventures from your institution.',
    },
    {
      icon: '📈',
      title: 'Career Progression',
      description: 'Measure promotions, leadership positions, and career advancement across your alumni network.',
    },
    {
      icon: '👥',
      title: 'Jobs Created',
      description: 'Aggregate the total jobs created by alumni entrepreneurs and leaders in their organizations.',
    },
    {
      icon: '💰',
      title: 'Capital Raised',
      description: 'Quantify venture capital, funding rounds, and investment success among alumni-led ventures.',
    },
    {
      icon: '🎯',
      title: 'Exit Events',
      description: 'Document IPOs, acquisitions, and mergers involving your alumni as founders or key executives.',
    },
    {
      icon: '📊',
      title: 'Aggregate Analytics',
      description: 'Generate comprehensive reports showing your institution\\'s collective impact on society and industry.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Impact Tracking
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measure the real-world outcomes and achievements of your alumni across multiple dimensions of success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg hover:bg-blue-50 transition duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}"
    },
    {
      "file": "src/components/Footer.tsx",
      "data": "import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">e</span>
              </div>
              <span className="font-bold text-white">edu.cloud</span>
            </Link>
            <p className="text-sm text-gray-400">
              Measure the impact of your education and research on alumni success and society.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/platform" className="text-gray-400 hover:text-white transition">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white transition">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition">
                  Resources
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 edu.cloud. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}"
    },
    {
      "file": "src/components/Header.tsx",
      "data": "'use client';

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
            <Link href="/platform" className="text-gray-600 hover:text-gray-900 transition">
              Platform
            </Link>
            <Link href="/solutions" className="text-gray-600 hover:text-gray-900 transition">
              Solutions
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900 transition">
              Resources
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">
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
            <Link href="/platform" className="text-gray-600 hover:text-gray-900">
              Platform
            </Link>
            <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
              Solutions
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900">
              Resources
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
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
}"
    },
    {
      "file": "src/components/Hero.tsx",
      "data": "export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Measure Your Institution's Real Impact
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform alumni data into powerful impact stories. Demonstrate how your education and research has shaped careers, created jobs, and driven innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Upload Alumni Data</p>
                  <p className="text-sm text-gray-600">Simple spreadsheet format</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Comprehensive Research</p>
                  <p className="text-sm text-gray-600">Vast online research for each person</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Impact Metrics</p>
                  <p className="text-sm text-gray-600">Aggregate professional journeys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}