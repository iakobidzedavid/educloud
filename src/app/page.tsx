'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3, Zap, Users } from 'lucide-react';
import Header from '@/components/Header';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Measure the Impact of Your Education</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">Track your alumni's professional success and demonstrate institutional impact with comprehensive research-backed metrics.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solutions" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2">
              Explore Solutions <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition border border-blue-500">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What We Measure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <BarChart3 className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">Career Advancement</h3>
              <p className="text-gray-700">Track promotions, salary growth, and career progression across your alumni network.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <Zap className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">Entrepreneurship</h3>
              <p className="text-gray-700">Identify and showcase companies founded by alumni, venture capital raised, and successful exits.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <Users className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">Economic Impact</h3>
              <p className="text-gray-700">Measure jobs created, teams led, and overall economic contribution to society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Submit Data</h3>
              <p className="text-gray-600">Upload your alumni spreadsheet securely</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-gray-600">We conduct comprehensive online research for each individual</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Aggregate</h3>
              <p className="text-gray-600">Compile professional journey data across your network</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Report</h3>
              <p className="text-gray-600">Receive detailed impact metrics and insights</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}