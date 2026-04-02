const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager at TechStart',
      image: '👩‍💼',
      text: 'BuildHub transformed how we develop. What used to take weeks now takes days. The team collaboration features are game-changing.',
    },
    {
      name: 'Michael Chen',
      role: 'Full Stack Developer',
      image: '👨‍💻',
      text: 'I\'ve tried many platforms, but BuildHub stands out. The performance is incredible, and the documentation is fantastic. Highly recommended!',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Startup Founder',
      image: '👩‍🏫',
      text: 'As a founder, I need tools that scale with my business. BuildHub grew with us from day one. Their support team is exceptional.',
    },
    {
      name: 'James Wilson',
      role: 'CTO at DataCorp',
      image: '👨‍💼',
      text: 'The security and reliability are unmatched. Our enterprise needs were met without compromises. Best investment we\'ve made.',
    },
    {
      name: 'Lisa Anderson',
      role: 'UI/UX Designer',
      image: '👩‍🎨',
      text: 'Beautiful, intuitive interface. The customization options let me create exactly what I envisioned. Love the attention to detail.',
    },
    {
      name: 'David Kumar',
      role: 'DevOps Engineer',
      image: '👨‍🔧',
      text: 'Integration with our existing tools was seamless. The API documentation is clear, and deployment is a breeze.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Loved by Developers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their projects with BuildHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;