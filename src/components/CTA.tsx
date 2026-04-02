const CTA = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of developers building the next generation of web applications. 
          Get started free today—no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-lg hover:bg-blue-50 transition transform hover:scale-105">
            Start Building Now
          </button>
          <button className="px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition">
            Schedule Demo
          </button>
        </div>
        <p className="text-blue-100 mt-8 text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;