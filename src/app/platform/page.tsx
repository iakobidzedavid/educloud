import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PlatformPage() {
  const capabilities = [
    {
      title: 'Alumni Research Database',
      description: 'Comprehensive profiles of your alumni with employment history, entrepreneurial ventures, and career milestones.',
    },
    {
      title: 'Real-Time Impact Dashboard',
      description: 'Interactive dashboards tracking companies founded, capital raised, jobs created, and exit events.',
    },
    {
      title: 'Advanced Analytics',
      description: 'Segmentation by graduation year, field of study, and demographic to understand patterns in alumni success.',
    },
    {
      title: 'Custom Reporting',
      description: 'Generate reports tailored to your institution needs for fundraising, strategic planning, and communications.',
    },
    {
      title: 'Data Integration',
      description: 'Seamlessly import your existing alumni data and combine with our research for comprehensive insights.',
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with full FERPA and GDPR compliance for sensitive educational data.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            The edu.cloud Platform
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Powerful tools designed specifically for higher education institutions to track, measure, and communicate alumni impact.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}