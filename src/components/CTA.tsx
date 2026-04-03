import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-red-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Demonstrate Your Institution's Impact?
        </h2>
        <p className="text-xl text-red-100 mb-8">
          Partner with edu.cloud to unlock the success stories of your alumni and showcase your education's real-world impact.
        </p>
        <Link href="/contact" className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
          Contact Us Today
        </Link>
      </div>
    </section>
  );
}