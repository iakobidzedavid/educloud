'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, Briefcase, Building2, DollarSign, Award, Users } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Career Progression Tracking',
      description: 'Monitor promotions, job titles, companies, and career advancement trajectories across your entire alumni network. Track role changes, seniority progression, and industry transitions.'
    },
    {
      icon: Briefcase,
      title: 'Entrepreneurship Analytics',
      description: 'Identify alumni who have founded companies and track business metrics including funding rounds, employee counts, and business status.'
    },
    {
      icon: DollarSign,
      title: 'Venture Capital Tracking',
      description: 'Measure venture capital raised by alumni founders, including series A/B/C funding, total capital raised, and investor profiles.'
    },
    {
      icon: Building2,
      title: 'Exit Event Monitoring',
      description: 'Track successful exits including mergers, acquisitions, and IPOs. Monitor post-exit trajectories and continued impact.'
    },
    {
      icon: Award,
      title: 'Job Creation Impact',
      description: 'Quantify the economic impact through jobs created by alumni-led companies and estimate direct employment contributions.'
    },
    {
      icon: Users,
      title: 'Network Analysis',
      description: 'Visualize alumni networks, industry clusters, and cross-company relationships. Identify key connectors and influence hubs.'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Powerful Features for Impact Measurement
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          edu.cloud combines comprehensive research with advanced analytics to deliver meaningful insights about your alumni's professional achievements and societal impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <Icon className="text-blue-600 mb-4" size={40} />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h2>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Metrics We Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Metrics</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><span className="text-blue-600 mr-3">→</span>Current job title and seniority level</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">→</span>Career progression timeline</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">→</span>Industry and function distribution</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">→</span>Company reputation and size</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">→</span>Geographic distribution</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><span className="text-blue-600 mr-3">→</span>Companies founded by alumni</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">→</span>Venture capital raised</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">→</span>Jobs created through startups</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">→</span>Mergers and acquisitions</li>
                <li className="flex items-center"><span className="text-blue-600 mr-3">→</span>IPOs and public companies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FeaturesPage;