import Header from '@/components/Header';
import Footer from '@/components/Footer';

const resources = [
  {
    type: 'Case Study',
    title: 'How a Top Research University Demonstrated $2B+ in Alumni Economic Impact',
    description: 'Learn how one institution used edu.cloud to quantify and communicate the remarkable career achievements of their alumni.',
    icon: '📊',
  },
  {
    type: 'Whitepaper',
    title: 'The Business Case for Alumni Impact Research',
    description: 'Understand why leading institutions are investing in comprehensive alumni outcome tracking and how it drives strategic decisions.',
    icon: '📄',
  },
  {
    type: 'Webinar',
    title: 'Beyond Rankings: Alternative Metrics for Demonstrating Institutional Value',
    description: 'Discover metrics beyond traditional rankings that resonate with stakeholders and showcase your institution\'s unique impact.',
    icon: '🎥',
  },
  {
    type: 'Guide',
    title: 'Preparing Your Data for Alumni Impact Analysis',
    description: 'A practical guide to organizing and submitting student records for comprehensive research and impact measurement.',
    icon: '📋',
  },
  {
    type: 'Report Template',
    title: 'Custom Impact Reporting Framework',
    description: 'Customizable templates for presenting alumni outcomes data to boards, donors, and prospective students.',
    icon: '🎯',
  },
  {
    type: 'Research Brief',
    title: 'Venture Capital Raised by Alumni: A Competitive Benchmark',
    description: 'Comparative analysis of VC funding outcomes across peer institutions and how to benchmark your alumni success.',
    icon: '💰',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Resources & Insights</h1>
            <p className="text-xl text-blue-100">
              Access case studies, whitepapers, and guides to help you understand and leverage alumni impact data.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {resource.type}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    View Resource →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to measure your institution's impact?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Start your alumni impact research journey with edu.cloud today.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}