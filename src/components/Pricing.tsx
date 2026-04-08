const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: [
        'Up to 3 projects',
        '5GB storage',
        'Basic analytics',
        'Community support',
        'Deploy to 1 domain',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For growing teams and scaling applications',
      features: [
        'Unlimited projects',
        '500GB storage',
        'Advanced analytics',
        'Priority email support',
        'Deploy to 10 domains',
        'Team collaboration',
        'Custom domains',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale applications with custom needs',
      features: [
        'Unlimited everything',
        'Dedicated storage',
        'Real-time analytics',
        '24/7 phone support',
        'Unlimited domains',
        'Advanced security',
        'SLA guarantee',
        'Custom integrations',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always flexible to scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex flex-col h-full transition duration-300 ${plan.popular ? 'bg-green-500 text-gray-900 shadow-2xl scale-105' : 'bg-white border border-gray-200 hover:shadow-lg'}`}
            >
              {plan.popular && (
                <div className="mb-4 inline-block w-fit px-4 py-1 bg-green-400 rounded-full text-sm font-semibold text-gray-900">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-gray-900' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.popular ? 'text-gray-800' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.popular ? 'text-gray-800' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${plan.popular ? 'bg-gray-900 text-green-400 hover:bg-gray-800' : 'bg-green-500 text-white hover:bg-green-600'}`}
              >
                Get Started
              </button>
              <ul className="space-y-4 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={plan.popular ? 'text-gray-900' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;