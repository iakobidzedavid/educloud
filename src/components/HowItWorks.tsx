'use client';

import { Upload, Zap, BarChart3, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Data',
    description: 'Submit a simple spreadsheet with your student and alumni names, email addresses, and graduation years.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Zap,
    title: 'Automated Research',
    description: 'Our AI-powered system conducts comprehensive online research across professional networks, LinkedIn, news sources, and public records.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: BarChart3,
    title: 'Data Aggregation',
    description: 'We compile career progression, company founding, leadership positions, acquisitions, and venture funding into meaningful metrics.',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: CheckCircle,
    title: 'Impact Dashboard',
    description: 'Receive detailed reports and interactive dashboards showcasing your alumni\'s professional impact and achievements.',
    color: 'bg-amber-100 text-amber-600'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From data submission to impact insights—our streamlined process delivers results in weeks, not months.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition h-full">
                  <div className={`${step.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <Icon size={32} />
                  </div>
                  
                  <div className="text-sm font-bold text-blue-600 mb-2">Step {index + 1}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
