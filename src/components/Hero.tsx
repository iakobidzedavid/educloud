import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
          Measure the Impact of Your Education
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
          Transform alumni data into powerful impact stories. Discover how your graduates are shaping the world through career achievement, entrepreneurship, and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Get Started
          </Link>
          <Link href="/services" className="inline-block border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-bold py-3 px-8 rounded-lg transition-colors">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}