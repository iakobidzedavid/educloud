import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Measure Your Institution's Impact?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Upload your alumni data and discover the compelling stories of success and achievement within your network.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Start Your Analysis Today
        </Link>
      </div>
    </section>
  );
}