import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section - Red */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About edu.cloud</h1>
          <p className="text-xl text-red-100">Revealing the true impact of higher education through data-driven research and insights.</p>
        </div>
      </section>

      {/* Mission Section - Red */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-red-900 mb-8 text-center">Our Mission</h2>
          <div className="bg-white border-l-4 border-red-600 rounded-lg p-10 shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              edu.cloud empowers higher education institutions to demonstrate and celebrate the meaningful impact of their education and research programs on alumni success and societal benefit.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that institutions deserve clear, comprehensive evidence of how their graduates contribute to business innovation, economic growth, and positive social change. By providing sophisticated research and analytics, we help universities and colleges tell their story with data.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Red Accent */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How We Work</h2>
          <div className="space-y-8">
            {[
              {
                step: 1,
                title: 'Upload Alumni Data',
                description: 'Provide us with a spreadsheet containing your students and alumni names. Your data remains secure and confidential.'
              },
              {
                step: 2,
                title: 'Comprehensive Research',
                description: 'Our research team conducts extensive online research for each individual, tracking professional achievements, career progression, and entrepreneurial ventures.'
              },
              {
                step: 3,
                title: 'Data Aggregation',
                description: 'We compile and organize findings into meaningful career journeys, identifying patterns, achievements, and outcomes.'
              },
              {
                step: 4,
                title: 'Impact Metrics',
                description: 'Generate quantifiable metrics including companies started, promotions received, jobs created, venture capital raised, and exit events.'
              },
              {
                step: 5,
                title: 'Insights & Reporting',
                description: 'Receive detailed reports and dashboards showcasing your institution\'s impact, ready for stakeholder communication and strategic planning.'
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics - Red Theme */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-16">Metrics We Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { metric: 'Companies Started', icon: '🚀' },
              { metric: 'Promotions Received', icon: '📈' },
              { metric: 'Jobs Created', icon: '👥' },
              { metric: 'Venture Capital Raised', icon: '💰' },
              { metric: 'Mergers & Acquisitions', icon: '🤝' },
              { metric: 'IPO Events', icon: '📊' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border-2 border-red-200 rounded-lg p-8 hover:border-red-600 transition text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{item.metric}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Red Accent */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Accuracy & Rigor',
                description: 'We conduct thorough, systematic research to ensure data integrity and reliable insights for our partners.'
              },
              {
                title: 'Privacy & Security',
                description: 'Your alumni data is protected with the highest security standards. We respect privacy and comply with all regulations.'
              },
              {
                title: 'Impact Focused',
                description: 'We\'re dedicated to helping institutions understand and communicate the real-world value they create.'
              },
              {
                title: 'Continuous Innovation',
                description: 'We constantly expand our research methodologies and analytics capabilities to provide better insights.'
              }
            ].map((value, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-red-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Red */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Alumni Impact Story</h2>
          <p className="text-xl text-red-100 mb-8">Partner with edu.cloud to uncover and showcase the achievements of your graduates.</p>
          <button className="bg-white text-red-700 hover:bg-red-50 font-semibold py-3 px-8 rounded-lg transition">
            Schedule a Demo
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}