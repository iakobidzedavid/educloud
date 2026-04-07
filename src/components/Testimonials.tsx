'use client';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  institution: string;
  quote: string;
  metrics: {
    label: string;
    value: string;
  }[];
  logo?: string;
  caseStudyUrl?: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 'testimonial-1',
      name: 'Dr. Sarah Mitchell',
      title: 'Vice President of Institutional Advancement',
      institution: 'Midwest Research University',
      quote: 'edu.cloud transformed how we measure and communicate alumni impact. We went from anecdotal success stories to data-driven evidence that demonstrates our institution\'s real-world value. Our board is now seeing the quantified impact of our education.',
      metrics: [
        { label: 'Research Time Reduced', value: '60%' },
        { label: 'Alumni Outcomes Tracked', value: '2,847' }
      ],
      caseStudyUrl: '#'
    },
    {
      id: 'testimonial-2',
      name: 'James Chen',
      title: 'Director of Institutional Research',
      institution: 'East Coast Liberal Arts College',
      quote: 'The comprehensive data pipeline saved us months of manual research. We can now demonstrate tangible entrepreneurial outcomes from our curriculum. This has been invaluable for accreditation and fundraising conversations with major donors.',
      metrics: [
        { label: 'Companies Founded', value: '143' },
        { label: 'Data Accuracy Gain', value: '94%' }
      ],
      caseStudyUrl: '#'
    },
    {
      id: 'testimonial-3',
      name: 'Rebecca Thompson',
      title: 'Chief Strategic Officer',
      institution: 'Urban State University System',
      quote: 'We finally have the evidence to show legislators and stakeholders the ROI of public higher education. edu.cloud provided us with aggregated metrics across 5,000+ alumni that directly support our funding justification and strategic planning.',
      metrics: [
        { label: 'Jobs Created by Alumni', value: '8,400+' },
        { label: 'Alumni Tracked', value: '5,200' }
      ],
      caseStudyUrl: '#'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Testimonials & Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how higher education institutions are using edu.cloud to measure impact, support strategic planning, and communicate value to stakeholders
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden flex flex-col"
            >
              {/* Card Header with Institution Color Accent */}
              <div className="h-1 bg-gradient-to-r from-red-500 to-red-600"></div>

              {/* Quote Section */}
              <div className="p-8 flex-1 flex flex-col">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-gray-700 mb-6 flex-1 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Metrics Section */}
                <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-gray-200">
                  {testimonial.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-red-600 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author Section */}
              <div className="px-8 pb-8 border-t border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.title}
                    </p>
                    <p className="text-sm text-red-600 font-medium mt-1">
                      {testimonial.institution}
                    </p>
                  </div>
                </div>

                {/* Case Study Link */}
                {testimonial.caseStudyUrl && testimonial.caseStudyUrl !== '#' && (
                  <a
                    href={testimonial.caseStudyUrl}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm mt-3 transition-colors"
                  >
                    View Case Study
                    <span className="ml-2">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 sm:p-12 border border-red-100 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Measure Your Impact?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join leading higher education institutions in tracking and communicating alumni outcomes with data-driven evidence.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Schedule a Demo
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm mb-6">
            Trusted by leading higher education institutions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-500 text-sm">
            <div className="py-4 px-2 bg-white rounded border border-gray-200">
              Research Universities
            </div>
            <div className="py-4 px-2 bg-white rounded border border-gray-200">
              Liberal Arts Colleges
            </div>
            <div className="py-4 px-2 bg-white rounded border border-gray-200">
              Community Colleges
            </div>
            <div className="py-4 px-2 bg-white rounded border border-gray-200">
              Professional Schools
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
