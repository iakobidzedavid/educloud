export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Measure the Impact of Your Education
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            edu.cloud helps higher education institutions demonstrate their transformational impact through comprehensive alumni research and career outcome analytics.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Request Demo
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700">Institutions Using edu.cloud</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
              <p className="text-gray-700">Alumni Profiles Analyzed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <p className="text-gray-700">Companies Founded</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$50B+</div>
              <p className="text-gray-700">VC Raised by Alumni</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}