import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-br from-red-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About edu.cloud</h1>
          <p className="text-xl text-gray-600 mb-12">
            Helping higher education institutions demonstrate their impact through comprehensive alumni research and analysis.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                At edu.cloud, we believe that the true measure of educational excellence lies in the success and achievements of alumni. Our mission is to help higher education institutions uncover, document, and showcase the remarkable impact their graduates have on the world. By transforming data into compelling stories, we demonstrate how education drives innovation, entrepreneurship, and economic growth.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We accept spreadsheets containing the names of students and alumni, then conduct extensive online research to track their professional journeys. Using advanced research methodologies, we aggregate data on career achievements, entrepreneurial ventures, and significant life events to create a comprehensive picture of your institution's impact.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our research focuses on meaningful metrics: companies started, promotions received, jobs created, venture capital raised, and exit events such as mergers, acquisitions, and IPOs. This data tells the story of how your graduates are shaping industries and society.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Higher Education Needs edu.cloud</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In today's competitive higher education landscape, institutions need clear evidence of their value. Accreditors, donors, prospective students, and policymakers all want to know: What is the real-world impact of your education?
              </p>
              <p className="text-gray-700 leading-relaxed">
                edu.cloud transforms your alumni into measurable impact data. We help you answer critical questions: How many jobs have your graduates created? What is the venture capital raised by alumni entrepreneurs? How many companies have they founded? These metrics provide powerful evidence of educational excellence and societal contribution.
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Metrics We Track</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Entrepreneurship</h3>
                  <p className="text-gray-600">Companies founded, venture capital raised, exit events including acquisitions and IPOs</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Career Achievement</h3>
                  <p className="text-gray-600">Promotions, leadership positions, professional advancement across industries</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Economic Impact</h3>
                  <p className="text-gray-600">Jobs created, economic value generated, community contributions</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">Patents filed, industry leadership, technological advancement driven by alumni</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <ol className="space-y-4 text-gray-700">
                <li className="flex">
                  <span className="text-red-600 font-bold mr-4">1.</span>
                  <span><strong>Data Collection:</strong> You provide spreadsheets of student and alumni names</span>
                </li>
                <li className="flex">
                  <span className="text-red-600 font-bold mr-4">2.</span>
                  <span><strong>Research Execution:</strong> Our team conducts comprehensive online research for each individual</span>
                </li>
                <li className="flex">
                  <span className="text-red-600 font-bold mr-4">3.</span>
                  <span><strong>Data Aggregation:</strong> We compile professional achievements and career milestones</span>
                </li>
                <li className="flex">
                  <span className="text-red-600 font-bold mr-4">4.</span>
                  <span><strong>Analysis:</strong> We analyze metrics to quantify institutional impact</span>
                </li>
                <li className="flex">
                  <span className="text-red-600 font-bold mr-4">5.</span>
                  <span><strong>Reporting:</strong> We deliver detailed reports with visual dashboards and impact narratives</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}