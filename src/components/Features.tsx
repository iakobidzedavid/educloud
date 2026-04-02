export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Companies Founded',
      description: 'Track how many alumni have started and scaled successful companies and ventures from your institution.',
    },
    {
      icon: '💰',
      title: 'Capital Raised',
      description: 'Quantify venture capital and funding rounds secured by alumni-led companies and startups.',
    },
    {
      icon: '👥',
      title: 'Jobs Created',
      description: 'Measure the total number of jobs created by alumni entrepreneurs and organizational leaders.',
    },
    {
      icon: '📈',
      title: 'Career Advancement',
      description: 'Document promotions, executive positions, and leadership roles across your alumni network.',
    },
    {
      icon: '🎯',
      title: 'Exit Events',
      description: 'Track IPOs, acquisitions, and mergers involving your alumni as founders or key executives.',
    },
    {
      icon: '📊',
      title: 'Aggregate Analytics',
      description: 'Generate comprehensive reports showing your institution\'s collective impact on industry and society.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Metrics That Matter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track the professional achievements and economic impact your alumni generate across their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg hover:bg-blue-50 transition duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}