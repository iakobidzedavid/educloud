'use client';

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Demonstrate Your Impact?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Join leading higher education institutions using edu.cloud to showcase their alumni success stories and institutional value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Start Your Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
"
    },
    {
      "file": "src/components/Footer.tsx",
      "data": "'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ec</span>
              </div>
              <span className="text-xl font-bold text-white">edu.cloud</span>
            </div>
            <p className="text-sm text-gray-400">Measuring the impact of education and research</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Features</Link></li>
              <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 edu.cloud. All rights reserved. | Measuring impact. Creating value.</p>
        </div>
      </div>
    </footer>
  );
}
"
    },
    {
      "file": "src/app/about/page.tsx",
      "data": "import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'About edu.cloud - Impact Research Platform',
  description: 'Learn about edu.cloud and our mission to help higher education institutions demonstrate their impact.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">About edu.cloud</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p>
                edu.cloud exists to help higher education institutions quantify and demonstrate the real-world impact of their education and research. We believe that universities create transformative value for their students and society—and institutions deserve tools to measure and communicate that impact effectively.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem We Solve</h2>
              <p>
                Higher education institutions invest heavily in student success and research, yet many struggle to articulate the tangible outcomes of their programs. Traditional metrics don't capture the full picture of alumni achievement—job creation, entrepreneurship, professional advancement, and societal contributions.
              </p>
              <p>
                We bridge that gap by researching individual alumni careers and aggregating their achievements into meaningful institutional impact metrics.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <p>
                Our platform combines data aggregation with comprehensive online research to track alumni outcomes across the career spectrum:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Companies founded and jobs created</li>
                <li>Venture capital raised by alumni entrepreneurs</li>
                <li>Professional promotions and career advancement</li>
                <li>Major exit events including acquisitions, mergers, and IPOs</li>
                <li>Innovation and thought leadership contributions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose edu.cloud</h2>
              <p>
                We work exclusively with higher education institutions and understand the unique challenges of measuring educational impact. Our research is thorough, our data is secure, and our insights are actionable. Whether you're preparing for accreditation reviews, fundraising campaigns, or strategic planning initiatives, edu.cloud provides the evidence you need.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
