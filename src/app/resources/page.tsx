'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const resources = [
  {
    type: 'Guide',
    title: 'Getting Started with Alumni Impact Research',
    description: 'A comprehensive guide to preparing your alumni data and understanding our research methodology.',
    icon: '📚',
  },
  {
    type: 'Case Study',
    title: 'How Research Universities Leverage Alumni Impact Data',
    description: 'Real examples of institutions using our platform to demonstrate ROI and institutional value to stakeholders.',
    icon: '📊',
  },
  {
    type: 'Webinar',
    title: 'Beyond Rankings: Alternative Metrics for Demonstrating Institutional Value',
    description: 'Discover metrics beyond traditional rankings that resonate with stakeholders and showcase your institution\'s unique impact.',
    icon: '🎥',
  },
  {
    type: 'Whitepaper',
    title: 'The Business Case for Alumni Outcome Tracking',
    description: 'An in-depth analysis of why institutions are investing in comprehensive alumni tracking and the measurable benefits.',
    icon: '📄',
  },
  {
    type: 'Template',
    title: 'Alumni Data Submission Template',
    description: 'Ready-to-use spreadsheet template formatted for optimal data processing and accuracy.',
    icon: '📋',
  },
  {
    type: 'Benchmark',
    title: 'Industry Benchmarking Report 2024',
    description: 'Compare your alumni outcomes against peer institutions and national averages across key metrics.',
    icon: '📈',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Everything you need to succeed with alumni impact research and institutional metrics.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <div className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                    {resource.type}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{resource.description}</p>
                  <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center">
                    Access Resource →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-6">
                Our team is here to support you. Contact our customer success team for personalized guidance on implementing alumni impact research at your institution.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
