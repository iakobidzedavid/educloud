import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Start Measuring Impact Today</h2>
        <p className="text-xl text-blue-100 mb-8">Join leading institutions using edu.cloud to demonstrate the transformative power of their education.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center justify-center gap-2">
            Schedule Demo <ArrowRight size={20} />
          </Link>
          <Link href="/solutions" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center gap-2">
            Explore Solutions <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}