'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Comprehensive alumni tracking and research',
  'Real-time impact measurement dashboards',
  'Detailed reports on career outcomes',
  'Acquisition and IPO event tracking',
  'Venture capital funding insights',
  'Dedicated research team support'
];

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Measure Your Impact?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Start tracking your alumni achievements today. Get a demo from our team and discover the full potential of your institutional impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 py-8 border-y border-blue-500">
          <div className="space-y-4">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={24} className="text-blue-200 flex-shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {benefits.slice(3).map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={24} className="text-blue-200 flex-shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 text-center transition text-lg">
            Request a Demo
          </Link>
          <Link href="/how-it-works" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 text-center transition text-lg">
            Learn More
          </Link>
        </div>
        
        <p className="text-center text-blue-100 text-sm mt-8">
          Questions? Contact our team at <a href="mailto:info@edu.cloud" className="underline hover:text-white">info@edu.cloud</a>
        </p>
      </div>
    </section>
  );
}
