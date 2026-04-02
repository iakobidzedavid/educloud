export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Submit Alumni Names',
      description: 'Upload a spreadsheet with student and alumni names.',
    },
    {
      number: '2',
      title: 'Comprehensive Research',
      description: 'We research each person across online sources.',
    },
    {
      number: '3',
      title: 'Aggregate Results',
      description: 'We compile all achievements into metrics.',
    },
    {
      number: '4',
      title: 'Get Your Report',
      description: 'Receive detailed impact dashboards.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}