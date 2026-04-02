import Header from '@/components/Header';
import Footer from '@/components/Footer';

const solutions = [
  {
    title: 'Alumni Impact Tracking',
    description: 'Automatically track and aggregate professional achievements across your entire alumni network',
    features: [
      'Real-time employment data',
      'Career progression monitoring',
      'Network analysis and connections',
      'Historical data integration'
    ]
  },
  {
    title: 'Institutional Assessment',
    description: 'Demonstrate program effectiveness and institutional value to donors, regents, and accreditors',
    features: [
      'ROI calculations',
      'Program-level impact metrics',
      'Comparative benchmarking',
      'Customizable dashboards'
    ]
  },
  {
    title: 'Capital Tracking',
    description: 'Monitor venture capital, startup activity, and major business exits within your alumni ecosystem',
    features: [
      'Startup identification',
      'Funding round tracking',
      'M&A and IPO events',
      'Economic impact analysis'
    ]
  },
  {
    title: 'Reporting & Analytics',
    description: 'Generate compelling reports and visualizations for fundraising, marketing, and strategic planning',
    features: [
      'Automated report generation',
      'Data visualization tools',
      'Multi-institution comparisons',
      'Export to any format'
    ]
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h1>
            <p className="text-xl text-gray-600">Comprehensive tools to measure and communicate your institution's impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}