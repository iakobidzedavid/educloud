export default function Features() {
  const features = [
    {
      title: 'Comprehensive Research',
      description: 'We conduct thorough online research on every individual in your alumni dataset to identify career outcomes and achievements.',
      icon: '🔍'
    },
    {
      title: 'Aggregate Insights',
      description: 'Transform individual success stories into institutional impact metrics that resonate with stakeholders.',
      icon: '📊'
    },
    {
      title: 'Impact Metrics',
      description: 'Track companies founded, promotions earned, jobs created, capital raised, and exit events across your alumni network.',
      icon: '📈'
    },
    {
      title: 'Easy Integration',
      description: 'Simply provide your student and alumni data in spreadsheet format. We handle the rest.',
      icon: '⚙️'
    },
    {
      title: 'Fundraising Ready',
      description: 'Generate evidence-based narratives that strengthen donor communications and grant applications.',
      icon: '💼'
    },
    {
      title: 'Ongoing Support',
      description: 'Our team works with you to ensure accurate, meaningful results that tell your institution\\'s story.',
      icon: '🤝'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Choose edu.cloud</h2>
        <p className="text-center text-gray-600 text-lg mb-16">Comprehensive research and analysis designed specifically for higher education institutions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}"
    },
    {
      "file": "src/components/HowItWorks.tsx",
      "data": "export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Submit Data',
      description: 'Provide your student and alumni names via spreadsheet. Include any relevant metadata like graduation year or degree program.'
    },
    {
      number: '2',
      title: 'Research & Verification',
      description: 'Our team conducts comprehensive online research on each individual to identify career achievements, business ventures, and professional milestones.'
    },
    {
      number: '3',
      title: 'Data Aggregation',
      description: 'We aggregate individual outcomes into institutional-level metrics that demonstrate collective impact and institutional value.'
    },
    {
      number: '4',
      title: 'Results & Insights',
      description: 'Receive detailed reports with impact metrics, success stories, trends, and actionable insights for communications and fundraising.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
        <p className="text-center text-gray-600 text-lg mb-16">A straightforward process to quantify and communicate your institution's impact</p>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}