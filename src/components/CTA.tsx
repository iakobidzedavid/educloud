export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-amber-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to Measure Your Institution's Impact?
        </h2>
        <p className="text-lg text-gray-800 mb-8 leading-relaxed">
          Join hundreds of higher education institutions demonstrating the real-world outcomes of their education and research programs. Upload your alumni data and get started today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold">
            Start Free Trial
          </button>
          <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
            Schedule a Demo
          </button>
        </div>
        <p className="text-gray-800 text-sm mt-8">
          No credit card required. Get started in minutes.
        </p>
      </div>
    </section>
  );
}