export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-amber-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Measure Your Institution's Real Impact
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform alumni data into powerful impact stories. Upload a simple spreadsheet of student and alumni names, and we conduct comprehensive research to track their professional achievements, companies founded, capital raised, jobs created, and exit events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold">
                Start Free Trial
              </button>
              <button className="border-2 border-yellow-500 text-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-50 transition font-semibold">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">&#x1F4CA;</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Upload Alumni Data</p>
                  <p className="text-sm text-gray-600">Simple spreadsheet format</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">&#x1F50D;</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Comprehensive Research</p>
                  <p className="text-sm text-gray-600">Vast online research for each person</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">&#x1F4C8;</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Impact Metrics</p>
                  <p className="text-sm text-gray-600">Aggregate professional journeys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
