'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for institutions beginning their impact measurement journey',
    price: '$4,999',
    period: 'per year',
    alumni_limit: 'Up to 5,000 alumni',
    features: [
      'Alumni data import and processing',
      'Basic impact metrics dashboard',
      'Annual impact report',
      'Email support',
      'Data privacy compliance (FERPA)',
      'Monthly data updates'
    ],
    cta: 'Get Started',
    featured: false
  },
  {
    name: 'Professional',
    description: 'Most popular choice for comprehensive impact measurement',
    price: '$12,999',
    period: 'per year',
    alumni_limit: 'Up to 25,000 alumni',
    features: [
      'Everything in Starter, plus:',
      'Advanced analytics and segmentation',
      'Quarterly impact reports',
      'Real-time dashboard access',
      'Custom report generation',
      'Priority support',
      'API access for integrations',
      'Weekly data updates'
    ],
    cta: 'Start Free Trial',
    featured: true
  },
  {
    name: 'Enterprise',
    description: 'For large institutions requiring custom solutions',
    price: 'Custom',
    period: 'contact us',
    alumni_limit: 'Unlimited alumni profiles',
    features: [
      'Everything in Professional, plus:',
      'Custom metric definitions',
      'Dedicated account manager',
      'Multi-institutional tracking',
      'Advanced visualization tools',
      'White-label options',
      'Real-time data updates',
      '24/7 priority support'
    ],
    cta: 'Contact Sales',
    featured: false
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your institution's needs. No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border transition-all ${
                plan.featured
                  ? 'border-blue-600 shadow-2xl scale-105 bg-white'
                  : 'border-slate-200 bg-white hover:shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="bg-blue-600 text-white px-6 py-3 text-center font-semibold text-sm">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-slate-900">{plan.price}</p>
                  <p className="text-slate-600 text-sm">{plan.period}</p>
                  <p className="text-sm text-blue-600 font-semibold mt-2">{plan.alumni_limit}</p>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors mb-8 flex items-center justify-center gap-2 ${
                    plan.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </button>

                <div className="space-y-4 border-t border-slate-200 pt-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      {!feature.includes('Everything') && !feature.includes('plus') && (
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      )}
                      {(feature.includes('Everything') || feature.includes('plus')) && (
                        <div className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className={feature.includes('Everything') || feature.includes('plus') ? 'text-slate-500 text-sm' : 'text-slate-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Can I upgrade or downgrade plans?</h3>
              <p className="text-slate-600">Yes, you can change your plan at any time. Changes take effect on your next billing cycle.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Is there a free trial?</h3>
              <p className="text-slate-600">Yes! The Professional plan includes a 30-day free trial. No credit card required to start.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">What if I need custom features?</h3>
              <p className="text-slate-600">Our Enterprise plan offers extensive customization options. Contact our sales team to discuss your specific requirements.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">How often is alumni data updated?</h3>
              <p className="text-slate-600">Data update frequency depends on your plan: weekly for Starter, bi-weekly for Professional, and real-time for Enterprise.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
