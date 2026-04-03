import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-br from-red-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            edu.cloud provides comprehensive research and impact measurement services designed specifically for higher education institutions.
          </p>

          <div className="space-y-12">
            <div className="border-l-4 border-red-500 pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Data Research</h2>
              <p className="text-gray-600 mb-4">
                Submit spreadsheets containing names of your students and alumni. Our research team conducts extensive online investigation to track and document their professional journeys, career progression, and entrepreneurial ventures.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Comprehensive online research for each individual</li>
                <li>Professional background verification</li>
                <li>Career history tracking</li>
                <li>Entrepreneurial venture identification</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact Metrics Analysis</h2>
              <p className="text-gray-600 mb-4">
                We aggregate and analyze key impact metrics that demonstrate the real-world success and influence of your institution's graduates.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Companies started and growth metrics</li>
                <li>Career promotions and advancement</li>
                <li>Jobs created by your alumni</li>
                <li>Venture capital raised</li>
                <li>Exit events: mergers, acquisitions, and IPOs</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact Reporting</h2>
              <p className="text-gray-600 mb-4">
                Receive detailed, customized reports that showcase your institution's contribution to economic development, innovation, and society through the achievements of your alumni.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Comprehensive data aggregation</li>
                <li>Visual impact dashboards</li>
                <li>Narrative impact stories</li>
                <li>Institutional benchmarking</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Research Solutions</h2>
              <p className="text-gray-600 mb-4">
                Need something specific? We offer tailored research services to meet your institution's unique needs and goals.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Targeted alumni cohort analysis</li>
                <li>Industry-specific tracking</li>
                <li>Geographic impact mapping</li>
                <li>Long-term longitudinal studies</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose edu.cloud?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">+</span>
                <span>Specialized expertise in higher education impact measurement</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">+</span>
                <span>Comprehensive research methodology backed by years of experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">+</span>
                <span>Aggregated data that demonstrates institutional value</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">+</span>
                <span>Compelling narratives that showcase your education's real impact</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}