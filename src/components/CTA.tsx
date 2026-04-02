export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Measure Your Impact?
        </h2>
        <p className="text-lg text-blue-100 mb-8 leading-relaxed">
          Join hundreds of higher education institutions discovering the true story of their alumni's success and demonstrating their value to the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition font-semibold">
            Schedule a Demo
          </button>
        </div>
        <p className="text-blue-100 text-sm mt-8">
          No credit card required. Get started in minutes.
        </p>
      </div>
    </section>
  );
}