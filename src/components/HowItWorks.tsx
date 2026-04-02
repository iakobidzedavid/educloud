'use client';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Upload Your Data',
      description: 'Submit a spreadsheet containing student and alumni names, graduation years, and basic information.',
    },
    {
      number: 2,
      title: 'Automated Research',
      description: 'Our platform conducts comprehensive online research to identify career outcomes and professional achievements for each individual.',
    },
    {
      number: 3,
      title: 'Data Aggregation',
      description: 'We compile findings into meaningful categories: job creation, companies founded, VC raised, promotions, and major exits.',
    },
    {
      number: 4,
      title: 'Impact Reports',
      description: 'Receive detailed analytics and visualizations showcasing your institution\'s collective alumni impact and societal contributions.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-700">Simple process. Powerful results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl border border-gray-200 h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
