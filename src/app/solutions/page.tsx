'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SolutionsPage = () => {
  const solutions = [
    {
      title: 'Institutional Assessment',
      description: 'Measure the career outcomes and achievements of your graduates to validate educational effectiveness and institutional value.',
      use_cases: [
        'Accreditation documentation',
        'Strategic planning',
        'Program evaluation',
        'Stakeholder reporting'
      ]
    },
    {
      title: 'Advancement & Development',
      description: 'Identify major gift prospects by tracking alumni career progression, entrepreneurial ventures, and professional achievements.',
      use_cases: [
        'Prospect identification',
        'Wealth screening',
        'Donor engagement',
        'Alumni outreach campaigns'
      ]
    },
    {
      title: 'Marketing & Communications',
      description: 'Showcase your institution\'s impact with compelling statistics and success stories of your alumni.',
      use_cases: [
        'Recruitment materials',
        'Annual reports',
        'Website testimonials',
        'Marketing campaigns'
      ]
    },
    {
      title: 'Government Relations',
      description: 'Demonstrate economic impact and workforce development contributions to support funding and policy advocacy.',
      use_cases: [
        'Legislative advocacy',
        'State funding reports',
        'Economic impact studies',
        'Policy briefs'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Solutions for Higher Education
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          edu.cloud provides customized research services designed to meet the unique needs of your institution across multiple departments and strategic objectives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {solution.description}
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 mb-3">Use Cases:</h3>
                <ul className="space-y-2">
                  {solution.use_cases.map((useCase, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-3">✓</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why edu.cloud?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Research</h3>
              <p className="text-gray-600">Vast online research covering professional networks, news, and public records for each individual.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Actionable Insights</h3>
              <p className="text-gray-600">Aggregated data organized into meaningful metrics and impact indicators for strategic decision-making.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">Dedicated research team and analytical expertise to maximize the value of your alumni data.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SolutionsPage;