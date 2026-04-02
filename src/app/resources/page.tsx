'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Resources = () => {
  const resources = [
    {
      type: 'Case Study',
      title: 'How a Top Research University Doubled Alumni Engagement',
      description: 'Learn how one institution used comprehensive alumni impact research to increase donor engagement by 45% in their first year.',
      icon: '📊',
    },
    {
      type: 'Webinar',
      title: 'Beyond Rankings: Alternative Metrics for Demonstrating Institutional Value',
      description: 'Discover metrics beyond traditional rankings that resonate with stakeholders and showcase your institution\'s unique impact.',
      icon: '🎥',
    },
    {
      type: 'Guide',
      title: 'The Complete Guide to Alumni Impact Research',
      description: 'A comprehensive resource covering methodology, best practices, and how to present findings to leadership and donors.',
      icon: '📖',
    },
    {
      type: 'Data Sheet',
      title: 'Impact Metrics That Matter: What Stakeholders Really Want to See',
      description: 'Understand which metrics resonate most with different stakeholder groups—from board members to prospective students.',
      icon: '📈',
    },
    {
      type: 'Case Study',
      title: 'From Data to Strategy: Using Alumni Impact for Strategic Planning',
      description: 'See how institutions leverage alumni impact data to inform enrollment strategy, program development, and institutional positioning.',
      icon: '🎯',
    },
    {
      type: 'Article',
      title: 'The ROI of Higher Education: Making the Case with Evidence',
      description: 'Explore how to quantify and communicate the return on investment that your institution delivers to students and society.',
      icon: '💡',
    },
  ];

  const resourceTypes = ['All', 'Case Study', 'Webinar', 'Guide', 'Data Sheet', 'Article'];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Insights</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Explore case studies, guides, and best practices to maximize the impact of your alumni research and institutional storytelling.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap gap-3">
            {resourceTypes.map((type) => (
              <button
                key={type}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  type === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-slate-200"
              >
                <div className="bg-slate-50 px-6 py-4 text-2xl">{resource.icon}</div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                    {resource.type}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{resource.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{resource.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resources;