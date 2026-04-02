export default function Metrics() {
  const metrics = [
    {
      value: '500+',
      label: 'Institutions Partnering',
      description: 'Universities worldwide trust edu.cloud to demonstrate their impact',
    },
    {
      value: '2M+',
      label: 'Alumni Tracked',
      description: 'Comprehensive research profiles across global networks',
    },
    {
      value: '$50B+',
      label: 'Capital Raised',
      description: 'Venture funding and investment raised by alumni founders',
    },
    {
      value: '10K+',
      label: 'Companies Founded',
      description: 'Entrepreneurial ventures launched by your graduates',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Proven Impact at Scale
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            edu.cloud helps leading institutions showcase measurable alumni success and institutional impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-5xl font-bold mb-2">{metric.value}</div>
              <div className="text-lg font-semibold mb-2">{metric.label}</div>
              <p className="text-blue-100 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}