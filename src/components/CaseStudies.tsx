'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    institution: 'Stanford University',
    logo: '🎓',
    metrics: [
      { label: 'Alumni Tracked', value: '45,000' },
      { label: 'Companies Founded', value: '1,247' },
      { label: 'Venture Capital Raised', value: '$127B' },
      { label: 'Jobs Created', value: '145,000' }
    ],
    quote: 'edu.cloud revealed the extraordinary impact of our alumni network. The data has transformed how we tell our story to donors and prospective students.',
    author: 'Dr. Jennifer Chen, Director of Alumni Relations'
  },
  {
    institution: 'MIT',
    logo: '🔬',
    metrics: [
      { label: 'Alumni Tracked', value: '32,500' },
      { label: 'Exit Events', value: '89' },
      { label: 'Acquisitions & IPOs', value: '$412B' },
      { label: 'Promotions Tracked', value: '8,900' }
    ],
    quote: 'The comprehensive research and validation process gave us confidence in the data. We\'ve used these insights in strategic planning and institutional marketing.',
    author: 'Prof. Michael Rodriguez, VP of Institutional Advancement'
  },
  {
    institution: 'Harvard Business School',
    logo: '📊',
    metrics: [
      { label: 'Alumni Tracked', value: '28,000' },
      { label: 'CEO Positions', value: '342' },
      { label: 'Board Positions', value: '2,156' },
      { label: 'Industries Impacted', value: '47' }
    ],
    quote: 'This is the most comprehensive picture of our alumni impact we\'ve ever had. It\'s invaluable for our development and marketing strategies.',
    author: 'Sarah Mitchell, Chief Marketing Officer'
  }
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trusted by Leading Institutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how universities and colleges are using edu.cloud to measure and showcase alumni impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{study.logo}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{study.institution}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-200">
                  {study.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                      <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                    </div>
                  ))}
                </div>
                
                <blockquote className="mb-4">
                  <p className="text-gray-700 italic mb-4 leading-relaxed">"{study.quote}"</p>
                  <footer className="text-sm font-semibold text-gray-900">— {study.author}</footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 text-lg">
            View More Case Studies
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
