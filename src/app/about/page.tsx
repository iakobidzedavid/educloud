import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            About edu.cloud
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            We're on a mission to help higher education institutions demonstrate their real-world impact on alumni careers and society.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                edu.cloud empowers higher education institutions to tell the complete story of their impact. By conducting comprehensive research on alumni professional journeys, we aggregate the metrics that matter: companies founded, capital raised, jobs created, career advancement, and transformative exit events.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem We Solve</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Most institutions struggle to quantify the long-term impact of their education. Alumni data is scattered across LinkedIn, company databases, news archives, and private sources. Building this picture requires extensive manual research. edu.cloud automates this process at scale, turning raw data into actionable insights that demonstrate institutional value to donors, policymakers, prospective students, and the broader community.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We combine advanced research methodologies with data science to create comprehensive profiles of your alumni. Starting with a simple spreadsheet of names, our team conducts detailed online research to identify professional achievements, entrepreneurial ventures, and career outcomes. We then aggregate this data to calculate metrics like total venture capital raised, jobs created, companies founded, and major exit events.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The result is a powerful dashboard and reporting suite that transforms raw professional data into compelling narratives of institutional impact.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Institutions Choose edu.cloud</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-4 text-xl">&#x2713;</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comprehensive Research</h3>
                    <p className="text-gray-600">We go beyond LinkedIn to identify all significant alumni achievements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-4 text-xl">&#x2713;</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Data-Driven Storytelling</h3>
                    <p className="text-gray-600">Turn metrics into narratives that resonate with donors and stakeholders.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-4 text-xl">&#x2713;</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Scalable Solutions</h3>
                    <p className="text-gray-600">Handle portfolios from hundreds to millions of alumni efficiently.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
