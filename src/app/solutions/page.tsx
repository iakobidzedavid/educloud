import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Solutions() {
  const solutions = [
    {
      title: 'Alumni Impact Research',
      description: 'Comprehensive research on your alumni cohorts to identify and verify professional achievements and outcomes.',
      metrics: ['Individual tracking', 'Career path analysis', 'Achievement verification']
    },
    {
      title: 'Institutional Analytics',
      description: 'Aggregate-level insights that demonstrate the collective impact of your institution on careers and society.',
      metrics: ['Impact dashboards', 'Trend analysis', 'Comparative reporting']
    },
    {
      title: 'Fundraising Support',
      description: 'Evidence-based impact data to strengthen donor communications and grant applications.',
      metrics: ['Impact narratives', 'Success stories', 'ROI documentation']
    },
    {
      title: 'Program Evaluation',
      description: 'Validate the effectiveness of specific degree programs, certificates, or initiatives through alumni outcome tracking.',
      metrics: ['Outcome measurement', 'Program comparison', 'Effectiveness reports']
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Solutions</h1>
          <p className="text-xl text-gray-600 mb-16">Tailored research services designed for higher education institutions</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">{solution.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2">
                  {solution.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}