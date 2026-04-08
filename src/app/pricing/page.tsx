'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  alumniLimit: string;
  highlight: boolean;
  badge?: string;
  cta: string;
  ctaLink: string;
  features: string[];
  color: 'gray' | 'red' | 'dark';
}

interface FeatureRow {
  feature: string;
  free: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
  category?: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for pilot testing and small institutions exploring alumni impact measurement.',
    alumniLimit: 'Up to 500 alumni',
    highlight: false,
    cta: 'Start Free',
    ctaLink: '/contact',
    color: 'gray',
    features: [
      'Basic alumni outcomes report',
      'Up to 500 alumni tracked',
      'Employment rate metrics',
      'Industry distribution analysis',
      'Standard PDF export',
      'Email support (5-day SLA)',
      'FERPA-compliant data handling',
      'Self-service onboarding',
    ],
  },
  {
    name: 'Pro',
    price: '$2,400',
    period: '/year',
    description: 'Comprehensive tracking for mid-size institutions ready to scale their impact measurement program.',
    alumniLimit: 'Up to 5,000 alumni',
    highlight: true,
    badge: 'Most Popular',
    cta: 'Start Pilot',
    ctaLink: '/contact',
    color: 'red',
    features: [
      'Everything in Free, plus:',
      'Up to 5,000 alumni tracked',
      'Comprehensive outcomes tracking',
      'Salary range & career progression data',
      'Companies founded & jobs created metrics',
      'Geographic distribution maps',
      'Custom reporting templates',
      'Excel & CSV data exports',
      'Priority support (48-hour SLA)',
      'Quarterly strategy reviews',
      'Accreditation-ready reports',
      'Multi-department access (up to 5 users)',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Unlimited scale with dedicated support, API access, and white-label options for large institutions.',
    alumniLimit: 'Unlimited alumni',
    highlight: false,
    cta: 'Contact Sales',
    ctaLink: '/contact',
    color: 'dark',
    features: [
      'Everything in Pro, plus:',
      'Unlimited alumni tracked',
      'Dedicated account manager',
      'REST API access & webhooks',
      'White-label reporting options',
      'Custom metrics & data points',
      'Exit events (M&A, IPOs) tracking',
      'VC funding raised tracking',
      'SSO / enterprise authentication',
      'Unlimited user seats',
      'SLA guarantee (99.9% uptime)',
      '24/7 priority phone & email support',
      'Custom data integrations (SIS, CRM)',
      'Pilot program discount eligible',
    ],
  },
];

const FEATURE_CATEGORIES = [
  {
    category: 'Alumni Coverage',
    rows: [
      { feature: 'Alumni tracked per year', free: '500', pro: '5,000', enterprise: 'Unlimited' },
      { feature: 'Historical data lookback', free: '2 years', pro: '5 years', enterprise: 'Full history' },
      { feature: 'Real-time data updates', free: false, pro: 'Quarterly', enterprise: 'Monthly' },
    ],
  },
  {
    category: 'Outcomes Metrics',
    rows: [
      { feature: 'Employment rate tracking', free: true, pro: true, enterprise: true },
      { feature: 'Industry distribution analysis', free: true, pro: true, enterprise: true },
      { feature: 'Salary range & compensation data', free: false, pro: true, enterprise: true },
      { feature: 'Career progression tracking', free: false, pro: true, enterprise: true },
      { feature: 'Companies founded metrics', free: false, pro: true, enterprise: true },
      { feature: 'Jobs created by alumni', free: false, pro: true, enterprise: true },
      { feature: 'Exit events (M&A, IPOs)', free: false, pro: false, enterprise: true },
      { feature: 'VC funding raised tracking', free: false, pro: false, enterprise: true },
      { feature: 'Geographic distribution maps', free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Reporting & Export',
    rows: [
      { feature: 'Standard PDF reports', free: true, pro: true, enterprise: true },
      { feature: 'Excel / CSV data export', free: false, pro: true, enterprise: true },
      { feature: 'Custom report templates', free: false, pro: true, enterprise: true },
      { feature: 'Accreditation-ready reports', free: false, pro: true, enterprise: true },
      { feature: 'White-label branding', free: false, pro: false, enterprise: true },
      { feature: 'Interactive dashboards', free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Integrations & Access',
    rows: [
      { feature: 'Web dashboard access', free: true, pro: true, enterprise: true },
      { feature: 'REST API access', free: false, pro: false, enterprise: true },
      { feature: 'Webhook support', free: false, pro: false, enterprise: true },
      { feature: 'SIS / CRM data integration', free: false, pro: false, enterprise: true },
      { feature: 'SSO / enterprise auth', free: false, pro: false, enterprise: true },
      { feature: 'User seats', free: '1 user', pro: '5 users', enterprise: 'Unlimited' },
    ],
  },
  {
    category: 'Support & SLA',
    rows: [
      { feature: 'Email support', free: '5-day SLA', pro: '48-hour SLA', enterprise: '24/7 priority' },
      { feature: 'Phone support', free: false, pro: false, enterprise: true },
      { feature: 'Dedicated account manager', free: false, pro: false, enterprise: true },
      { feature: 'Quarterly strategy reviews', free: false, pro: true, enterprise: true },
      { feature: 'Onboarding assistance', free: 'Self-service', pro: 'Guided', enterprise: 'Dedicated' },
      { feature: 'Uptime SLA', free: 'Best effort', pro: '99.5%', enterprise: '99.9%' },
    ],
  },
  {
    category: 'Compliance & Security',
    rows: [
      { feature: 'FERPA-compliant data handling', free: true, pro: true, enterprise: true },
      { feature: 'Minimum cohort size enforcement', free: true, pro: true, enterprise: true },
      { feature: 'Data encryption at rest & transit', free: true, pro: true, enterprise: true },
      { feature: 'Audit logs', free: false, pro: true, enterprise: true },
      { feature: 'Custom data retention policy', free: false, pro: false, enterprise: true },
    ],
  },
];

// ── ROI Calculator ─────────────────────────────────────────────────────────────

function ROICalculator() {
  const [alumniCount, setAlumniCount] = useState(2000);
  const [costPerAlumnus, setCostPerAlumnus] = useState(45);
  const [hoursPerAlumnus, setHoursPerAlumnus] = useState(2.5);
  const [staffRate, setStaffRate] = useState(65);

  const manualResearchCost = alumniCount * costPerAlumnus;
  const manualLabourCost = alumniCount * hoursPerAlumnus * staffRate;
  const totalCurrentCost = manualResearchCost + manualLabourCost;
  const eduCloudCost = alumniCount <= 500 ? 0 : alumniCount <= 5000 ? 2400 : 8400;
  const annualSavings = totalCurrentCost - eduCloudCost;
  const roi = eduCloudCost > 0 ? Math.round((annualSavings / eduCloudCost) * 100) : 100;
  const timeSavedHours = Math.round(alumniCount * hoursPerAlumnus * 0.85);
  const recommendedPlan = alumniCount <= 500 ? 'Free' : alumniCount <= 5000 ? 'Pro' : 'Enterprise';

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="roi-calculator">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-50 px-3 py-1 rounded-full">
            ROI Calculator
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Calculate Your Cost Savings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how much your institution can save by replacing manual alumni research with edu.cloud's automated platform.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Inputs */}
            <div className="p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Your Current Situation</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-700">Alumni to Research Per Year</label>
                    <span className="text-sm font-bold text-red-600">{alumniCount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={50000}
                    step={100}
                    value={alumniCount}
                    onChange={e => setAlumniCount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>100</span>
                    <span>50,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-700">Outsourced Research Cost / Alumnus</label>
                    <span className="text-sm font-bold text-red-600">${costPerAlumnus}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={200}
                    step={5}
                    value={costPerAlumnus}
                    onChange={e => setCostPerAlumnus(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>$5</span>
                    <span>$200</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-700">Staff Hours / Alumnus (Internal)</label>
                    <span className="text-sm font-bold text-red-600">{hoursPerAlumnus}h</span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={10}
                    step={0.5}
                    value={hoursPerAlumnus}
                    onChange={e => setHoursPerAlumnus(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0.5h</span>
                    <span>10h</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-700">Staff Hourly Rate (Fully Loaded)</label>
                    <span className="text-sm font-bold text-red-600">${staffRate}/hr</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={150}
                    step={5}
                    value={staffRate}
                    onChange={e => setStaffRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>$20</span>
                    <span>$150</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-8 bg-gradient-to-br from-red-50 to-white">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Your Projected Savings</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Current outsourced research cost</span>
                  <span className="font-semibold text-gray-800">{fmt(manualResearchCost)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Current internal staff cost</span>
                  <span className="font-semibold text-gray-800">{fmt(manualLabourCost)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-red-200 bg-red-50 px-3 rounded-lg">
                  <span className="text-sm font-bold text-gray-800">Total current annual cost</span>
                  <span className="font-bold text-red-700 text-lg">{fmt(totalCurrentCost)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">edu.cloud annual cost ({recommendedPlan} plan)</span>
                  <span className="font-semibold text-gray-800">{eduCloudCost === 0 ? 'Free' : fmt(eduCloudCost)}</span>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-700 mb-1">{fmt(Math.max(0, annualSavings))}</div>
                  <div className="text-sm font-semibold text-green-600">Annual savings with edu.cloud</div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-green-100">
                      <div className="text-2xl font-bold text-gray-900">{roi > 999 ? '999+' : roi}%</div>
                      <div className="text-xs text-gray-500 mt-0.5">Return on Investment</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-100">
                      <div className="text-2xl font-bold text-gray-900">{timeSavedHours.toLocaleString()}h</div>
                      <div className="text-xs text-gray-500 mt-0.5">Staff hours saved/yr</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-xs text-gray-500 mb-3">
                  Recommended plan: <span className="font-bold text-red-600">{recommendedPlan}</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full text-center"
                >
                  Get Started — Save {fmt(Math.max(0, annualSavings))}
                </Link>
                <p className="text-xs text-gray-400 mt-2">No credit card required. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          * Estimates based on industry averages. Actual savings vary by institution size, current processes, and scope. Consult with our team for a personalized analysis.
        </p>
      </div>
    </section>
  );
}

// ── Feature Check / Cross ──────────────────────────────────────────────────────

function Check({ value }: { value: boolean | string }) {
  if (value === false) {
    return (
      <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    );
  }
  return <span className="text-sm text-gray-700 font-medium">{value}</span>;
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-100 px-3 py-1 rounded-full">
            Pricing
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mt-4 mb-4 leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your institution's size and goals. All plans include FERPA-compliant data handling and automatic impact reporting.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                billingCycle === 'annual' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Annual
              <span className="ml-1.5 text-xs font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">Save 20%</span>
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                billingCycle === 'monthly' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl flex flex-col transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-red-500 text-white shadow-2xl scale-105 border-2 border-red-400'
                    : plan.color === 'dark'
                    ? 'bg-gray-900 text-white border border-gray-700 shadow-lg'
                    : 'bg-white text-gray-900 border border-gray-200 shadow hover:shadow-md'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1">
                  <div className="mb-6">
                    <h2 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : plan.color === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h2>
                    <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-red-100' : plan.color === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-end gap-2 mb-1">
                      <span className={`text-5xl font-black ${plan.highlight ? 'text-white' : plan.color === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {plan.name === 'Pro' && billingCycle === 'monthly' ? '$220' : plan.price}
                      </span>
                      <span className={`text-sm pb-1.5 ${plan.highlight ? 'text-red-200' : plan.color === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                        {plan.name === 'Pro' && billingCycle === 'monthly' ? '/month' : plan.period}
                      </span>
                    </div>
                    <div className={`text-xs font-medium ${plan.highlight ? 'text-red-200' : plan.color === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                      {plan.alumniLimit}
                    </div>
                    {plan.name === 'Pro' && billingCycle === 'annual' && (
                      <div className="mt-1 text-xs text-green-400 font-semibold">Save $240/yr vs. monthly</div>
                    )}
                  </div>

                  <Link
                    href={plan.ctaLink}
                    className={`block w-full text-center font-bold py-3 px-6 rounded-xl mb-8 transition-all ${
                      plan.highlight
                        ? 'bg-white text-red-600 hover:bg-red-50 shadow-md'
                        : plan.color === 'dark'
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }`}
                  >
                    {plan.cta} →
                  </Link>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {feature.startsWith('Everything') ? (
                          <span className={`text-sm font-semibold italic ${plan.highlight ? 'text-red-100' : plan.color === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {feature}
                          </span>
                        ) : (
                          <>
                            <svg
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                plan.highlight ? 'text-red-200' : plan.color === 'dark' ? 'text-red-400' : 'text-red-500'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className={`text-sm ${plan.highlight ? 'text-white' : plan.color === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              {feature}
                            </span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            All plans include FERPA-compliant data handling, data encryption, and minimum cohort size enforcement.{' '}
            <Link href="/contact" className="text-red-600 hover:underline font-medium">
              Questions? Talk to us.
            </Link>
          </p>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Feature Comparison Matrix */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="comparison">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Full Feature Comparison</h2>
            <p className="text-xl text-gray-600">Everything you get with each plan — no hidden limits.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Header Row */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
              <div className="p-5 text-sm font-bold text-gray-500 uppercase tracking-wide">Feature</div>
              {['Free', 'Pro', 'Enterprise'].map((plan, i) => (
                <div
                  key={plan}
                  className={`p-5 text-center font-bold text-sm ${
                    i === 1 ? 'bg-red-500 text-white' : i === 2 ? 'bg-gray-900 text-white' : 'text-gray-900'
                  }`}
                >
                  {plan}
                  {i === 1 && <div className="text-red-200 text-xs font-normal mt-0.5">Most Popular</div>}
                </div>
              ))}
            </div>

            {/* Feature Rows by Category */}
            {FEATURE_CATEGORIES.map((cat, catIdx) => (
              <div key={cat.category}>
                <div className="grid grid-cols-4 bg-gray-50 border-t border-b border-gray-200">
                  <div className="col-span-4 px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                    {cat.category}
                  </div>
                </div>
                {cat.rows.map((row: FeatureRow, rowIdx) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    }`}
                  >
                    <div className="p-4 text-sm text-gray-700 font-medium flex items-center">{row.feature}</div>
                    <div className="p-4 text-center flex items-center justify-center">
                      <Check value={row.free} />
                    </div>
                    <div className="p-4 text-center flex items-center justify-center bg-red-50/40">
                      <Check value={row.pro} />
                    </div>
                    <div className="p-4 text-center flex items-center justify-center bg-gray-900/5">
                      <Check value={row.enterprise} />
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-4 bg-gray-50 border-t border-gray-200">
              <div className="p-5" />
              {['Get Started Free', 'Start Pilot', 'Contact Sales'].map((cta, i) => (
                <div key={cta} className="p-4 text-center">
                  <Link
                    href="/contact"
                    className={`inline-block font-bold text-sm py-2.5 px-5 rounded-lg transition-colors ${
                      i === 1
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : i === 2
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition / Rationale */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Institutions Choose edu.cloud</h2>
            <p className="text-xl text-gray-600">The ROI goes beyond cost savings.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: '10× Faster Than Manual Research',
                description:
                  'Traditional alumni research takes weeks of manual data gathering. edu.cloud delivers comprehensive outcomes reports in days — without sacrificing accuracy.',
                stat: '85% time reduction',
              },
              {
                icon: '💰',
                title: '90% Lower Cost Per Alumnus',
                description:
                  'Manual research consultants charge $40–$100 per alumnus. edu.cloud delivers richer data at a fraction of the cost — as low as $0.48 per alumnus at scale.',
                stat: '$0.48 per alumnus at scale',
              },
              {
                icon: '📋',
                title: 'Accreditation-Ready Reports',
                description:
                  'SACSCOC, HLC, and NECHE require evidence of alumni outcomes. Our pre-formatted reports meet regional accreditor standards out of the box.',
                stat: '100% accreditor-aligned',
              },
              {
                icon: '🔒',
                title: 'FERPA Compliant by Design',
                description:
                  'Built from the ground up for higher education. Minimum cohort size enforcement, no individual PII exposed, and full audit trails on all data access.',
                stat: 'FERPA + GDPR ready',
              },
              {
                icon: '📈',
                title: 'Fundraising & Advancement Intelligence',
                description:
                  'Identify high-value alumni prospects based on career trajectory, companies founded, and funding raised. Turn outcomes data into development opportunities.',
                stat: 'Avg 23% donor identification lift',
              },
              {
                icon: '🤝',
                title: 'Pilot Program Available',
                description:
                  'We\'re currently accepting applications for our Q2 2026 founding cohort. Pilot institutions get dedicated support, reduced pricing, and direct product input.',
                stat: 'Limited spots available',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-full inline-block">
                  {item.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Pricing FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is there really a free plan?',
                a: 'Yes. Our Free plan is permanently free and covers up to 500 alumni. It\'s a great way to see the platform in action before committing. No credit card required.',
              },
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Absolutely. You can upgrade at any time — we\'ll prorate the difference. Downgrades take effect at the end of your billing cycle. Enterprise contracts are annual.',
              },
              {
                q: 'What counts as an "alumnus tracked"?',
                a: 'Each unique alumnus profile we research and maintain in your account counts toward your plan limit. If we update an existing profile, it doesn\'t use additional quota.',
              },
              {
                q: 'Do you offer discounts for non-profits or community colleges?',
                a: 'Yes. As a mission-driven company, we offer 20% discounts for community colleges and not-for-profit institutions. Contact us to learn more.',
              },
              {
                q: 'How does the pilot program pricing work?',
                a: 'Pilot institutions in our Q2 2026 founding cohort receive 60% off Pro plan pricing for the first year in exchange for product feedback and a case study. Limited spots available.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, Mastercard, Amex) and ACH bank transfers for annual contracts. Enterprise customers can be invoiced via PO.',
              },
              {
                q: 'Is my institution\'s data safe?',
                a: 'Yes. We use only publicly available information for research. All data is encrypted at rest and in transit. We are FERPA-compliant, enforce minimum cohort sizes, and never expose individual PII.',
              },
            ].map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-6 hover:border-red-200 transition-colors">
                <h3 className="text-base font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to measure your institution's impact?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the growing cohort of higher education institutions using edu.cloud to quantify alumni success and demonstrate institutional value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Start Free — No Credit Card →
            </Link>
            <Link
              href="#roi-calculator"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              Calculate Your ROI
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Free plan available forever · No contracts on Free or Pro · Enterprise contracts available
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
