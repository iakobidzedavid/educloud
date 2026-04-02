'use client';

import { FileText, Search, BarChart3, Zap, Lock, Users } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Simple Spreadsheet Upload',
    description: 'Submit a spreadsheet of student and alumni names. We handle the rest with our proprietary research process.'
  },
  {
    icon: Search,
    title: 'Comprehensive Online Research',
    description: 'Our team conducts vast online research across professional networks, news sources, and public records for each individual.'
  },
  {
    icon: BarChart3,
    title: 'Aggregated Impact Metrics',
    description: 'Track companies founded, promotions received, jobs created, venture capital raised, and exit events.'
  },
  {
    icon: Zap,
    title: 'Real-Time Dashboard',
    description: 'Access interactive dashboards showing alumni career trajectories and professional achievements in real-time.'
  },
  {
    icon: Lock,
    title: 'Data Privacy & Security',
    description: 'Your alumni data is protected with enterprise-grade security and full compliance with privacy regulations.'
  },
  {
    icon: Users,
    title: 'Expert Analysis Team',
    description: 'Dedicated researchers verify and analyze data to ensure accuracy and meaningful insights about your alumni network.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How edu.cloud Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple yet powerful platform designed specifically for higher education institutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 hover:shadow-lg transition border border-gray-200">
                <div className="bg-blue-600 text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
