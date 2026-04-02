'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const solutions = [
  {
    title: 'Institutional Advancement',
    description: 'Demonstrate the transformative impact of your institution on alumni careers and society.',
    use_cases: [
      'Capital campaign support',
      'Board presentations',
      'Donor engagement materials',
      'Strategic planning',
    ],
    metrics: ['Career progression', 'Job creation', 'Venture capital raised', 'Exits (M&A, IPO)'],
  },
  {
    title: 'Accreditation & Program Review',
    description: 'Provide evidence-based outcome data for accreditation bodies and internal program assessments.',
    use_cases: [
      'Accreditation self-studies',
      'Program effectiveness reports',
      'Learning outcomes documentation',
      'Compliance reporting',
    ],
    metrics: ['Employment rates', 'Salary outcomes', 'Professional certifications', 'Graduate placements'],
  },
  {
    title: 'Marketing & Communications',
    description: 'Showcase your institution\'s impact with compelling statistics and success stories of your alumni.',
    use_cases: [
      'Recruitment materials',
      'Annual reports',
      'Website content',
      'Social media campaigns',
      'Video testimonials',
    ],
    metrics: ['Notable alumni achievements', 'Industry placements', 'Startup founders', 'Executive leaders'],
  },
  {
    title: 'Strategic Planning & Analytics',
    description: 'Use comprehensive alumni outcome data to inform institutional strategy and program development.',
    use_cases: [
      'Curriculum optimization',
      'Program benchmarking',
      'Market positioning',
      'Alumni engagement strategy',
    ],
    metrics: ['Peer comparisons', 'Trend analysis', 'Industry demand mapping', 'Alumni network value'],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions for Every Department</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Tailored approaches to demonstrate institutional impact across your organization.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{solution.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{solution.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Use Cases</h3>
                      <ul className="space-y-2">
                        {solution.use_cases.map((use_case, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span>{use_case}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics Tracked</h3>
                      <ul className="space-y-2">
                        {solution.metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-blue-600 font-bold mr-3">📊</span>
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Demonstrate Your Impact?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us help your institution tell the story of your alumni\'s success and your transformative impact.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
