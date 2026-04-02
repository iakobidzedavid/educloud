export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Submit Your Data',
      description: 'Provide spreadsheets containing student and alumni names, graduation dates, and basic information.',
    },
    {
      number: '2',
      title: 'Comprehensive Research',
      description: 'Our team runs extensive online research on each individual to map their professional journey and achievements.',
    },
    {
      number: '3',
      title: 'Data Aggregation',
      description: 'We consolidate findings across companies founded, capital raised, promotions, exits, and jobs created.',
    },
    {
      number: '4',
      title: 'Impact Reporting',
      description: 'Receive detailed dashboards and reports showcasing your institution's measurable economic and career impact.',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How edu.cloud Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A streamlined process designed to deliver actionable insights about your alumni's professional impact.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-blue-200"></div>
              )}
              <div className="relative bg-white p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4 text-sm">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}