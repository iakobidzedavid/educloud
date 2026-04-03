import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-br from-yellow-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 mb-12">
            Ready to measure your institution's impact? Contact us to learn more about how edu.cloud can help showcase your alumni success stories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">Send us your questions and project details</p>
              <p className="text-lg font-bold text-yellow-600 mt-4">info@edu.cloud</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Inquiry</h3>
              <p className="text-gray-600">Tell us about your institution and research needs</p>
              <p className="text-lg font-bold text-yellow-600 mt-4">Fast Response Time</p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Services</h3>
              <p className="text-gray-600">Learn about our alumni research and impact measurement</p>
              <p className="text-lg font-bold text-yellow-600 mt-4">Custom Solutions</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Institution Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                  placeholder="Your institution name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Contact Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 h-32"
                  placeholder="Tell us about your institution and research needs"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-yellow-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">How long does the research process take?</h3>
                <p className="text-gray-600">Research timelines depend on the size of your alumni database. We provide detailed project timelines during the planning phase. Typical projects range from 4-12 weeks.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">What format should our alumni data be in?</h3>
                <p className="text-gray-600">We accept spreadsheets (Excel, CSV) with alumni names and, if available, graduation years and degree programs. Minimal data is needed to get started.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can we customize the research metrics?</h3>
                <p className="text-gray-600">Absolutely. We work with your institution to define which metrics are most important. Standard metrics include companies founded, jobs created, promotions, and exits.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">How do you ensure data privacy?</h3>
                <p className="text-gray-600">We follow strict privacy protocols. All research uses publicly available information. Your alumni data is treated confidentially and never shared with third parties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}