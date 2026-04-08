import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* MVP Dashboard Banner */}
      <section className="bg-red-50 border-y border-red-100 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">New — Beta MVP Live</div>
            <h3 className="text-xl font-bold text-gray-900">Alumni Outcomes Reporting Dashboard</h3>
            <p className="text-gray-600 text-sm mt-1">
              See how edu.cloud transforms alumni data into actionable impact metrics — employment rates, industry distribution, salary ranges, and career progression.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="flex-shrink-0 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm"
          >
            View Live Demo Dashboard →
          </Link>
        </div>
      </section>
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}