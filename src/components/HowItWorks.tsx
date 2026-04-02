export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Submit Alumni Data',
      description: 'Upload a simple spreadsheet of alumni names, graduation years, and basic information. No complex formatting required.',
    },
    {
      number: '2',
      title: 'We Research Each Individual',
      description: 'Our team conducts comprehensive online research across LinkedIn, company databases, news archives, and public sources to uncover professional achievements.',
    },
    {
      number: '3',
      title: 'Aggregate & Analyze',
      description: 'We compile findings into meaningful categories: founders, jobs created, capital raised, exits, promotions, and career milestones.',
    },
    {
      number: '4',
      title: 'Get Your Impact Dashboard',
      description: 'Receive an interactive dashboard, comprehensive reports, and compelling narratives ready to share with donors, boards, and stakeholders.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How edu.cloud Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From spreadsheet to impact story in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 border border-gray-200 h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}