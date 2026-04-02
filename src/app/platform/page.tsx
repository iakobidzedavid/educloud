import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Platform() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Platform</h1>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl">
            edu.cloud's intelligent research platform combines advanced data aggregation, professional network analysis, and outcome tracking to deliver comprehensive institutional impact metrics.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Upload & Processing</h2>
              <p className="text-gray-700 mb-4">
                Simply upload spreadsheets containing student and alumni names. Our system automatically processes the data and initiates comprehensive online research for each individual.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Multi-format file support (CSV, Excel, etc.)</li>
                <li>✓ Batch processing for large datasets</li>
                <li>✓ Real-time progress tracking</li>
                <li>✓ Duplicate detection and deduplication</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Research & Aggregation</h2>
              <p className="text-gray-700 mb-4">
                Our proprietary research engine identifies professional profiles across global databases and social networks, creating a complete picture of each alumnus's career trajectory.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Multi-database professional profile matching</li>
                <li>✓ Global coverage across 150+ countries</li>
                <li>✓ Verified data from official sources</li>
                <li>✓ Continuous profile updates</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact Metrics Tracked</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">🚀 Entrepreneurship</h3>
                <p className="text-gray-700">Companies founded, startup funding rounds, and successful exits (acquisitions, IPOs).</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">💼 Career Advancement</h3>
                <p className="text-gray-700">Job titles, promotions, industry transitions, and leadership positions achieved.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">💰 Economic Impact</h3>
                <p className="text-gray-700">Venture capital raised, jobs created, and salaries attributed to institutional education.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard & Reporting</h2>
            <p className="text-gray-700 mb-6">
              Access intuitive dashboards that visualize your institution's impact through interactive charts, trend analysis, and customizable reports for different stakeholder audiences.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">For Leadership</h3>
                <p className="text-sm text-gray-700">Executive summaries highlighting institutional ROI and strategic impact metrics.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">For Fundraising</h3>
                <p className="text-sm text-gray-700">Detailed alumni success stories and economic impact data for donor engagement.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">For Accreditation</h3>
                <p className="text-sm text-gray-700">Comprehensive outcome data aligned with accreditation requirements and standards.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">For Marketing</h3>
                <p className="text-sm text-gray-700">Compelling success metrics and alumni achievement highlights for recruitment materials.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}"
    },
    {
      "file": "src/app/solutions/page.tsx",
      "data": "import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Solutions() {
  const solutions = [
    {
      title: 'Research Universities',
      description: 'Demonstrate the transformational impact of advanced education and research on industry innovation, entrepreneurship, and scientific breakthroughs.',
      metrics: ['Startup Formation Rate', 'VC Funding per Graduate', 'Patent Filings', 'Faculty Spinouts']
    },
    {
      title: 'Liberal Arts Colleges',
      description: 'Showcase how your institution develops well-rounded leaders across diverse industries and sectors, with emphasis on career trajectory and leadership roles.',
      metrics: ['Leadership Positions', 'Career Diversity', 'Industry Distribution', 'Professional Network Size']
    },
    {
      title: 'Business Schools',
      description: 'Highlight MBA impact through comprehensive career advancement metrics and economic contribution tracking across alumni cohorts.',
      metrics: ['Salary Progression', 'Executive Promotions', 'Entrepreneurial Ventures', 'Industry Leadership']
    },
    {
      title: 'Engineering Programs',
      description: 'Measure the economic and technological impact of engineering graduates through startup formation, innovation metrics, and industry advancement.',
      metrics: ['Technology Startups', 'Patent Development', 'Product Innovations', 'Job Creation']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Solutions for Every Institution</h1>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl">
            edu.cloud provides tailored solutions for diverse educational institutions, helping each demonstrate their unique impact and value proposition to students, donors, and society.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h2>
                <p className="text-gray-700 mb-6">{solution.description}</p>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Key Metrics:</p>
                  <ul className="space-y-2">
                    {solution.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-gray-700">• {metric}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-lg mb-20">
            <h2 className="text-3xl font-bold mb-6">Why edu.cloud?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Comprehensive Research</h3>
                <p className="opacity-90">We don't just collect data—we actively research each individual across multiple professional databases, social networks, and official sources to build complete career profiles.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Proven Accuracy</h3>
                <p className="opacity-90">Our research methodology has been validated across thousands of institutions with accuracy rates exceeding 92% for professional profile matching and career outcome verification.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Actionable Insights</h3>
                <p className="opacity-90">Move beyond raw data. Our analytics engine translates alumni outcomes into strategic insights that drive institutional decision-making and stakeholder engagement.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Process</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Onboarding & Data Upload</h3>
                  <p className="text-gray-700">We guide you through secure data upload and initial system configuration, typically completed within 1-2 weeks.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Research & Analysis</h3>
                  <p className="text-gray-700">Our research team processes all records and conducts comprehensive professional profile research, typically completed within 4-8 weeks depending on cohort size.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dashboard Setup</h3>
                  <p className="text-gray-700">We customize your dashboard, train your team, and deliver initial insights and recommendations from the data.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-700">Continuous platform updates, new data research, strategic reporting, and dedicated account management ensure ongoing success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}"
    },
    {
      "file": "src/app/about/page.tsx",
      "data": "import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About edu.cloud</h1>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl">
            edu.cloud was founded on a simple premise: education's true impact isn't measured in classrooms—it's measured in the success and achievements of alumni throughout their careers and lives.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                We empower higher education institutions to measure, demonstrate, and communicate the transformational impact they have on their alumni and society through innovative research technology and data analytics.
              </p>
              <p className="text-lg text-gray-700">
                By aggregating comprehensive career outcome data, we help institutions tell compelling stories about their graduates' achievements, from startup founders to industry leaders, from breakthrough researchers to social entrepreneurs.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                We envision a world where every educational institution can scientifically demonstrate their impact through objective data rather than anecdotes or assumptions.
              </p>
              <p className="text-lg text-gray-700">
                When universities can clearly articulate the professional and economic outcomes their education generates, they attract better students, engage donors more effectively, improve institutional strategy, and ultimately amplify their positive impact on society.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-12 rounded-lg mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why We Started edu.cloud</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Problem</h3>
                <p className="text-gray-700">
                  Universities could only guess at alumni success. Without systematic data, institutions lacked evidence of their educational impact and struggled to prove value to students, donors, and accreditors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Opportunity</h3>
                <p className="text-gray-700">
                  Modern data aggregation, AI-powered research, and global professional networks made it possible to track alumni outcomes at scale, creating unprecedented insight into educational impact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Solution</h3>
                <p className="text-gray-700">
                  edu.cloud automates comprehensive alumni research and outcome tracking, giving institutions the data they need to understand, communicate, and continuously improve their impact.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Impact By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-700 font-medium">Partner Institutions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
                <p className="text-gray-700 font-medium">Alumni Profiled</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                <p className="text-gray-700 font-medium">Companies Founded</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$100B+</div>
                <p className="text-gray-700 font-medium">Economic Impact Tracked</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Commitment</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">🔒 Data Privacy & Security</h3>
                <p className="text-gray-700">We treat alumni data with utmost care, maintaining enterprise-grade security and complying with GDPR, FERPA, and all applicable privacy regulations. Your data remains your responsibility and control.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">📊 Research Integrity</h3>
                <p className="text-gray-700">Our research methodology is transparent, validated, and continuously improved. We verify outcomes through multiple sources and maintain rigorous quality standards to ensure accuracy exceeding 92%.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">🤝 Partnership Approach</h3>
                <p className="text-gray-700">We're not just a vendor—we're your partner in demonstrating impact. Our success is measured by the value we create for your institution and the stories we help you tell about alumni achievement.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}