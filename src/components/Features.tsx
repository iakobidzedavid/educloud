export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Comprehensive Research',
      description: 'We analyze vast online data sources to track each alumnus professional trajectory and achievements.',
    },
    {
      icon: '🚀',
      title: 'Entrepreneurship Tracking',
      description: 'Identify companies founded by your alumni, from startups to established enterprises.',
    },
    {
      icon: '💼',
      title: 'Career Advancement Metrics',
      description: 'Monitor promotions, leadership positions, and career progression across your graduate network.',
    },
    {
      icon: '💰',
      title: 'Capital Raised Intelligence',
      description: 'Measure venture capital, private equity, and funding achievements by your alumni founders.',
    },
    {
      icon: '🎯',
      title: 'Exit Event Analysis',
      description: 'Track mergers, acquisitions, IPOs, and other significant exits involving your alumni.',
    },
    {
      icon: '👥',
      title: 'Job Creation Impact',
      description: 'Quantify total employment created by businesses founded and led by your graduates.',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Impact Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track the metrics that matter most to your institution's mission and stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
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