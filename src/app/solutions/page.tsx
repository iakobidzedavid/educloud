import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Institutional Advancement',
      description: 'Strengthen fundraising efforts by demonstrating quantifiable alumni success and return on educational investment.',
      useCases: [
        'Capital campaign storytelling',
        'Endowment justification',
        'Donor engagement materials',
      ],
    },
    {
      title: 'Strategic Planning',
      description: 'Use comprehensive alumni outcome data to inform curriculum development and program investment decisions.',
      useCases: [
        'Program assessment',
        'Career outcomes analysis',
        'Alumni network intelligence',
      ],
    },
    {
      title: 'Marketing & Communications',
      description: 'Showcase your institution\'s impact with compelling statistics and success stories of your alumni.',
      useCases: [
        'Recruitment materials',
        'Annual reports',
        'Social proof & testimonials',
      ],
    },
    {
      title: 'Economic Impact Analysis',
      description: 'Demonstrate your institution\'s contribution to regional and national economic development.',
      useCases: [
        'Government grant applications',
        'Economic impact reports',
        'Policy advocacy',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-red-50 to-rose-50">
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
              <div key={index} className="p-8 bg-red-50 rounded-xl border border-red-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {solution.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-500 mr-3">+</span>
                        <span className="text-gray-600">{useCase}</span>
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
}