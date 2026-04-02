'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Solutions() {
  const solutions = [
    {
      title: 'Institutional Reporting',
      description: 'Create comprehensive annual reports demonstrating alumni outcomes and institutional impact for boards, donors, and accreditors.',
      use_cases: [
        'Board presentations',
        'Accreditation documentation',
        'Donor engagement materials',
        'Strategic planning reports'
      ]
    },
    {
      title: 'Admissions & Recruitment',
      description: 'Leverage alumni success stories and outcome metrics to attract top-performing students and demonstrate educational value.',
      use_cases: [
        'Prospective student materials',
        'Campus tour talking points',
        'Viewbook content',
        'Application website features'
      ]
    },
    {
      title: 'Marketing & Communications',
      description: 'Showcase your institution's impact with compelling statistics and success stories of your alumni.',
      use_cases: [
        'Recruitment materials',
        'Annual reports',
        'Website content',
        'Social media campaigns'
      ]
    },
    {
      title: 'Career Services',
      description: 'Provide students with real data about post-graduation outcomes, company placements, and salary benchmarks from your alumni.',
      use_cases: [
        'Career pathway visualization',
        'Alumni networking databases',
        'Outcome trend analysis',
        'Program effectiveness assessment'
      ]
    },
    {
      title: 'Development & Advancement',
      description: 'Identify high-achieving alumni for prospect research and demonstrate ROI of institutional investments to major donors.',
      use_cases: [
        'Prospect identification',
        'Donor engagement strategies',
        'Capital campaign justification',
        'Giving trend analysis'
      ]
    },
    {
      title: 'Program Evaluation',
      description: 'Assess the effectiveness of specific academic programs based on alumni career outcomes and professional achievements.',
      use_cases: [
        'Program ROI analysis',
        'Curriculum refinement',
        'Department benchmarking',
        'Innovation identification'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Solutions for Higher Education</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              edu.cloud provides tailored solutions to help your institution demonstrate impact across every stakeholder group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Use Cases:</h4>
                  <ul className="space-y-2">
                    {solution.use_cases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-3 font-bold">✓</span>
                        <span className="text-gray-600">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">Contact our team to discuss how edu.cloud can help your institution demonstrate impact.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Request a Demo
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}