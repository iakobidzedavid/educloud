import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">About edu.cloud</h1>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We empower higher education institutions to demonstrate the real-world impact of their programs. By tracking alumni outcomes and aggregating success metrics, we help universities tell the powerful story of how their education transforms lives and drives innovation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">What We Do</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              edu.cloud accepts spreadsheets of student and alumni data and conducts comprehensive online research for each individual. Our proprietary technology traces professional journeys and aggregates impact metrics including:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Companies Started:</strong> Tracking entrepreneurial ventures launched by alumni</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Promotions Received:</strong> Career advancement and leadership growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Jobs Created:</strong> Economic impact through employment generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Venture Capital Raised:</strong> Funding secured by alumni entrepreneurs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Exit Events:</strong> Mergers, acquisitions, and IPOs</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Why It Matters</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In an increasingly competitive higher education landscape, demonstrating tangible value is essential. Our research provides institutions with concrete data to showcase alumni success, support fundraising efforts, and validate the effectiveness of their educational programs.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}