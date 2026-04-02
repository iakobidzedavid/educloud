export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Submit Alumni Data',
      description: 'Provide a spreadsheet containing names of your students and alumni. Any format works—we handle the rest.',
    },
    {
      number: '2',
      title: 'Comprehensive Research',
      description: 'Our system runs extensive online research for each individual, gathering professional profiles, achievements, and career milestones.',
    },
    {
      number: '3',
      title: 'Data Aggregation',
      description: 'We aggregate individual findings into institution-wide metrics showing collective impact on careers and society.',
    },
    {
      number: '4',
      title: 'Impact Reports',
      description: 'Receive detailed reports with visualizations of companies founded, promotions, jobs created, capital raised, and exit events.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A simple process to unlock insights about your institution's transformative impact.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"
    },
    {
      "file": "src/components/Metrics.tsx",
      "data": "export default function Metrics() {
  const metrics = [
    {
      label: 'Companies Founded',
      description: 'Track entrepreneurial success among your alumni network',
    },
    {
      label: 'Promotions Received',
      description: 'Monitor career advancement and leadership development',
    },
    {
      label: 'Jobs Created',
      description: 'Measure economic impact through employment creation',
    },
    {
      label: 'Venture Capital Raised',
      description: 'Quantify innovation and investment in alumni ventures',
    },
    {
      label: 'Mergers & Acquisitions',
      description: 'Track successful exits and company consolidations',
    },
    {
      label: 'IPO Events',
      description: 'Celebrate publicly traded companies founded by alumni',
    },
  ];

  return (
    <section id="metrics" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Track What Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive metrics that demonstrate your institution's real-world impact on alumni careers and societal contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.label}</h3>
              <p className="text-gray-700 leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
