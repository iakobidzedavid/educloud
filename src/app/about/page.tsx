'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          About edu.cloud
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          We help higher education institutions demonstrate the real, measurable impact their education and research has on alumni careers and society at large.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              edu.cloud exists to bridge the visibility gap between higher education and real-world impact. Universities invest substantially in their students' educations, yet they often lack comprehensive data on career outcomes and societal contributions.
            </p>
            <p className="text-gray-600">
              By providing research-backed alumni impact data, we enable institutions to demonstrate their value, make strategic decisions, and celebrate their graduates' achievements.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-gray-600 mb-4">
              We accept spreadsheets of student and alumni names from your institution. Our research team then conducts vast online research for each individual, gathering data from professional networks, news sources, company records, and public databases.
            </p>
            <p className="text-gray-600">
              We aggregate this data into meaningful metrics demonstrating institutional impact: companies founded, promotions received, jobs created, venture capital raised, and major exit events.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-lg mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Higher Education Institutions Choose edu.cloud</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Data</h3>
              <p className="text-gray-600">
                We don't rely on surveys or self-reported outcomes. Our research team uses extensive online sources to build accurate, verifiable career profiles for your alumni.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Actionable Insights</h3>
              <p className="text-gray-600">
                Raw data becomes strategic intelligence. We organize findings into clear metrics and visualizations that support institutional decision-making across departments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy & Compliance</h3>
              <p className="text-gray-600">
                We handle alumni data responsibly and comply with all privacy regulations. Your institution retains control of your data throughout the process.
              </p>
            </div>
          </div>
        </div>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Measure Impact?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how edu.cloud can help your institution demonstrate the value and impact of your education.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Schedule a Demo
          </button>
        </section>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;