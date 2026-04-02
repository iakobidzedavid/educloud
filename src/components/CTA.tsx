import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12 text-center border border-blue-200">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Demonstrate Your Impact?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of leading institutions leveraging edu.cloud to showcase their alumni's achievements and institutional impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/resources"
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}