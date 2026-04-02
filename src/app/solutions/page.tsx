'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Solutions = () => {
  const solutions = [
    {
      title: 'Fundraising & Donor Relations',
      description: 'Build a compelling case for support with concrete evidence of impact.',
      use_cases: [
        'Major gift proposals',
        'Campaign messaging',
        'Donor stewardship reports',
        'Impact demonstrations',
      ],
      icon: '💰',
    },
    {
      title: 'Enrollment & Recruitment',
      description: 'Show prospective students and families the quantified career outcomes and opportunities.',
      use_cases: [
        'Recruitment materials',
        'Campus visit presentations',
        'Program comparisons',
        'Career outcome claims',
      ],
      icon: '🎓',
    },
    {
      title: 'Marketing & Communications',
      description: 'Showcase your institution\'s impact with compelling statistics and success stories of your alumni.',
      use_cases: [
        'Recruitment materials',
        'Annual reports',
        'Website content',
        'Social media campaigns',
      ],
      icon: '📢',
    },
    {
      title: 'Institutional Planning & Strategy',
      description: 'Use data-driven insights to inform program development and strategic decisions.',
      use_cases: [
        'Program evaluation',
        'Resource allocation',
        'Strategic priorities',
        'Competitive positioning',
      ],
      icon: '📊',
    },
    {
      title: 'Accreditation & Assessment',
      description: 'Meet accreditor expectations with comprehensive outcome and impact documentation.',
      use_cases: [
        'Self-study reports',
        'Outcome assessment',
        'Impact evidence',
        'Learning outcome documentation',
      ],
      icon: '✅',
    },
    {
      title: 'Alumni Engagement',
      description: 'Deepen connections by celebrating alumni success and demonstrating how the institution contributed to their achievements.',
      use_cases: [
        'Alumni communications',
        'Reunion planning',
        'Success story curation',
        'Engagement campaigns',
      ],
      icon: '🤝',
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions for Every Department</h1>
            <p className="text-xl text-green-100 max-w-2xl">
              Discover how edu.cloud\'s alumni impact research serves your institution\'s most critical strategic initiatives.
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200 overflow-hidden"
              >
                <div className="bg-green-50 px-6 py-4 text-4xl">{solution.icon}</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{solution.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">Use Cases:</p>
                    <ul className="space-y-1">
                      {solution.use_cases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-700">
                          <span className="text-green-500 mr-2 font-bold">•</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-50 py-16 mt-8">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Demonstrate Your Impact?</h2>
            <p className="text-slate-700 mb-8 text-lg">
              Let us show you how comprehensive alumni research can transform your institutional narrative.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Solutions;