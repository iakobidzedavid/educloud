export default function Impact() {
  const metrics = [
    {
      number: '500+',
      label: 'Higher Education Partners',
      subtext: 'Universities and colleges using edu.cloud',
    },
    {
      number: '2.5M+',
      label: 'Alumni Tracked',
      subtext: 'Professional outcomes analyzed and verified',
    },
    {
      number: '45K+',
      label: 'Companies Founded',
      subtext: 'Startups and ventures by alumni',
    },
    {
      number: '250K+',
      label: 'Jobs Created',
      subtext: 'Employment opportunities generated',
    },
    {
      number: '$12B+',
      label: 'Capital Raised',
      subtext: 'Venture funding by alumni entrepreneurs',
    },
    {
      number: '1,200+',
      label: 'Exit Events',
      subtext: 'IPOs, acquisitions, and mergers',
    },
  ];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proven Impact at Scale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real metrics from higher education institutions using edu.cloud to measure and demonstrate their impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 text-center border border-green-200"
            >
              <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">
                {metric.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{metric.label}</h3>
              <p className="text-sm text-gray-600">{metric.subtext}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8 sm:p-12 border border-green-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Institutions Choose edu.cloud</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-2xl">check</span>
              <div>
                <p className="font-semibold text-gray-900">Data-Driven Insights</p>
                <p className="text-gray-600 text-sm">Verified research across millions of professional profiles</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">check</span>
              <div>
                <p className="font-semibold text-gray-900">Compliance Ready</p>
                <p className="text-gray-600 text-sm">GDPR and privacy-compliant research processes</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">check</span>
              <div>
                <p className="font-semibold text-gray-900">Actionable Reports</p>
                <p className="text-gray-600 text-sm">Beautiful dashboards and narratives for stakeholders</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">check</span>
              <div>
                <p className="font-semibold text-gray-900">Expert Support</p>
                <p className="text-gray-600 text-sm">Dedicated team to guide your impact measurement journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}