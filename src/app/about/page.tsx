import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About edu.cloud</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              edu.cloud transforms how higher education institutions demonstrate their impact. We combine advanced research technology with deep institutional knowledge to tell the powerful stories of alumni success.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
            <p>
              We empower universities and colleges to quantify and communicate the transformative impact of their education and research on alumni careers and society at large.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8">How We Work</h2>
            <p>
              Our process is straightforward and secure. Institutions provide us with anonymized spreadsheets of student and alumni data. Our proprietary research engine then conducts comprehensive online research for each individual, tracking their professional journeys, achievements, and contributions to society.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8">What We Measure</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Companies Founded:</strong> Entrepreneurial ventures launched by alumni</li>
              <li><strong>Career Advancement:</strong> Promotions and leadership positions achieved</li>
              <li><strong>Job Creation:</strong> Employment opportunities generated through alumni-led organizations</li>
              <li><strong>Capital Raised:</strong> Venture funding secured by alumni entrepreneurs</li>
              <li><strong>Exit Events:</strong> Mergers, acquisitions, and IPOs involving alumni</li>
              <li><strong>Professional Recognition:</strong> Awards, patents, and industry achievements</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Choose edu.cloud?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comprehensive research covering both traditional and emerging platforms</li>
              <li>Privacy-first approach with full data security compliance</li>
              <li>Detailed metrics and insights your stakeholders care about</li>
              <li>Actionable data for strategic planning and institutional improvement</li>
              <li>Expert analysis and customized reporting</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}