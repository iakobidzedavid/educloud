import Header from '@/components/Header';
import Footer from '@/components/Footer';

const solutions = [
  {
    title: 'Institutional Advancement',
    description: 'Empower your advancement team with comprehensive alumni outcome data to strengthen donor relationships and increase philanthropic support.',
    use_cases: [
      'Donor recognition programs',
      'Capital campaign justification',
      'Alumni engagement initiatives',
      'Prospect identification',
    ],
    icon: '🏆',
  },
  {
    title: 'Strategic Planning',
    description: 'Use data-driven insights about alumni career trajectories and outcomes to inform curriculum development and strategic initiatives.',
    use_cases: [
      'Program evaluation',
      'Curriculum optimization',
      'Industry alignment',
      'Competitive positioning',
    ],
    icon: '🎯',
  },
  {
    title: 'Marketing & Communications',
    description: 'Showcase your institution\'s impact with compelling statistics and success stories of your alumni.',
    use_cases: [
      'Recruitment materials',
      'Annual reports',
      'Prospective student engagement',
      'Brand storytelling',
    ],
    icon: '📢',
  },
  {
    title: 'Accreditation & Reporting',
    description: 'Fulfill accreditation requirements and demonstrate institutional effectiveness with comprehensive alumni outcome data.',
    use_cases: [
      'Learning outcome assessment',
      'Accreditation documentation',
      'Regulatory compliance',
      'Accountability reporting',
    ],
    icon: '✅',
  },
  {
    title: 'Enrollment Management',
    description: 'Strengthen recruitment and retention strategies by demonstrating clear career pathways and alumni success metrics.',
    use_cases: [
      'Student recruitment',
      'Retention programs',
      'Career guidance',
      'Program positioning',
    ],
    icon: '📈',
  },
  {
    title: 'Research & Analytics',
    description: 'Conduct longitudinal studies on alumni outcomes and explore correlations between institutional factors and career success.',
    use_cases: [
      'Longitudinal studies',
      'Correlation analysis',
      'Peer benchmarking',
      'Publication-ready data',
    ],
    icon: '🔬',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Solutions for Every Department</h1>
            <p className="text-xl text-blue-100">
              edu.cloud provides tailored approaches to alumni impact research for advancement, strategic planning, marketing, and more.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Use Cases:</h4>
                    <ul className="space-y-2">
                      {solution.use_cases.map((use_case, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {use_case}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How edu.cloud Integrates with Your Institution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📥</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Submit Data</h3>
                <p className="text-gray-600">Upload spreadsheets of student and alumni names</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Research</h3>
                <p className="text-gray-600">We conduct in-depth online research on each individual</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Actionable Insights</h3>
                <p className="text-gray-600">Receive aggregated impact metrics and detailed reports</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to demonstrate your institution's impact?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Let us show you how alumni impact data can transform your strategic initiatives.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request a Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}