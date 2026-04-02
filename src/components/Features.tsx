export default function Features() {
  const features = [
    {
      title: 'Comprehensive Alumni Tracking',
      description: 'Upload student and alumni names, we handle the rest. Our research engine identifies professional profiles and tracks career progression across global databases.',
      icon: '📊'
    },
    {
      title: 'Impact Metrics Dashboard',
      description: 'View aggregated outcomes including companies founded, promotions received, jobs created, venture capital raised, and exit events like acquisitions and IPOs.',
      icon: '📈'
    },
    {
      title: 'Professional Journey Mapping',
      description: 'Track the complete career trajectory of your alumni. Understand industry distribution, geographic spread, and professional network growth over time.',
      icon: '🗺️'
    },
    {
      title: 'Institutional ROI Analysis',
      description: 'Quantify your education and research impact with data-driven insights that demonstrate your institution\'s influence on alumni success and societal contribution.',
      icon: '💼'
    },
    {
      title: 'Secure Data Management',
      description: 'Enterprise-grade security ensures your alumni data is protected. Comply with privacy regulations while gaining powerful insights from aggregated analytics.',
      icon: '🔒'
    },
    {
      title: 'Custom Reporting',
      description: 'Generate tailored reports for stakeholders, accreditation bodies, and fundraising efforts. Export data in multiple formats for presentations and publications.',
      icon: '📋'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Education Leaders</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Our platform transforms raw alumni data into actionable insights that showcase institutional impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}