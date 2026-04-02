export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Upload Your Data',
      description: 'Provide a simple spreadsheet with student and alumni names. We accept CSV, Excel, and other common formats.',
    },
    {
      number: '2',
      title: 'We Research Each Person',
      description: 'Our systems conduct comprehensive online research to track professional outcomes, achievements, and career progression.',
    },
    {
      number: '3',
      title: 'Aggregate Results',
      description: 'We compile findings into meaningful metrics showing companies founded, jobs created, capital raised, and exit events.',
    },
    {
      number: '4',
      title: 'Get Your Report',
      description: 'Receive detailed reports and dashboards showing your institution\'s impact with verified data and compelling narratives.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Powerful Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From data upload to impact report in four easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-yellow-300 -z-10"></div>
              )}

              <div className="bg-white rounded-xl p-6 border border-gray-200 h-full">
                <div className="w-12 h-12 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}