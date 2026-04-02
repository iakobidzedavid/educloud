'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const solutions = [
  {
    title: 'Institutional Leadership',
    description: 'Provide board members and leadership with comprehensive data on alumni outcomes and institutional impact.',
    use_cases: [
      'Board presentations',
      'Strategic planning',
      'Donor engagement',
    ],
  },
  {
    title: 'Advancement & Development',
    description: 'Strengthen fundraising efforts by demonstrating measurable impact and alumni success metrics.',
    use_cases: [
      'Donor cultivation',
      'Campaign messaging',
      'Stewardship reports',
    ],
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
  },
  {
    title: 'Academic Programs',
    description: 'Demonstrate program effectiveness through career outcomes, entrepreneurship, and industry placement data.',
    use_cases: [
      'Program assessment',
      'Accreditation documentation',
      'Curriculum development',
      'Alumni case studies',
    ],
  },
  {
    title: 'Student Services',
    description: 'Help students and prospective students understand real career trajectories and outcomes from your programs.',
    use_cases: [
      'Career guidance',
      'Admissions counseling',
      'Alumni mentorship programs',
      'Industry partnership development',
    ],
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solutions for Every Department
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            edu.cloud provides actionable impact insights tailored to different institutional needs and stakeholders.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Use Cases:</h4>
                <ul className="space-y-2">
                  {solution.use_cases.map((useCase, useIdx) => (
                    <li key={useIdx} className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">→</span>
                      <span className="text-gray-700">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}