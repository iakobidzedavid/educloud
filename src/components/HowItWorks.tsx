const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Upload Your Data',
      description: 'Submit spreadsheets containing your alumni and student names.'
    },
    {
      number: '2',
      title: 'We Research',
      description: 'Our system runs comprehensive online research for each individual across professional networks and public data.'
    },
    {
      number: '3',
      title: 'Analyze Results',
      description: 'We aggregate career data including positions, companies, startups, and achievements.'
    },
    {
      number: '4',
      title: 'Generate Reports',
      description: 'Receive detailed impact reports with metrics on career success, entrepreneurship, and job creation.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">
              {step.description}
            </p>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-12 w-full h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;