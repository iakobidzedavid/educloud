export default function Testimonials() {
  const testimonials = [
    {
      quote: 'edu.cloud helped us quantify what we always knew-that our alumni are builders and leaders across industries. The data was transformative for our capital campaign.',
      author: 'Dr. Sarah Chen',
      title: 'VP of Institutional Advancement',
      institution: 'Research University',
    },
    {
      quote: 'We discovered that our alumni have founded 847 companies and created over 12,000 jobs. These metrics are now central to our strategic positioning.',
      author: 'Michael Rodriguez',
      title: 'President',
      institution: 'Tech-Focused College',
    },
    {
      quote: 'The research was thorough and the dashboard makes it easy for our board to understand alumni impact. Highly recommended for any institution.',
      author: 'Jennifer Liu',
      title: 'Chief Development Officer',
      institution: 'Liberal Arts College',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Higher Education Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how institutions are using edu.cloud to demonstrate and communicate their impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <p className="text-sm text-blue-600 font-medium">{testimonial.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}