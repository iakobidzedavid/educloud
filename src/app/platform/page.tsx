import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PlatformPage() {
  const capabilities = [
    {
      title: 'Alumni Research Database',
      description: 'Comprehensive profiles of your alumni with employment history, entrepreneurial ventures, and career milestones.',
    },
    {
      title: 'Real-Time Impact Dashboard',
      description: 'Interactive dashboards tracking companies founded, capital raised, jobs created, and exit events.',
    },
    {
      title: 'Advanced Analytics',
      description: 'Segmentation by graduation year, field of study, and demographic to understand patterns in alumni success.',
    },
    {
      title: 'Custom Reporting',
      description: 'Generate reports tailored to your institution\\'s needs for fundraising, strategic planning, and communications.',
    },
    {
      title: 'Data Integration',
      description: 'Seamlessly import your existing alumni data and combine with our research for comprehensive insights.',
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with full FERPA and GDPR compliance for sensitive educational data.',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            The edu.cloud Platform
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Powerful tools designed specifically for higher education institutions to track, measure, and communicate alumni impact.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}"
    },
    {
      "file": "src/app/solutions/page.tsx",
      "data": "import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Institutional Advancement',
      description: 'Strengthen fundraising efforts by demonstrating quantifiable alumni success and return on educational investment.',
      use_cases: [
        'Capital campaign storytelling',
        'Endowment justification',
        'Donor engagement materials',
      ],
    },
    {
      title: 'Strategic Planning',
      description: 'Use comprehensive alumni outcome data to inform curriculum development and program investment decisions.',
      use_cases: [
        'Program assessment',
        'Career outcomes analysis',
        'Alumni network intelligence',
      ],
    },
    {
      title: 'Marketing & Communications',
      description: 'Showcase your institution\\'s impact with compelling statistics and success stories of your alumni.',
      use_cases: [
        'Recruitment materials',
        'Annual reports',
        'Social proof & testimonials',
      ],
    },
    {
      title: 'Economic Impact Analysis',
      description: 'Demonstrate your institution\\'s contribution to regional and national economic development.',
      use_cases: [
        'Government grant applications',
        'Economic impact reports',
        'Policy advocacy',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Solutions for Every Institutional Need
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Whether you're fundraising, planning strategy, or communicating impact, edu.cloud delivers the insights you need.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {solution.use_cases.map((use_case, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-3">✓</span>
                        <span className="text-gray-600">{use_case}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}"
    },
    {
      "file": "src/app/resources/page.tsx",
      "data": "import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  const resources = [
    {
      type: 'Case Study',
      title: 'How a Top Research University Increased Fundraising by 40%',
      description: 'Learn how comprehensive alumni impact data strengthened capital campaign storytelling and donor engagement.',
      icon: '📊',
    },
    {
      type: 'Whitepaper',
      title: 'Measuring Alumni Economic Impact: A Framework for Higher Ed',
      description: 'A detailed guide to calculating and communicating the economic impact of your institution through alumni outcomes.',
      icon: '📄',
    },
    {
      type: 'Webinar',
      title: 'Beyond Rankings: Alternative Metrics for Demonstrating Institutional Value',
      description: 'Discover metrics beyond traditional rankings that resonate with stakeholders and showcase your institution\\'s unique impact.',
      icon: '🎥',
    },
    {
      type: 'Blog',
      title: 'The Hidden Value of Alumni Data: What Your Institution Can Learn',
      description: 'Explore how alumni professional journeys reveal insights about curriculum effectiveness and program ROI.',
      icon: '✍️',
    },
    {
      type: 'Report',
      title: 'Alumni Entrepreneurship Trends: 2024 Analysis',
      description: 'Analysis of company formation, funding, and exit events among recent graduates across institutions.',
      icon: '📈',
    },
    {
      type: 'Template',
      title: 'Impact Narrative Template for Fundraising',
      description: 'Ready-to-use template for crafting compelling impact stories with alumni achievement data.',
      icon: '📋',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Resources & Insights
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Learn best practices for measuring, analyzing, and communicating alumni impact.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-3xl mb-4">{resource.icon}</div>
                <div className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                  {resource.type}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition">
                  Access →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for insights on alumni impact, higher ed trends, and research methodologies.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}"
    },
    {
      "file": "src/app/privacy/page.tsx",
      "data": "import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
                <p>
                  edu.cloud is committed to protecting the privacy and security of all alumni data submitted by higher education institutions. We implement industry-leading security measures including encryption, secure data storage, and strict access controls.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Data</h2>
                <p>
                  Alumni names and information provided are used exclusively for research purposes to identify professional achievements, career milestones, and impact metrics. Data is aggregated at the institutional level and never shared with third parties without explicit consent.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h2>
                <p>
                  We comply with all applicable data protection regulations including FERPA, GDPR, and other relevant privacy laws. Our practices are regularly audited to ensure the highest standards of data security and privacy protection.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <p>
                  For questions about our privacy practices, please contact us at privacy@edu.cloud
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}"
    },
    {
      "file": "src/app/terms/page.tsx",
      "data": "import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h2>
                <p>
                  edu.cloud provides research services to higher education institutions. Our platform enables institutions to submit alumni data and receive comprehensive reports on the professional achievements and impact of their graduates.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
                <p>
                  Institutions agree to use edu.cloud services only for legitimate educational and research purposes. Users must have appropriate authorization to submit alumni data and must comply with all applicable privacy laws and institutional policies.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Ownership</h2>
                <p>
                  While institutions retain ownership of their submitted data, they grant edu.cloud a limited license to conduct research and analysis. All aggregated findings remain the property of the submitting institution.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p>
                  edu.cloud provides research services "as is" without warranties. We are not liable for incomplete findings or inaccuracies that may result from publicly available information limitations or individual privacy choices.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <p>
                  For questions about our terms, please contact us at legal@edu.cloud
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}"
    }
  ]
}
