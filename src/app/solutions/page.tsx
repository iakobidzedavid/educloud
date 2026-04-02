import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Solutions() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Solutions</h1>
          <p className="text-xl text-blue-100">Comprehensive research and analytics designed for higher education institutions</p>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Alumni Impact Analysis',
                description: 'Comprehensive research tracking the professional achievements of your alumni, from career progression to entrepreneurial ventures.'
              },
              {
                title: 'Impact Metrics Dashboard',
                description: 'Real-time dashboards displaying key metrics including companies founded, jobs created, promotions, and venture capital raised.'
              },
              {
                title: 'Exit Event Tracking',
                description: 'Monitor significant career milestones including mergers, acquisitions, IPOs, and other transformative business events.'
              },
              {
                title: 'Custom Reporting',
                description: 'Tailored reports for fundraising, marketing, strategic planning, and stakeholder communications.'
              }
            ].map((solution, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-10 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-700 text-lg">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Simple Process</h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '1', title: 'Upload Data', desc: 'Share your alumni spreadsheet' },
                { number: '2', title: 'Research', desc: 'Comprehensive online research' },
                { number: '3', title: 'Analyze', desc: 'Data aggregation and analysis' },
                { number: '4', title: 'Report', desc: 'Actionable insights and reports' }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white font-bold text-2xl mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Key Features</h2>
          <ul className="space-y-6">
            {[
              'Advanced search and research capabilities across multiple data sources',
              'Detailed career path tracking from graduation through current roles',
              'Entrepreneurship metrics including startup founding and growth data',
              'Economic impact analysis with jobs created and revenue generated',
              'Educational network visualization showing alumni connections',
              'Customizable dashboards for different stakeholder needs',
              'Privacy-compliant data handling and security protocols',
              'Regular updates as alumni achievements are discovered'
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4 bg-white p-6 rounded-lg">
                <span className="text-blue-600 font-bold text-xl mt-1">✓</span>
                <span className="text-gray-700 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Let\'s uncover the impact of your institution\'s education and research.</p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition">
            Schedule a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}