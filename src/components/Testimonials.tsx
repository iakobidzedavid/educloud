const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'VP of Institutional Advancement, Tech University',
      image: '👩🎓',
      text: 'edu.cloud helped us quantify what we always knew - our alumni are making a real impact. The data strengthened our capital campaign by 40%.',
    },
    {
      name: 'Michael Chen',
      role: 'Director of Alumni Relations',
      image: '👨💼',
      text: 'Finally, we have concrete metrics to share with donors. The platform is easy to use and the research quality is exceptional.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'President, Research Institution',
      image: '👩💼',
      text: 'The comprehensive alumni data has transformed how we approach strategic planning. We can now demonstrate real economic impact.',
    },
    {
      name: 'James Wilson',
      role: 'Communications Director',
      image: '👨💻',
      text: 'We use edu.cloud data in every fundraising appeal and marketing piece. The metrics are compelling and verifiable.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Chief Development Officer',
      image: '👩💼',
      text: 'This is the tool we didn\'t know we needed. Showing donors exactly how our graduates create jobs and companies has been game-changing.',
    },
    {
      name: 'David Kumar',
      role: 'Director of Institutional Research',
      image: '👨🔬',
      text: 'The platform integrates seamlessly with our systems. The quality of research and accuracy of the data is outstanding.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Higher Education Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hundreds of institutions have transformed their impact measurement with edu.cloud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-yellow-50 rounded-xl p-8 border border-yellow-200 hover:border-yellow-400 hover:shadow-lg transition duration-300"
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
                    star
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