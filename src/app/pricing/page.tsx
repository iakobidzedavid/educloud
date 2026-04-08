'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ─── Types ───────────────────────────────────────────────────────────────────

interface PricingTier {
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  ctaHref: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  popular: boolean;
  features: string[];
  notIncluded?: string[];
}

interface FeatureRow {
  feature: string;
  free: string | boolean;
  pro: string | boolean;
  enterprise: string | boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const tiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description:
      'For institutions starting their alumni impact journey. Explore the platform with no commitment.',
    cta: 'Start Free',
    ctaHref: '/contact?plan=free',
    popular: false,
    features: [
      'Up to 100 alumni profiles',
      'Basic alumni search & lookup',
      'Manual CSV data upload',
      'Pre-built outcome summary report',
      'Employment & career snapshot',
      'Email support (48-hr response)',
      '1 report export per quarter',
    ],
    notIncluded: [
      'Automated data enrichment',
      'Accreditation-ready reports',
      'API & SIS integrations',
      'Dedicated success manager',
    ],
  },
  {
    name: 'Pro',
    badge: 'Most Popular',
    price: '$299',
    period: '/month',
    description:
      'For advancement and institutional research teams that need automated tracking and deeper insight.',
    cta: 'Start 30-Day Trial',
    ctaHref: '/contact?plan=pro',
    ctaSecondary: 'Book a Demo',
    ctaSecondaryHref: '/contact?demo=true&plan=pro',
    popular: true,
    features: [
      'Up to 500 alumni records (auto-tracked)',
      'AI-powered LinkedIn & public records enrichment',
      'Salary range & career trajectory analysis',
      'Industry & employer distribution dashboards',
      'Entrepreneurship & startup impact tracking',
      'Accreditation-ready outcome reports (HLC, SACSCOC)',
      'Quarterly automated data refresh',
      'Fundraising propensity scoring',
      'Priority email + chat support (4-hr response)',
      'Unlimited report exports',
      'Team collaboration (up to 5 seats)',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description:
      'For research universities and large institutions requiring unlimited scale, custom integrations, and white-glove service.',
    cta: 'Contact Sales',
    ctaHref: '/contact?plan=enterprise',
    ctaSecondary: 'Request a Proposal',
    ctaSecondaryHref: '/contact?proposal=true',
    popular: false,
    features: [
      'Unlimited alumni records',
      'Real-time continuous data monitoring',
      'Banner, Salesforce, Slate & custom SIS integrations',
      'Full API access for custom workflows',
      'Custom impact metrics & research questions',
      'Annual Impact Report generation (print-ready)',
      'Doctoral outcome tracking & NRC metrics',
      'Board & stakeholder presentation templates',
      'Dedicated Customer Success Manager',
      'SLA with 99.9% uptime guarantee',
      'Custom data governance & FERPA compliance docs',
      'Unlimited team seats',
      'On-site training & implementation support',
    ],
  },
];

const comparisonFeatures: FeatureRow[] = [
  { feature: 'Alumni profiles tracked', free: '100', pro: '500', enterprise: 'Unlimited' },
  { feature: 'Data enrichment (LinkedIn, public records)', free: false, pro: true, enterprise: true },
  { feature: 'Automated quarterly data refresh', free: false, pro: true, enterprise: true },
  { feature: 'Real-time continuous monitoring', free: false, pro: false, enterprise: true },
  { feature: 'Career trajectory analysis', free: false, pro: true, enterprise: true },
  { feature: 'Salary range tracking', free: false, pro: true, enterprise: true },
  { feature: 'Entrepreneurship impact tracking', free: false, pro: true, enterprise: true },
  { feature: 'Fundraising propensity scoring', free: false, pro: true, enterprise: true },
  { feature: 'Accreditation-ready reports (HLC, SACSCOC)', free: false, pro: true, enterprise: true },
  { feature: 'Annual Impact Report (print-ready)', free: false, pro: false, enterprise: true },
  { feature: 'Banner / Salesforce / Slate integration', free: false, pro: false, enterprise: true },
  { feature: 'Full API access', free: false, pro: false, enterprise: true },
  { feature: 'Custom impact metrics', free: false, pro: false, enterprise: true },
  { feature: 'Team seats', free: '1', pro: '5', enterprise: 'Unlimited' },
  { feature: 'Dedicated Customer Success Manager', free: false, pro: false, enterprise: true },
  { feature: 'SLA / uptime guarantee', free: false, pro: false, enterprise: true },
  { feature: 'FERPA compliance documentation', free: 'Basic', pro: 'Standard', enterprise: 'Custom' },
  { feature: 'Report exports per period', free: '1/quarter', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Support response time', free: '48 hrs', pro: '4 hrs', enterprise: '1 hr + phone' },
];

const socialProof = [
  { stat: '94%', label: 'of alumni outcome data captured automatically' },
  { stat: '60×', label: 'faster than manual research methods' },
  { stat: '$180K', label: 'average annual savings vs. consulting firms' },
  { stat: '500+', label: 'institutions researched across the US' },
];

// ─── ROI Calculator ──────────────────────────────────────────────────────────

function ROICalculator() {
  const [alumniCount, setAlumniCount] = useState<number>(2000);
  const [hourlyRate, setHourlyRate] = useState<number>(65);
  const [hoursPerAlumnus, setHoursPerAlumnus] = useState<number>(2.5);
  const [institutionType, setInstitutionType] = useState<string>('research_university');

  const consultingMarkup: Record<string, number> = {
    research_university: 1.4,
    liberal_arts: 1.2,
    community_college: 1.1,
    professional_school: 1.35,
  };

  const planCost: Record<string, number> = {
    research_university: 12000, // ~$1,000/mo enterprise estimate
    liberal_arts: 6000, // ~$500/mo pro/enterprise
    community_college: 3588, // Pro plan $299/mo
    professional_school: 6000,
  };

  const markup = consultingMarkup[institutionType] || 1.3;
  const manualCost = alumniCount * hoursPerAlumnus * hourlyRate * markup;
  const educloudCost = alumniCount > 500 ? planCost[institutionType] : 3588;
  const annualSavings = manualCost - educloudCost;
  const roiPercent = ((annualSavings / educloudCost) * 100).toFixed(0);
  const paybackDays = Math.max(0, Math.round((educloudCost / (annualSavings / 365))));

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

  return (
    <section className="py-20 bg-white" id="roi-calculator">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ROI Calculator
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Much Could You Save?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enter your institution's parameters to see how edu.cloud compares to manual research or consulting firms.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Inputs */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Institution</h3>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Institution Type
                </label>
                <select
                  value={institutionType}
                  onChange={(e) => setInstitutionType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  <option value="research_university">Research University (R1/R2)</option>
                  <option value="liberal_arts">Liberal Arts College</option>
                  <option value="community_college">Community College</option>
                  <option value="professional_school">Professional School</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Alumni Database Size: <span className="text-green-600 font-bold">{alumniCount.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min={500}
                  max={50000}
                  step={500}
                  value={alumniCount}
                  onChange={(e) => setAlumniCount(Number(e.target.value))}
                  className="w-full accent-green-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>500</span>
                  <span>50,000+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Staff Hourly Rate (fully loaded): <span className="text-green-600 font-bold">${hourlyRate}/hr</span>
                </label>
                <input
                  type="range"
                  min={25}
                  max={150}
                  step={5}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-green-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$25</span>
                  <span>$150</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hours per alumni record (manual research): <span className="text-green-600 font-bold">{hoursPerAlumnus} hrs</span>
                </label>
                <input
                  type="range"
                  min={0.5}
                  max={8}
                  step={0.5}
                  value={hoursPerAlumnus}
                  onChange={(e) => setHoursPerAlumnus(Number(e.target.value))}
                  className="w-full accent-green-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0.5 hrs</span>
                  <span>8 hrs</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Your Estimated Savings</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Manual/consulting cost</span>
                  <span className="font-bold text-gray-900">{fmt(manualCost)}/yr</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">edu.cloud annual cost</span>
                  <span className="font-bold text-green-600">{fmt(educloudCost)}/yr</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm font-semibold text-gray-900">Annual savings</span>
                  <span className="font-bold text-2xl text-green-600">{fmt(Math.max(0, annualSavings))}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-green-700">{Math.max(0, Number(roiPercent))}%</p>
                  <p className="text-xs text-green-600 mt-1 font-medium">ROI</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-green-700">
                    {paybackDays < 365 ? `${paybackDays}d` : `${(paybackDays / 365).toFixed(1)}yr`}
                  </p>
                  <p className="text-xs text-green-600 mt-1 font-medium">Payback Period</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4">
                * Estimates based on industry benchmarks. Actual savings vary by institution size and current processes.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact?source=roi_calculator"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors mr-4"
            >
              Get a Custom Quote
            </Link>
            <Link
              href="/contact?demo=true"
              className="inline-block border-2 border-green-600 text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature Comparison Table ─────────────────────────────────────────────────

function FeatureComparisonTable() {
  const CheckIcon = ({ className = '' }: { className?: string }) => (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  const XIcon = () => (
    <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const renderCell = (val: string | boolean) => {
    if (val === true) return <CheckIcon className="text-green-500 mx-auto" />;
    if (val === false) return <XIcon />;
    return <span className="text-sm text-gray-700 font-medium">{val}</span>;
  };

  return (
    <section className="py-20 bg-gray-50" id="compare">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Full Comparison
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included in Each Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A detailed breakdown of every feature so you can choose the right fit for your institution.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full bg-white">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-5 px-6 text-gray-500 font-semibold text-sm w-2/5">Feature</th>
                <th className="text-center py-5 px-4 text-gray-900 font-bold text-base">Free</th>
                <th className="text-center py-5 px-4 bg-green-50 text-green-700 font-bold text-base">Pro</th>
                <th className="text-center py-5 px-4 text-gray-900 font-bold text-base">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-green-50/30 transition-colors`}
                >
                  <td className="py-4 px-6 text-sm text-gray-700">{row.feature}</td>
                  <td className="py-4 px-4 text-center">{renderCell(row.free)}</td>
                  <td className="py-4 px-4 text-center bg-green-50/40">{renderCell(row.pro)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(row.enterprise)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-6">Not sure which plan fits your institution's needs?</p>
          <Link
            href="/contact?source=comparison_table"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ─────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'How does the Free plan differ from Pro?',
    a: 'The Free plan gives you access to basic alumni search and a pre-built outcome summary for up to 100 alumni, uploaded manually. Pro automates everything: data enrichment, quarterly refreshes, accreditation-ready reports, and deeper analytics for up to 500 alumni.',
  },
  {
    q: 'What happens when I reach my alumni record limit on Pro?',
    a: 'We will notify you at 80% capacity. You can either upgrade to Enterprise for unlimited records, or work with our team to prioritize which alumni cohorts to track within your current limit.',
  },
  {
    q: 'How does edu.cloud ensure FERPA compliance?',
    a: 'We only track publicly available information — no FERPA-protected student records are processed. All data is aggregated at the institutional level. Enterprise customers receive a full FERPA compliance memo tailored to their data governance requirements.',
  },
  {
    q: 'Can we integrate with our existing SIS (Banner, Slate, Salesforce)?',
    a: 'Yes, SIS integrations are available on the Enterprise plan. We support Banner, Salesforce Education Cloud, Slate, and can build custom connectors. Pro plan customers can upload data via CSV or use our manual API.',
  },
  {
    q: 'Is there a long-term contract or can we cancel monthly?',
    a: 'Pro plan is billed monthly with no lock-in — cancel any time. Enterprise contracts are typically annual with flexible payment schedules. We offer a 30-day free trial on the Pro plan with no credit card required.',
  },
  {
    q: 'What does "accreditation-ready reports" mean exactly?',
    a: 'We pre-format outcome data according to the templates and data definitions used by major accreditation bodies including HLC, SACSCOC, NECHE, and WSCUC. This reduces preparation time for self-study reports by an estimated 60–80%.',
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about pricing and plans.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${open === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === idx && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  <p className="pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Pricing Page ────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Pricing
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Transparent Pricing for<br />
            <span className="text-green-600">Every Institution</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From community colleges to flagship research universities — choose a plan that matches
            your scale, your budget, and your accreditation requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              No credit card required to start
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              30-day free trial on Pro
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="bg-green-600 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {socialProof.map((item, idx) => (
              <div key={idx}>
                <p className="text-3xl font-bold text-white">{item.stat}</p>
                <p className="text-sm text-green-100 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white" id="plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6 items-start">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 flex flex-col h-full transition-all duration-300 relative ${
                  tier.popular
                    ? 'bg-green-600 text-white shadow-2xl shadow-green-200 scale-105'
                    : 'bg-white border border-gray-200 hover:shadow-lg hover:border-green-200'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${tier.popular ? 'text-green-100' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className={`text-5xl font-bold ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                      {tier.price}
                    </span>
                    <span className={`text-sm pb-2 ${tier.popular ? 'text-green-100' : 'text-gray-500'}`}>
                      {tier.period}
                    </span>
                  </div>
                  {tier.name === 'Pro' && (
                    <p className={`text-xs mt-1 ${tier.popular ? 'text-green-100' : 'text-gray-400'}`}>
                      Billed monthly · No contracts
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3 mb-8">
                  <Link
                    href={tier.ctaHref}
                    className={`w-full py-3 rounded-lg font-bold text-center text-sm transition-colors ${
                      tier.popular
                        ? 'bg-white text-green-700 hover:bg-green-50'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                  {tier.ctaSecondary && (
                    <Link
                      href={tier.ctaSecondaryHref!}
                      className={`w-full py-3 rounded-lg font-semibold text-center text-sm transition-colors border-2 ${
                        tier.popular
                          ? 'border-green-200 text-white hover:bg-green-500'
                          : 'border-green-600 text-green-700 hover:bg-green-50'
                      }`}
                    >
                      {tier.ctaSecondary}
                    </Link>
                  )}
                </div>

                <ul className="space-y-3 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-green-200' : 'text-green-500'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${tier.popular ? 'text-green-50' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {tier.notIncluded && (
                    <>
                      <li className={`pt-2 border-t text-xs font-semibold ${tier.popular ? 'border-green-500 text-green-200' : 'border-gray-100 text-gray-400'}`}>
                        Not included:
                      </li>
                      {tier.notIncluded.map((feature, fIdx) => (
                        <li key={`ni-${fIdx}`} className="flex items-start gap-3">
                          <svg
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-green-400' : 'text-gray-300'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className={`text-sm ${tier.popular ? 'text-green-200' : 'text-gray-400'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            All plans include FERPA-compliant data practices, SSL encryption, and SOC 2 security standards.{' '}
            <Link href="/privacy" className="text-green-600 hover:underline">
              View our Privacy Policy
            </Link>
          </p>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Feature Comparison */}
      <FeatureComparisonTable />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Quantify Your Institution's Impact?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Join institutions already using edu.cloud to demonstrate ROI, support accreditation,
            and fuel donor engagement with data-driven alumni outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?plan=pro&source=pricing_cta"
              className="inline-block bg-white text-green-700 hover:bg-green-50 font-bold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg"
            >
              Start Free 30-Day Trial
            </Link>
            <Link
              href="/contact?demo=true&source=pricing_cta"
              className="inline-block border-2 border-white text-white hover:bg-green-500 font-bold py-4 px-10 rounded-lg transition-colors text-lg"
            >
              Book a Demo
            </Link>
          </div>
          <p className="text-sm text-green-200 mt-6">
            No credit card required. Setup takes less than 10 minutes.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
