const features = [
  {
    icon: '📊',
    title: 'Comprehensive Research',
    description: 'Our proprietary engine conducts thorough online research for each individual, tracking career progression and achievements across the web.'
  },
  {
    icon: '🎯',
    title: 'Impact Metrics',
    description: 'Quantify what matters: companies founded, promotions received, jobs created, capital raised, and exits like IPOs and acquisitions.'
  },
  {
    icon: '🔒',
    title: 'Privacy & Security',
    description: 'Your data is protected with enterprise-grade security. We comply with FERPA and other regulatory requirements.'
  },
  {
    icon: '📈',
    title: 'Real-Time Analytics',
    description: 'Track metrics as they happen. Interactive dashboards let you explore patterns and trends in your alumni network.'
  },
  {
    icon: '🎓',
    title: 'Program Analysis',
    description: 'Measure success by program, school, or cohort. Identify which initiatives generate the greatest impact.'
  },
  {
    icon: '📄',
    title: 'Custom Reporting',
    description: 'Generate compelling reports for donors, trustees, and accreditors. Export data in multiple formats.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose edu.cloud?</h2>
          <p className="text-xl text-gray-600">Everything you need to demonstrate institutional impact</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
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