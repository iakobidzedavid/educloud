const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Measure the Impact of Your Education
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        edu.cloud helps higher education institutions demonstrate the real-world impact of their graduates through comprehensive alumni research and analytics.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;