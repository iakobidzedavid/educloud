import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Demonstrate the True Impact of Your Education and Research
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            edu.cloud analyzes alumni outcomes across your institution to reveal compelling impact metrics: companies started, promotions achieved, jobs created, venture capital raised, and transformative exit events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/solutions"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}