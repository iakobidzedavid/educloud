export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-amber-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Measure Your Institution's Real-World Impact
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Transform alumni spreadsheets into powerful impact metrics. We conduct comprehensive research on each graduate to identify companies founded, capital raised, jobs created, and transformative exit events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold">
                Get Started
              </button>
              <button className="border-2 border-yellow-500 text-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-50 transition font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="text-center py-8">
                <p className="text-gray-600">Visual representation of alumni impact metrics would go here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}