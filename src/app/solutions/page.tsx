'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'Institutional Effectiveness',
    description: 'Demonstrate how your institution prepares students for successful careers and leadership roles.',
    use_cases: [
      'Strategic planning',
      'Accreditation documentation',
      'Board presentations',
      'Institutional effectiveness reports'
    ]
  },
  {
    title: 'Development & Fundraising',
    description: 'Showcase alumni success stories and institutional impact to donor prospects and major gift donors.',
    use_cases: [
      'Major gift campaigns',
      'Capital campaigns',
      'Donor recognition programs',
      'Fundraising event materials'
    ]
  },
  {
    title: 'Marketing & Communications',
    description: 'Showcase your institution\'s impact with compelling statistics and success stories of your alumni.',
    use_cases: [
      'Recruitment materials',
      'Annual reports',
      'Social media campaigns',
      'Website content'
    ]
  },
  {
    title: 'Strategic Planning',
    description: 'Use data-driven insights about alumni outcomes to inform curriculum development and institutional strategy.',
    use_cases: [
      'Curriculum assessment',
      'Program evaluation',
      'Competitive positioning',
      'Strategic initiatives'
    ]
  },
  {
    title: 'Alumni Engagement',
    description: 'Identify high-impact alumni for mentoring, advisory boards, and engagement initiatives.',
    use_cases: [
      'Alumni network development',
      'Mentorship programs',
      'Advisory board recruitment',
      'Industry partnerships'
    ]
  },
  {
    title: 'Reputation Management',
    description: 'Build a compelling narrative around your institution\'s role in shaping successful professionals.',
    use_cases: [
      'Media relations',
      'Rankings and reputation',
      'PR campaigns',
      'Thought leadership'
    ]
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Solutions for Every Department</h1>
          <p className="text-xl text-blue-100">edu.cloud provides customized research and insights for institutional advancement, development, marketing, and strategic planning.</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                <p className="text-gray-700 mb-6">{solution.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-3 uppercase">Use Cases</p>
                  <ul className="space-y-2">
                    {solution.use_cases.map((use_case, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span>{use_case}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Demonstrate Your Impact?</h2>
          <p className="text-lg text-gray-700 mb-8">Let us help you tell the story of your institution's transformative effect on alumni and society.</p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block">
            Schedule Your Demo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}