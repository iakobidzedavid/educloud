'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-8">About edu.cloud</h1>
          
          <div className="bg-white rounded-lg shadow-md p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              edu.cloud empowers higher education institutions to demonstrate the transformative impact of their education and research on alumni careers and society at large.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that institutions need robust, data-driven evidence of their impact. Our platform bridges the gap between enrollment data and career outcomes, providing comprehensive insights into how education shapes successful careers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Data Collection</h3>
                <p className="text-gray-600">Institutions submit their student and alumni data through secure, confidential spreadsheets. We handle all data with the highest security standards.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Comprehensive Research</h3>
                <p className="text-gray-600">Our research team conducts extensive online research for each individual, mapping professional trajectories across the web, social media, professional networks, and business databases.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Impact Aggregation</h3>
                <p className="text-gray-600">We aggregate findings into meaningful metrics: companies founded, promotions received, jobs created, venture capital raised, and exit events including mergers, acquisitions, and IPOs.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Strategic Insights</h3>
                <p className="text-gray-600">Institutions receive comprehensive reports with actionable insights to demonstrate impact, inform strategic planning, and enhance stakeholder communications.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why edu.cloud?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-4 font-bold text-xl">✓</span>
                <span className="text-gray-600"><strong>Specialized Expertise:</strong> We focus exclusively on higher education impact research.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-4 font-bold text-xl">✓</span>
                <span className="text-gray-600"><strong>Comprehensive Data:</strong> Our research goes beyond LinkedIn to capture the full spectrum of alumni achievements.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-4 font-bold text-xl">✓</span>
                <span className="text-gray-600"><strong>Actionable Insights:</strong> We transform raw data into strategic intelligence for decision-making.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-4 font-bold text-xl">✓</span>
                <span className="text-gray-600"><strong>Data Security:</strong> We maintain the highest standards for data privacy and security.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-4 font-bold text-xl">✓</span>
                <span className="text-gray-600"><strong>Trusted by Leaders:</strong> Leading institutions across the country trust edu.cloud with their alumni data.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}