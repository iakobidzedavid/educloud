import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          Measure Your Institution's Impact
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-blue-100 leading-relaxed">
          Transform alumni data into compelling evidence of educational impact. Track career outcomes, entrepreneurial success, and societal contribution at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Request a Demo
          </Link>
          <Link
            href="/solutions"
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}