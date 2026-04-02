'use client';

export function Features() {
  const features = [
    {
      title: 'Comprehensive Alumni Research',
      description: 'Upload student and alumni lists, and we conduct extensive online research to map career trajectories and professional outcomes.',
      icon: '🔍',
    },
    {
      title: 'Impact Metrics That Matter',
      description: 'Track companies founded, promotions earned, jobs created, and venture capital raised by your alumni network.',
      icon: '📊',
    },
    {
      title: 'Exit Event Tracking',
      description: 'Monitor mergers, acquisitions, IPOs, and other significant company events involving your alumni entrepreneurs.',
      icon: '🎯',
    },
    {
      title: 'Aggregated Insights',
      description: 'Visualize institutional impact through dashboards and reports that showcase the collective success of your graduates.',
      icon: '📈',
    },
    {
      title: 'Easy Data Integration',
      description: 'Simple spreadsheet uploads with secure data handling and comprehensive privacy protections for all individuals.',
      icon: '💾',
    },
    {
      title: 'Reporting & Analytics',
      description: 'Generate detailed reports and analytics to support fundraising, accreditation, and strategic planning initiatives.',
      icon: '📋',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Impact Measurement</h2>
          <p className="text-xl text-gray-700">
            Everything you need to demonstrate the value of your educational and research initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
