import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import Impact from '@/components/Impact';
import CTA from '@/components/CTA';

function Hero() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-amber-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Measure Your Institution's Real-World Impact
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Transform alumni data into powerful impact metrics. Upload a simple spreadsheet of student names, and we conduct comprehensive research to identify companies founded, capital raised, jobs created, and transformative exit events. Demonstrate the true value of your education and research to donors, policymakers, and stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold">
                Get Started
              </button>
              <button className="border-2 border-yellow-500 text-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-50 transition font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Submit Alumni Names</p>
                  <p className="text-sm text-gray-600">Simple spreadsheet format</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Vast Online Research</p>
                  <p className="text-sm text-gray-600">Professional journey tracking</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Aggregate Impact Metrics</p>
                  <p className="text-sm text-gray-600">Companies, capital, jobs, exits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Impact />
      <CTA />
      <Footer />
    </main>
  );
}