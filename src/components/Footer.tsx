'use client';

import Link from 'next/link';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4 hover:text-blue-400 transition-colors">
              <span className="bg-blue-600 text-white w-8 h-8 rounded flex items-center justify-center text-sm">ec</span>
              edu.cloud
            </Link>
            <p className="text-sm">Demonstrating the impact of higher education through alumni outcome research.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-blue-400 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Data Processing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© {currentYear} edu.cloud. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors" title="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors" title="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
"
    },
    {
      "file": "src/components/Hero.tsx",
      "data": "'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4 inline mr-2" />
              Measure What Matters
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Prove Your Institution's Impact
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Transform alumni data into compelling impact metrics. Track career advancement, entrepreneurship, and societal contribution to demonstrate the value of higher education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Your Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-8">🎓 Trusted by 500+ higher education institutions worldwide</p>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <div>
                    <p className="text-sm text-slate-600">Companies Founded</p>
                    <p className="text-3xl font-bold text-blue-600">2,847</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-xs text-slate-600 mb-1">Jobs Created</p>
                    <p className="text-2xl font-bold text-slate-900">45K+</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-xs text-slate-600 mb-1">VC Raised</p>
                    <p className="text-2xl font-bold text-slate-900">$2.1B</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-xs text-slate-600 mb-1">IPOs & Exits</p>
                    <p className="text-2xl font-bold text-slate-900">156</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-xs text-slate-600 mb-1">Promotions</p>
                    <p className="text-2xl font-bold text-slate-900">18K+</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 text-center">Aggregated metrics from sample institution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"
    },
    {
      "file": "src/components/Features.tsx",
      "data": "'use client';

import { BarChart3, Database, Brain, Shield } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Simple Data Import',
    description: 'Upload spreadsheets with student and alumni names. Our system securely processes your data with enterprise-grade encryption.'
  },
  {
    icon: Brain,
    title: 'Advanced Research',
    description: 'Leveraging vast online sources, we identify careers, achievements, and professional milestones for each individual.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Access a comprehensive dashboard showing aggregated impact metrics updated regularly with new data.'
  },
  {
    icon: Shield,
    title: 'Privacy Protected',
    description: 'Full compliance with FERPA, GDPR, and institutional policies. Your data stays secure with us.'
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose edu.cloud?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Industry-leading technology designed specifically for higher education impact measurement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
"
    },
    {
      "file": "src/components/HowItWorks.tsx",
      "data": "'use client';

import { Upload, Search, BarChart3, FileText, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Data',
    description: 'Securely upload spreadsheets containing your alumni directory. We accept CSV and Excel formats.'
  },
  {
    icon: Search,
    title: 'We Research Each Individual',
    description: 'Our proprietary algorithms search public records, LinkedIn, company registries, and news sources for each person.'
  },
  {
    icon: BarChart3,
    title: 'Aggregate Impact Metrics',
    description: 'We compile findings into meaningful metrics: startups, promotions, capital raised, exits, and job creation.'
  },
  {
    icon: FileText,
    title: 'Access Reports & Dashboard',
    description: 'Get instant access to interactive dashboards and customizable reports demonstrating your institution's impact.'
  }
];

export default function HowItWorks() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A streamlined process to transform your alumni data into actionable impact insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-blue-50 rounded-lg p-8 border border-blue-200 h-full">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full mb-4 mx-auto">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center">{step.title}</h3>
                  <p className="text-slate-600 text-center text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
"
    },
    {
      "file": "src/components/ImpactMetrics.tsx",
      "data": "'use client';

import { Building2, Users, TrendingUp, Award } from 'lucide-react';

const metrics = [
  {
    icon: Building2,
    label: 'Companies Founded',
    description: 'Track entrepreneurship and startup creation across your alumni network'
  },
  {
    icon: Users,
    label: 'Jobs Created',
    description: 'Measure economic impact through employment generated by alumni'
  },
  {
    icon: TrendingUp,
    label: 'Capital Raised',
    description: 'Aggregate venture funding and investment tied to your alumni'
  },
  {
    icon: Award,
    label: 'Exit Events',
    description: 'Document acquisitions, IPOs, and successful company exits'
  }
];

export default function ImpactMetrics() {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Metrics That Matter</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive impact measurement across key dimensions of alumni success and contribution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-8 border border-slate-200 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{metric.label}</h3>
                <p className="text-slate-600 text-sm">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
"
    },
    {
      "file": "src/components/CTA.tsx",
      "data": "'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Demonstrate Your Impact?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join 500+ higher education institutions proving the value of their education and research through alumni outcomes data.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Easy Setup</p>
                <p className="text-sm opacity-80">Upload data in minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Fast Results</p>
                <p className="text-sm opacity-80">Reports in days, not months</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Expert Support</p>
                <p className="text-sm opacity-80">Dedicated account team</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
