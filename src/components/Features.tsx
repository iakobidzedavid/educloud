export default function Features() {
  const features = [
    {
      title: 'Alumni Data Analysis',
      description: 'Upload spreadsheets of student and alumni names. We conduct comprehensive online research to track their professional journeys.',
      icon: '📊'
    },
    {
      title: 'Impact Metrics',
      description: 'Track companies started, promotions received, jobs created, and venture capital raised by your alumni network.',
      icon: '📈'
    },
    {
      title: 'Exit Events',
      description: 'Measure success through mergers, acquisitions, and IPOs achieved by your institution\'s graduates.',
      icon: '🎯'
    },
    {
      title: 'Comprehensive Reporting',
      description: 'Receive detailed reports aggregating professional achievements and demonstrating institutional impact.',
      icon: '📋'
    },
    {
      title: 'Research Expertise',
      description: 'Our team conducts vast online research to uncover career progression and entrepreneurial success stories.',
      icon: '🔍'
    },
    {
      title: 'Impact Storytelling',
      description: 'Transform data into compelling narratives that showcase your institution\'s contribution to society and the economy.',
      icon: '📖'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive research and impact measurement for higher education</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg hover:border-green-300 transition-all">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}