'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import HowItWorks from '@/components/HowItWorks';

export default function HowItWorksPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
      <HowItWorks />
    </div>
  );
}
"
    },
    {
      "file": "src/app/case-studies/page.tsx",
      "data": "'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const allCaseStudies = [
  {
    institution: 'Stanford University',
    logo: '🎓',
    sector: 'Research University',
    metrics: [
      { label: 'Alumni Tracked', value: '45,000' },
      { label: 'Companies Founded', value: '1,247' },
      { label: 'Venture Capital Raised', value: '$127B' },
      { label: 'Jobs Created', value: '145,000' }
    ],
    description: 'Stanford\\'s comprehensive alumni network revealed extraordinary entrepreneurial impact across technology, healthcare, and clean energy sectors.',
    quote: 'edu.cloud revealed the extraordinary impact of our alumni network. The data has transformed how we tell our story to donors and prospective students.',
    author: 'Dr. Jennifer Chen, Director of Alumni Relations',
    results: [
      'Increased donor engagement through concrete impact metrics',
      'Enhanced recruitment with compelling alumni success stories',
      'Identified emerging industry clusters among alumni',
      'Supported strategic planning with data-driven insights'
    ]
  },
  {
    institution: 'MIT',
    logo: '🔬',
    sector: 'Technical Institute',
    metrics: [
      { label: 'Alumni Tracked', value: '32,500' },
      { label: 'Exit Events', value: '89' },
      { label: 'Acquisitions & IPOs', value: '$412B' },
      { label: 'Promotions Tracked', value: '8,900' }
    ],
    description: 'MIT\\'s alumni network demonstrated significant influence in acquisition and IPO markets, with substantial corporate exit valuations.',
    quote: 'The comprehensive research and validation process gave us confidence in the data. We\\'ve used these insights in strategic planning and institutional marketing.',
    author: 'Prof. Michael Rodriguez, VP of Institutional Advancement',
    results: [
      'Validated alumni impact in M&A transactions',
      'Improved institutional reputation positioning',
      'Enhanced capital campaign messaging',
      'Strengthened partnerships with industry leaders'
    ]
  },
  {
    institution: 'Harvard Business School',
    logo: '📊',
    sector: 'Business School',
    metrics: [
      { label: 'Alumni Tracked', value: '28,000' },
      { label: 'CEO Positions', value: '342' },
      { label: 'Board Positions', value: '2,156' },
      { label: 'Industries Impacted', value: '47' }
    ],
    description: 'HBS alumni hold significant leadership positions across diverse industries, demonstrating the school\\'s impact on global business leadership.',
    quote: 'This is the most comprehensive picture of our alumni impact we\\'ve ever had. It\\'s invaluable for our development and marketing strategies.',
    author: 'Sarah Mitchell, Chief Marketing Officer',
    results: [
      'Showcased leadership pipeline across Fortune 500 companies',
      'Strengthened board recruitment and placement narrative',
      'Enhanced development efforts with concrete metrics',
      'Improved rankings and reputation positioning'
    ]
  },
  {
    institution: 'UC Berkeley',
    logo: '🏛️',
    sector: 'Public Research University',
    metrics: [
      { label: 'Alumni Tracked', value: '67,000' },
      { label: 'Patents Filed', value: '12,456' },
      { label: 'Startups Founded', value: '3,421' },
      { label: 'Global Impact', value: '172 countries' }
    ],
    description: 'Berkeley\\'s alumni network showed remarkable global reach with significant contributions to innovation, entrepreneurship, and scientific advancement.',
    quote: 'edu.cloud helped us quantify what we always knew—Berkeley alumni are changing the world. The data supports our mission and strategic initiatives.',
    author: 'Dr. Robert Thompson, Chancellor\\'s Office',
    results: [
      'Demonstrated global research impact',
      'Supported state funding and policy advocacy',
      'Enhanced alumni engagement campaigns',
      'Identified collaborative research opportunities'
    ]
  },
  {
    institution: 'Northwestern University',
    logo: '🎭',
    sector: 'Private Research University',
    metrics: [
      { label: 'Alumni Tracked', value: '38,500' },
      { label: 'Media/Tech Leaders', value: '564' },
      { label: 'Series A+ Funding', value: '$47B' },
      { label: 'Promotions', value: '6,789' }
    ],
    description: 'Northwestern\\'s alumni excel in media, technology, and entrepreneurship, with particular strength in digital innovation and entertainment industries.',
    quote: 'The insights from edu.cloud have been instrumental in positioning Northwestern as a leader in innovation and entrepreneurship.',
    author: 'Michelle Rodriguez, VP of University Relations',
    results: [
      'Strengthened technology and media industry connections',
      'Enhanced recruitment in entrepreneurship programs',
      'Supported naming opportunity cultivation',
      'Improved alumni network engagement'
    ]
  },
  {
    institution: 'Duke University',
    logo: '👑',
    sector: 'Private Research University',
    metrics: [
      { label: 'Alumni Tracked', value: '52,000' },
      { label: 'Healthcare Leaders', value: '427' },
      { label: 'Venture Funding', value: '$83B' },
      { label: 'C-Suite Positions', value: '891' }
    ],
    description: 'Duke alumni demonstrate significant leadership in healthcare, life sciences, and venture capital, reflecting the university\\'s academic strengths.',
    quote: 'edu.cloud validated our competitive position and provided the data we needed for our strategic initiatives and capital campaign.',
    author: 'Dr. James Patterson, VP of Development',
    results: [
      'Strengthened healthcare industry partnerships',
      'Enhanced life sciences funding narratives',
      'Supported major gift cultivation',
      'Improved strategic positioning in venture ecosystems'
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading institutions are using edu.cloud to measure, track, and showcase their alumni impact across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCaseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{study.logo}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{study.institution}</h3>
                    <p className="text-sm text-gray-500">{study.sector}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{study.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                  {study.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
                      <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                    </div>
                  ))}
                </div>
                
                <blockquote className="mb-4">
                  <p className="text-gray-700 italic text-sm mb-3 leading-relaxed">"{study.quote}"</p>
                  <footer className="text-xs font-semibold text-gray-900">— {study.author}</footer>
                </blockquote>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-xs font-bold text-blue-900 mb-2">Key Results:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    {study.results.slice(0, 2).map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
""
    },
    {
      "file": "src/app/contact/page.tsx",
      "data": "'use client';

import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    setSubmitted(true);
    setFormData({ name: '', email: '', institution: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to measure your alumni impact? Contact our team for a demo or to discuss your institution's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-lg h-fit">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600"><a href="mailto:info@edu.cloud" className="hover:text-blue-600">info@edu.cloud</a></p>
                  <p className="text-gray-600"><a href="mailto:demo@edu.cloud" className="hover:text-blue-600">demo@edu.cloud</a></p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-lg h-fit">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (800) EDU-CLOUD</p>
                  <p className="text-gray-600">+1 (650) 555-0123</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-lg h-fit">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">123 Innovation Drive</p>
                  <p className="text-gray-600">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-4">Response Time</h3>
              <p className="text-gray-700 mb-4">
                Our team typically responds to inquiries within 24 hours during business hours.
              </p>
              <p className="text-sm text-gray-600">
                For urgent matters, please call our main line and ask for the demo team.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-emerald-800 font-semibold">✓ Message sent successfully!</p>
                  <p className="text-emerald-700 text-sm mt-1">We'll be in touch shortly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@institution.edu"
                  />
                </div>
                
                <div>
                  <label htmlFor="institution" className="block text-sm font-bold text-gray-900 mb-2">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your University or College"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us about your institution and your goals..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
""
    },
    {
      "file": "package.json",
      "data": "{
  \\"name\\": \\"edu-cloud\\",
  \\"version\\": \\"0.1.0\\",
  \\"private\\": true,
  \\"scripts\\": {
    \\"dev\\": \\"next dev\\",
    \\"build\\": \\"next build\\",
    \\"start\\": \\"next start\\",
    \\"lint\\": \\"next lint\\"
  },
  \\"dependencies\\": {
    \\"next\\": \\"^14.0.0\\",
    \\"react\\": \\"^18.2.0\\",
    \\"react-dom\\": \\"^18.2.0\\",
    \\"lucide-react\\": \\"^0.294.0\\"
  },
  \\"devDependencies\\": {
    \\"typescript\\": \\"^5.3.0\\",
    \\"@types/node\\": \\"^20.10.0\\",
    \\"@types/react\\": \\"^18.2.0\\",
    \\"@types/react-dom\\": \\"^18.2.0\\",
    \\"tailwindcss\\": \\"^3.3.0\\",
    \\"postcss\\": \\"^8.4.31\\",
    \\"autoprefixer\\": \\"^10.4.16\\"
  }
}
""
    },
    {
      "file": "tsconfig.json",
      "data": "{
  \\"compilerOptions\\": {
    \\"target\\": \\"ES2020\\",
    \\"lib\\": [\\"ES2020\\", \\"DOM\\", \\"DOM.Iterable\\"],
    \\"jsx\\": \\"preserve\\",
    \\"module\\": \\"ESNext\\",
    \\"moduleResolution\\": \\"bundler\\",
    \\"allowImportingTsExtensions\\": true,
    \\"resolveJsonModule\\": true,
    \\"strict\\": true,
    \\"noEmit\\": true,
    \\"esModuleInterop\\": true,
    \\"skipLibCheck\\": true,
    \\"forceConsistentCasingInFileNames\\": true,
    \\"isolatedModules\\": true,
    \\"incremental\\": true,
    \\"baseUrl\\": \\".\\",
    \\"paths\\": {
      \\"@/*\\": [\\"./*\\"]
    }
  },
  \\"include\\": [\\"next-env.d.ts\\", \\"**/*.ts\\", \\"**/*.tsx\\"],
  \\"exclude\\": [\\"node_modules\\"]
}
"