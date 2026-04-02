'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About edu.cloud</h1>
        <div className="prose prose-lg max-w-3xl text-gray-700 space-y-6">
          <p>
            edu.cloud is dedicated to helping higher education institutions understand and demonstrate the real-world impact of their education and research programs.
          </p>
          <p>
            We partner with universities and colleges to conduct comprehensive research on alumni outcomes, tracking career progression, entrepreneurial ventures, and professional achievements across diverse industries and geographies.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p>
            To empower educational institutions with data-driven insights into alumni success, enabling them to demonstrate impact, engage stakeholders, and make informed strategic decisions.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accept alumni data in spreadsheet format</li>
            <li>Conduct extensive online research for each alumnus</li>
            <li>Aggregate professional journey data</li>
            <li>Analyze impact metrics including companies founded, jobs created, and capital raised</li>
            <li>Track exit events such as acquisitions, mergers, and IPOs</li>
            <li>Deliver actionable insights for institutional leadership</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}