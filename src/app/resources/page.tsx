import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  const resources = [
    {
      type: 'Case Study',
      title: 'How a Top Research University Increased Fundraising by 40%',
      description: 'Learn how comprehensive alumni impact data strengthened capital campaign storytelling and donor engagement.',
      icon: '3',
    },
    {
      type: 'Whitepaper',
      title: 'Measuring Alumni Economic Impact: A Framework for Higher Ed',
      description: 'A detailed guide to calculating and communicating the economic impact of your institution through alumni outcomes.',
      icon: '2',
    },
    {
      type: 'Webinar',
      title: 'Beyond Rankings: Alternative Metrics for Demonstrating Institutional Value',
      description: 'Discover metrics beyond traditional rankings that resonate with stakeholders and showcase your institution\'s unique impact.',
      icon: '1',
    },
    {
      type: 'Blog',
      title: 'The Hidden Value of Alumni Data: What Your Institution Can Learn',
      description: 'Explore how alumni professional journeys reveal insights about curriculum effectiveness and program ROI.',
      icon: '0',
    },
    {
      type: 'Report',
      title: 'Alumni Entrepreneurship Trends: 2024 Analysis',
      description: 'Analysis of company formation, funding, and exit events among recent graduates across institutions.',
      icon: '9',
    },
    {
      type: 'Template',
      title: 'Impact Narrative Template for Fundraising',
      description: 'Ready-to-use template for crafting compelling impact stories with alumni achievement data.',
      icon: '8',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
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
                className="p-6 bg-green-50 rounded-xl border border-green-200 hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-3xl mb-4">{resource.icon}</div>
                <div className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide">
                  {resource.type}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
                <button className="mt-4 text-green-600 font-semibold hover:text-green-700 transition">
                  Access
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for insights on alumni impact, higher ed trends, and research methodologies.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}