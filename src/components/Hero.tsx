export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Prove Your Institution's Impact on Alumni Success
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              edu.cloud conducts comprehensive research on your alumni to reveal the full story of their professional success. From startups founded to jobs created to capital raised, we aggregate the metrics that demonstrate your institution's real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-200">
                <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">The Process</p>
                <p className="text-gray-700 font-semibold">1. Upload alumni spreadsheet</p>
                <p className="text-sm text-gray-600">Names, graduation years, and basic info</p>
              </div>
              <div className="pb-6 border-b border-gray-200">
                <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">Our Research</p>
                <p className="text-gray-700 font-semibold">2. Comprehensive online research</p>
                <p className="text-sm text-gray-600">LinkedIn, news, company databases, and more</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">Your Impact</p>
                <p className="text-gray-700 font-semibold">3. Get aggregated impact metrics</p>
                <p className="text-sm text-gray-600">Companies founded, capital raised, jobs created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}