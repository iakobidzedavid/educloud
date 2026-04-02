const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance with instant load times. Built on modern architecture for blazing fast execution.',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols. Your data is protected with industry-leading standards.',
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Real-time insights and comprehensive dashboards. Track every metric that matters to your business.',
    },
    {
      icon: '🔄',
      title: 'Easy Integration',
      description: 'Seamless API integration with popular tools. Connect with your favorite services in minutes.',
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Built-in tools for seamless team coordination. Work together efficiently with real-time updates.',
    },
    {
      icon: '🎨',
      title: 'Customizable Design',
      description: 'Flexible themes and components. Create your perfect interface without coding limits.',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your applications with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition duration-300 bg-gray-50 hover:bg-white"
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
};

export default Features;