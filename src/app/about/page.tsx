import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Co-Founder & CEO',
      bio: 'Former Director of Institutional Research at Stanford University. Sarah spent 12 years helping universities measure and communicate their impact on student outcomes and alumni success.',
      image: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Co-Founder & Chief Research Officer',
      bio: 'PhD in Educational Analytics from MIT. Michael leads our research methodology and has developed proprietary algorithms for tracking alumni career trajectories across industries.',
      image: '👨‍🔬'
    },
    {
      name: 'Priya Patel',
      role: 'VP of Product & Operations',
      bio: 'Previously Head of Product at a leading higher ed SaaS company. Priya brings 8 years of experience building platforms that help institutions optimize their data and reporting processes.',
      image: '👩‍💻'
    },
    {
      name: 'James Walsh',
      role: 'VP of Sales & Partnerships',
      bio: 'Veteran in the education technology space with 15 years of experience working with universities. James maintains relationships with over 200 higher education institutions.',
      image: '👨‍💼'
    },
    {
      name: 'Dr. Elena Vasquez',
      role: 'Head of Data Science',
      bio: 'PhD in Computer Science from Berkeley. Elena leads our AI-powered research infrastructure, processing data on thousands of alumni profiles simultaneously.',
      image: '👩‍🔬'
    },
    {
      name: 'David Kim',
      role: 'Director of Client Success',
      bio: 'Dedicated to ensuring every partner institution maximizes their ROI. David works closely with clients to interpret data, design custom reports, and achieve their strategic goals.',
      image: '👨‍💼'
    }
  ];

  const values = [
    {
      title: 'Accuracy & Integrity',
      description: 'We employ rigorous research methodologies and maintain the highest standards of data accuracy. Our findings are verifiable and defensible.'
    },
    {
      title: 'Institution-First Approach',
      description: 'Your success is our success. We partner with you to align our services with your strategic goals and demonstrate genuine institutional impact.'
    },
    {
      title: 'Privacy & Security',
      description: 'Alumni data is handled with utmost confidentiality. We comply with FERPA, GDPR, and all relevant data protection regulations.'
    },
    {
      title: 'Innovation in Research',
      description: 'We continuously invest in technology and methodology to stay at the forefront of alumni impact measurement and reporting.'
    },
    {
      title: 'Transparency',
      description: 'Our research processes are transparent and well-documented. You understand exactly how we track metrics and arrive at conclusions.'
    },
    {
      title: 'Equity & Inclusion',
      description: 'We track success across diverse alumni populations and help institutions understand impact across all demographic groups.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About edu.cloud</h1>
          <p className="text-lg md:text-xl text-blue-100">Empowering institutions to measure and communicate their transformative impact on alumni and society.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                To provide higher education institutions with comprehensive, accurate, and actionable insights into their alumni's professional achievements and contributions to society.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We believe that institutions should have clear, data-driven evidence of the impact their education has on students' lives and careers. Our mission is to make that measurement possible, affordable, and accessible to universities of all sizes.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                A world where every educational institution can confidently demonstrate the value they create for their graduates and communities.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We envision a future where impact measurement is standard practice in higher education, helping institutions make informed strategic decisions and celebrate the genuine success of their alumni across diverse careers and industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-blue-50 p-8 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Team</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Led by education experts, data scientists, and technology innovators with decades of combined experience in higher education and research.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Partner With edu.cloud?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Specialized Expertise',
                description: 'We focus exclusively on higher education impact measurement. This specialization means deeper insight and more relevant results for your institution.'
              },
              {
                title: 'Proven Track Record',
                description: 'We\'ve completed research projects for over 150 universities, generating insights that have shaped institutional strategy and fundraising campaigns.'
              },
              {
                title: 'Comprehensive Metrics',
                description: 'Beyond simple job placement, we track entrepreneurship, promotions, venture capital raised, acquisitions, IPOs, and societal impact.'
              },
              {
                title: 'Advanced Technology',
                description: 'Our proprietary research platform combines human expertise with AI-powered data analysis to scale research across thousands of alumni efficiently.'
              },
              {
                title: 'Customized Reporting',
                description: 'We work with you to develop reports and dashboards tailored to your institution\'s unique narrative and strategic priorities.'
              },
              {
                title: 'Ongoing Partnership',
                description: 'We\'re not just a vendor. Our team becomes an extension of your institutional research and advancement operations.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white font-bold">
                    ✓
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Measure Your Impact</h2>
          <p className="text-lg mb-8 text-blue-100">Connect with our team to learn how edu.cloud can help your institution tell the story of your alumni's success.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Schedule a Consultation
            </button>
            <Link href="/" className="bg-blue-600 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}