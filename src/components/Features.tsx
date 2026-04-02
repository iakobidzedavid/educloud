export default function Features() {
  const features = [
    {
      title: 'Comprehensive Alumni Tracking',
      description: 'Submit spreadsheets of student and alumni names. We conduct extensive online research to build complete professional profiles for each individual.',
      icon: '📊',
    },
    {
      title: 'Impact Metrics at Scale',
      description: 'Automatically track companies founded, promotions received, jobs created, venture capital raised, and other key achievements across your entire alumni network.',
      icon: '📈',
    },
    {
      title: 'Exit Events & Acquisitions',
      description: 'Monitor significant career milestones including mergers, acquisitions, IPOs, and other major professional events that define alumni success.',
      icon: '🎯',
    },
    {
      title: 'Aggregated Impact Reports',
      description: 'Receive detailed reports demonstrating your institution\'s collective impact on alumni careers and broader societal contributions.',
      icon: '📋',
    },
    {
      title: 'Data Privacy & Security',
      description: 'Your alumni data is handled with the highest security standards. We comply with all data protection regulations and maintain strict confidentiality.',
      icon: '🔒',
    },
    {
      title: 'Easy Integration',
      description: 'Simple spreadsheet upload process. No complex integrations or technical setup required. Get started in minutes.',
      icon: '⚡',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Institutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to measure, track, and demonstrate your institution's impact on alumni success and society.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition border border-gray-200"
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
