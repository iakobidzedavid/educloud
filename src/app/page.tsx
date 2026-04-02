import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Measure Your Impact</h1>
              <p className="text-xl text-gray-700 mb-8">edu.cloud reveals the real-world impact of your institution's education and research through comprehensive alumni and society outcomes tracking.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/solutions" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
                  Explore Solutions
                </Link>
                <Link href="/about" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-blue-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 text-lg">Analytics Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose edu.cloud</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Comprehensive Research',
                description: 'We conduct vast online research for each individual in your alumni network, tracking career progression and achievements.'
              },
              {
                title: 'Actionable Metrics',
                description: 'Quantify impact with data on companies started, promotions received, jobs created, and venture capital raised.'
              },
              {
                title: 'Exit Events Tracking',
                description: 'Monitor mergers, acquisitions, IPOs, and other transformative exit events across your alumni base.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Demonstrate Your Institution's Impact?</h2>
          <p className="text-xl text-gray-300 mb-8">Upload your alumni spreadsheet and let us uncover the stories of success and achievement.</p>
          <Link href="/solutions" className="bg-blue-600 hover:bg-blue-700 font-semibold py-3 px-8 rounded-lg transition inline-block">
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}