import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">About edu.cloud</h1>
            <p className="text-xl opacity-90">Transforming how institutions measure and demonstrate educational impact</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-16 px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At edu.cloud, we believe higher education institutions deserve tools to showcase the real-world impact of their programs. We help universities and colleges transform alumni data into compelling evidence of institutional success—demonstrating how education creates economic opportunity and societal benefit.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What We Do</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We provide comprehensive research services that turn your student and alumni rosters into powerful impact narratives. Our platform accepts spreadsheets of names and conducts extensive online research to track professional journeys, identify career progression, and aggregate meaningful metrics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Data Collection</h3>
                <p className="text-gray-700">We conduct thorough online research on each individual to build comprehensive professional profiles</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Impact Metrics</h3>
                <p className="text-gray-700">We aggregate data on companies founded, promotions, jobs created, and capital raised</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Exit Events</h3>
                <p className="text-gray-700">We track significant career milestones including mergers, acquisitions, and IPOs</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Reporting</h3>
                <p className="text-gray-700">We deliver aggregated insights that demonstrate institutional value and alumni success</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why edu.cloud</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <span><strong>Rigorous Research:</strong> We go beyond what institutions can access, finding hidden career achievements across platforms and public records</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <span><strong>Meaningful Metrics:</strong> We focus on outcomes that matter—entrepreneurship, advancement, impact, and significance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <span><strong>Aggregated Insights:</strong> Our reports show institutional impact through cohort-level analysis and trend identification</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-4">✓</span>
                <span><strong>Trusted by Leaders:</strong> Universities trust us to provide credible evidence of educational value</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
