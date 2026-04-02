export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Measure the Impact of Your Institution
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            edu.cloud transforms alumni data into compelling impact metrics. Track career achievements, startup success, capital raised, and more across your entire network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg">
              Request Demo
            </button>
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors text-lg">
              Learn More
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <p className="text-gray-600 mb-4">See what's possible with your data:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <p className="text-gray-700 text-sm">Institutions</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">5M+</div>
                <p className="text-gray-700 text-sm">Alumni Tracked</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">$50B+</div>
                <p className="text-gray-700 text-sm">Capital Raised</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
                <p className="text-gray-700 text-sm">Companies Founded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}