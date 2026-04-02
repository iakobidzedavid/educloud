'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Demonstrate Your Institution's Impact
            </h1>
            <p className="text-xl opacity-95 mb-8 leading-relaxed">
              Transform alumni data into compelling evidence of educational success. Track entrepreneurship, career advancement, and economic impact across your graduate network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                Request a Demo
              </Link>
              <Link href="/features" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-blue-900">📊</div>
                <div>
                  <p className="font-semibold">Companies Founded</p>
                  <p className="text-opacity-80">Track alumni entrepreneurship</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center font-bold text-blue-900">💼</div>
                <div>
                  <p className="font-semibold">Career Advancement</p>
                  <p className="text-opacity-80">Measure promotions and growth</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center font-bold text-blue-900">💰</div>
                <div>
                  <p className="font-semibold">Capital Raised</p>
                  <p className="text-opacity-80">Quantify economic impact</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center font-bold text-blue-900">🎯</div>
                <div>
                  <p className="font-semibold">Exit Events</p>
                  <p className="text-opacity-80">Track IPOs, M&As, acquisitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"
    },
    {
      "file": "src/components/Features.tsx",
      "data": "'use client'

export default function Features() {
  const features = [
    {
      title: 'Data Upload & Processing',
      description: 'Simply upload your alumni spreadsheet. Our system processes names and begins comprehensive research automatically.',
      icon: '📤',
    },
    {
      title: 'Research at Scale',
      description: 'We conduct extensive online research on each individual, discovering career achievements across professional networks, media, and public records.',
      icon: '🔬',
    },
    {
      title: 'Impact Metrics',
      description: 'Aggregate meaningful outcomes: companies founded, jobs created, promotions earned, venture capital raised, and career landmarks.',
      icon: '📈',
    },
    {
      title: 'Exit Event Tracking',
      description: 'Identify significant milestones including IPOs, acquisitions, mergers, and other transformational career events among your alumni.',
      icon: '🚀',
    },
    {
      title: 'Cohort Analysis',
      description: 'Compare metrics across graduation years, academic programs, and demographics to understand what drives alumni success.',
      icon: '🎓',
    },
    {
      title: 'Board-Ready Reports',
      description: 'Receive comprehensive, visually compelling reports that demonstrate institutional value and impact for leadership presentations.',
      icon: '📊',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How edu.cloud Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">A comprehensive approach to measuring and demonstrating educational impact through alumni success tracking</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
"
    },
    {
      "file": "src/components/HowItWorks.tsx",
      "data": "'use client'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Submit Your Data',
      description: 'Upload a spreadsheet containing names and basic information about your students and alumni.',
    },
    {
      number: '2',
      title: 'Comprehensive Research',
      description: 'Our team conducts extensive online research to build detailed professional profiles for each individual.',
    },
    {
      number: '3',
      title: 'Data Aggregation',
      description: 'We compile individual achievements into cohort-level metrics and trend analysis.',
    },
    {
      number: '4',
      title: 'Report Generation',
      description: 'Receive detailed reports showing impact metrics, case studies, and institutional value.',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">From data to insights in four straightforward steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
"
    },
    {
      "file": "src/components/Results.tsx",
      "data": "'use client'

export default function Results() {
  const metrics = [
    {
      label: 'Startups Founded',
      value: '1,200+',
      description: 'by tracked alumni',
    },
    {
      label: 'Capital Raised',
      value: '$5.2B',
      description: 'through alumni ventures',
    },
    {
      label: 'C-Level Positions',
      value: '3,400+',
      description: 'held by graduates',
    },
    {
      label: 'Jobs Created',
      value: '45,000+',
      description: 'by alumni-led companies',
    },
  ]

  return (
    <section className="py-20 px-4 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Real Impact, Real Results</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Aggregated metrics from institutions using edu.cloud demonstrate substantial alumni achievement and economic impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{metric.value}</div>
              <p className="text-lg font-semibold mb-1">{metric.label}</p>
              <p className="opacity-80 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
"
    },
    {
      "file": "src/components/CTA.tsx",
      "data": "'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Demonstrate Your Impact?</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Join leading institutions using edu.cloud to showcase alumni success and institutional value to stakeholders, donors, and accreditors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/demo" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Request a Demo
          </Link>
          <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  )
}
"
    },
    {
      "file": "src/components/Footer.tsx",
      "data": "'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">e</div>
              <span className="text-xl font-bold text-white">edu.cloud</span>
            </div>
            <p className="text-sm opacity-80">Demonstrating the impact of higher education through alumni success tracking.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors">Request Demo</Link></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 edu.cloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
"
    },
    {
      "file": "src/app/demo/page.tsx",
      "data": "import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export default function Demo() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Request a Demo</h1>
            <p className="text-xl opacity-90">See how edu.cloud can help your institution measure and demonstrate impact</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Smith" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Institution Name</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your University" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Your Role</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Select your role</option>
                  <option>Institutional Research Director</option>
                  <option>Alumni Relations Director</option>
                  <option>Advancement Officer</option>
                  <option>Academic Administrator</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Number of Alumni to Track</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Select a range</option>
                  <option>1,000 - 5,000</option>
                  <option>5,000 - 10,000</option>
                  <option>10,000 - 25,000</option>
                  <option>25,000 - 50,000</option>
                  <option>50,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Tell us about your needs</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="What specific impact metrics are most important to your institution?"></textarea>
              </div>

              <div className="flex items-start">
                <input type="checkbox" id="privacy" className="mt-1" />
                <label htmlFor="privacy" className="ml-3 text-sm text-gray-700">
                  I agree to share my information with edu.cloud to learn more about their services
                </label>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Request Demo
              </button>

              <p className="text-center text-sm text-gray-600 text-opacity-80">
                We'll reach out within 1 business day to schedule your personalized demo
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
"
    },
  ]
}
