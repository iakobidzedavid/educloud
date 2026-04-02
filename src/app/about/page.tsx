'use client';

import { CheckCircle2 } from 'lucide-react';

const values = [
  {
    title: 'Data-Driven',
    description: 'We believe in the power of evidence. Our research methodology is rigorous, transparent, and validated.'
  },
  {
    title: 'Privacy First',
    description: 'Your alumni data is sacred. We implement enterprise security standards and maintain strict compliance with all regulations.'
  },
  {
    title: 'Impact Focused',
    description: 'We measure what matters: career advancement, entrepreneurship, wealth creation, and societal contribution.'
  },
  {
    title: 'Partnership Driven',
    description: 'Your success is our success. We work closely with institutions to understand their unique impact stories.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About edu.cloud</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            We help higher education institutions demonstrate the transformative impact of their education and research through comprehensive alumni outcome tracking.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-4">
              Higher education creates tremendous value for society. Yet institutions often struggle to demonstrate this impact quantitatively.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              edu.cloud transforms raw alumni data into compelling impact narratives. We uncover the stories of entrepreneurship, career advancement, and societal contribution that define your institution's legacy.
            </p>
            <p className="text-lg text-slate-600">
              By providing concrete metrics—companies founded, jobs created, capital raised, exits achieved—we help you prove the value proposition of higher education to stakeholders, donors, and policymakers.
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">What We Track</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Companies Founded</strong> - Track entrepreneurship across your alumni base</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Promotions & Advancement</strong> - Measure career trajectory and leadership</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Jobs Created</strong> - Calculate economic impact through employment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Capital Raised</strong> - Aggregate venture funding and investment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700"><strong>Exit Events</strong> - Document acquisitions, IPOs, and successful exits</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose edu.cloud?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-slate-700">Higher education institutions trust edu.cloud</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">2M+</p>
              <p className="text-slate-700">Alumni profiles analyzed and tracked</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">99.9%</p>
              <p className="text-slate-700">Data accuracy and research reliability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
