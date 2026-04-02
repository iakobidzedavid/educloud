'use client';

import { ArrowRight, BarChart3, Database, Brain, Shield, Zap, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Alumni Data Import',
    description: 'Upload spreadsheets containing student and alumni names. Our system securely processes your data and prepares it for comprehensive research analysis.'
  },
  {
    icon: Brain,
    title: 'Advanced Research Engine',
    description: 'Leveraging vast online data sources, we identify career paths, job titles, companies, and professional achievements for each individual.'
  },
  {
    icon: TrendingUp,
    title: 'Career Trajectory Analysis',
    description: 'Track promotions, job transitions, and career progression. Understand how your education shaped professional growth and advancement.'
  },
  {
    icon: BarChart3,
    title: 'Impact Metrics Dashboard',
    description: 'Get real-time aggregated metrics: companies founded, jobs created, venture capital raised, and acquisition/IPO events.'
  },
  {
    icon: Shield,
    title: 'Privacy & Compliance',
    description: 'Enterprise-grade security with full compliance to FERPA, GDPR, and institutional data protection standards.'
  },
  {
    icon: Zap,
    title: 'Reporting & Insights',
    description: 'Generate comprehensive reports demonstrating institutional impact for stakeholders, donors, and accreditation bodies.'
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Powerful Features</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive tools designed to track, measure, and demonstrate the impact of your institution's education and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg border border-blue-200 p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Measure Impact?</h2>
          <p className="text-lg text-slate-600 mb-6">Start demonstrating your institution's value with edu.cloud.</p>
          <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
