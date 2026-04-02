export default function Features() {
  const features = [
    {
      icon: '9',
      title: 'Companies Started',
      description: 'Track how many alumni have founded successful companies and ventures from your institution.',
    },
    {
      icon: '8',
      title: 'Career Progression',
      description: 'Measure promotions, leadership positions, and career advancement across your alumni network.',
    },
    {
      icon: '7',
      title: 'Jobs Created',
      description: 'Aggregate the total jobs created by alumni entrepreneurs and leaders in their organizations.',
    },
    {
      icon: '6',
      title: 'Capital Raised',
      description: 'Quantify venture capital, funding rounds, and investment success among alumni-led ventures.',
    },
    {
      icon: '5',
      title: 'Exit Events',
      description: 'Document IPOs, acquisitions, and mergers involving your alumni as founders or key executives.',
    },
    {
      icon: '4',
      title: 'Aggregate Analytics',
      description: 'Generate comprehensive reports showing your institution\'s collective impact on society and industry.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Impact Tracking
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measure the real-world outcomes and achievements of your alumni across multiple dimensions of success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg hover:bg-yellow-50 transition duration-300 border border-gray-100"
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