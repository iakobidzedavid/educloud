export default function Features() {
  const features = [
    {
      title: 'Comprehensive Alumni Tracking',
      description: 'Upload student and alumni data, and we conduct extensive online research to map professional trajectories and career outcomes.',
      icon: '📊'
    },
    {
      title: 'Impact Metrics',
      description: 'Measure what matters: companies founded, promotions earned, jobs created, venture capital raised, and successful exits.',
      icon: '📈'
    },
    {
      title: 'Institutional Benchmarking',
      description: 'Compare your alumni outcomes against peer institutions and identify areas of institutional strength.',
      icon: '🎓'
    },
    {
      title: 'Stakeholder Communication',
      description: 'Generate compelling reports and visualizations for boards, donors, accreditors, and prospective students.',
      icon: '📢'
    },
    {
      title: 'Strategic Planning',
      description: 'Leverage alumni data to inform curriculum development, career services, and strategic initiatives.',
      icon: '🎯'
    },
    {
      title: 'Continuous Monitoring',
      description: 'Track alumni progress over time and identify emerging trends in your institution's graduate outcomes.',
      icon: '🔍'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose edu.cloud?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}