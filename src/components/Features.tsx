const features = [
  {
    title: 'Comprehensive Alumni Research',
    description: 'We analyze career trajectories, entrepreneurial ventures, and professional achievements for every alumnus.',
    icon: '📊',
  },
  {
    title: 'Impact Metrics That Matter',
    description: 'Track companies founded, jobs created, promotions earned, and capital raised by your alumni network.',
    icon: '📈',
  },
  {
    title: 'Exit Event Intelligence',
    description: 'Identify mergers, acquisitions, IPOs, and other transformative events involving your alumni.',
    icon: '🎯',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Get aggregated results that demonstrate institutional impact for leadership and stakeholder communication.',
    icon: '💡',
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose edu.cloud?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our research-driven approach delivers measurable insights into alumni success and institutional impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}