import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <ProcessSection />
      <BenefitsSection />
      <MetricsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Measure Your Institution's Real Alumni Impact
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform a simple list of alumni names into comprehensive impact metrics. Discover how your graduates are advancing careers, starting companies, raising capital, and creating jobs across the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
              See It In Action
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          The Challenge Higher Ed Faces
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-200 rounded-xl bg-gray-50">
            <div className="text-4xl mb-4">❓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Alumni Data is Scattered</h3>
            <p className="text-gray-600 leading-relaxed">
              Your alumni's professional achievements are hidden across LinkedIn, company websites, news articles, and public records. There's no single source of truth.
            </p>
          </div>
          <div className="p-8 border border-gray-200 rounded-xl bg-gray-50">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Manual Research is Expensive</h3>
            <p className="text-gray-600 leading-relaxed">
              Manually tracking individual alumni outcomes requires enormous time and resources. It doesn't scale beyond a few hundred people.
            </p>
          </div>
          <div className="p-8 border border-gray-200 rounded-xl bg-gray-50">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact is Hard to Prove</h3>
            <p className="text-gray-600 leading-relaxed">
              Without comprehensive data, it's difficult to demonstrate your institution's true impact to donors, trustees, and prospective students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">edu.cloud Solves It</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload a spreadsheet. Get comprehensive impact data. Share powerful stories.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-200">
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">📋</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Upload Your Alumni List</h3>
                <p className="text-lg text-gray-600">
                  Simply provide a spreadsheet with student and alumni names. We accept CSV, Excel, or any common format.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🔍</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 2: We Conduct Vast Research</h3>
                <p className="text-lg text-gray-600">
                  Our advanced research methods search across LinkedIn, company databases, news archives, SEC filings, and hundreds of other sources to build comprehensive professional profiles.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">📈</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 3: Aggregate Impact Metrics</h3>
                <p className="text-lg text-gray-600">
                  We compile individual achievements into institutional-level metrics: companies founded, capital raised, jobs created, promotions received, and exit events like IPOs and acquisitions.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">📊</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 4: Get Actionable Insights</h3>
                <p className="text-lg text-gray-600">
                  Access interactive dashboards and reports that tell the story of your impact. Use data to fundraise, recruit students, inform strategy, and engage alumni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const metrics = [
    { icon: '🚀', label: 'Companies Started', description: 'Total new ventures founded by your alumni' },
    { icon: '💰', label: 'Capital Raised', description: 'Venture capital and funding secured by alumni-led companies' },
    { icon: '👥', label: 'Jobs Created', description: 'Total employment generated by alumni entrepreneurs' },
    { icon: '📈', label: 'Promotions Received', description: 'Career advancement and leadership positions achieved' },
    { icon: '🎯', label: 'Exit Events', description: 'IPOs, acquisitions, and mergers involving alumni' },
    { icon: '🌟', label: 'Industry Leaders', description: 'Alumni in C-suite and executive positions' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Track What Matters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            edu.cloud aggregates six key metrics that demonstrate your institution's impact on alumni success and society.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-5xl mb-4">{metric.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.label}</h3>
              <p className="text-gray-600 leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      title: 'Institutional Advancement',
      description: 'Strengthen capital campaigns and fundraising with compelling data showing ROI of education.',
      icon: '💎',
    },
    {
      title: 'Recruitment Marketing',
      description: 'Attract prospective students with powerful stories of alumni success and career outcomes.',
      icon: '🎓',
    },
    {
      title: 'Strategic Planning',
      description: 'Use alumni outcome data to inform curriculum development and program investment decisions.',
      icon: '🎯',
    },
    {
      title: 'Economic Impact Reporting',
      description: 'Demonstrate your institution's contribution to regional and national economic development.',
      icon: '📊',
    },
    {
      title: 'Stakeholder Communications',
      description: 'Create compelling annual reports and presentations for boards, donors, and policymakers.',
      icon: '📢',
    },
    {
      title: 'Alumni Engagement',
      description: 'Build deeper connections with your alumni community through curated career development and networking.',
      icon: '🤝',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits for Your Institution</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            edu.cloud empowers every department to tell the impact story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Impact, Real Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what institutions are achieving with edu.cloud.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">10K+</p>
            <p className="text-lg text-gray-600">Alumni Researched</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">$2.3B</p>
            <p className="text-lg text-gray-600">Capital Tracked</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">500+</p>
            <p className="text-lg text-gray-600">Companies Founded</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">50+</p>
            <p className="text-lg text-gray-600">Institutions Using</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Measure Your Impact?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join leading higher education institutions discovering the true story of their alumni's success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition font-semibold text-lg">
            Schedule Demo
          </button>
        </div>
        <p className="text-blue-100 text-sm mt-6">
          No credit card required. Get started in minutes.
        </p>
      </div>
    </section>
  );
}