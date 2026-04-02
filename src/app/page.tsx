import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Welcome to Our Platform
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Discover innovative solutions that transform your business and drive meaningful growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:border-slate-400 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'Cutting-edge technology and forward-thinking solutions tailored to your needs.'
                },
                {
                  title: 'Reliability',
                  description: 'Trusted by thousands of businesses worldwide with 99.9% uptime guarantee.'
                },
                {
                  title: 'Support',
                  description: 'Dedicated customer support team available 24/7 to assist your journey.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">Join thousands of satisfied customers and transform your business today.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Sign Up Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}