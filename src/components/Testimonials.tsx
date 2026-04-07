const testimonials = [
  {
    quote:
      "edu.cloud transformed how we track our alumni outcomes. Within weeks, we had comprehensive data on career placements, salary trajectories, and entrepreneurial ventures for over 12,000 graduates — data that would have taken our team two years to compile manually. It's been a game-changer for our accreditation reporting.",
    name: "Dr. Sarah Mitchell",
    title: "Vice Provost for Institutional Research",
    institution: "Midwest Research University",
    institutionType: "Research University",
    initials: "SM",
    rating: 5,
  },
  {
    quote:
      "Our advancement team used to struggle to build compelling cases for major donors. With edu.cloud's impact dashboards, we can now show exactly how our liberal arts degree translates into leadership roles, public service, and community impact. Our fundraising campaign exceeded its goal by 34% after we integrated these insights into our donor materials.",
    name: "James Okafor",
    title: "Chief Advancement Officer",
    institution: "Lakewood College",
    institutionType: "Liberal Arts College",
    initials: "JO",
    rating: 5,
  },
  {
    quote:
      "As a community college, we've always struggled to articulate our workforce impact to state legislators and accreditors. edu.cloud gave us verified employment data, wage outcomes, and industry placements for our graduates — organized by program and cohort. The accuracy and speed of the data is remarkable. We renewed our SACSCOC accreditation with confidence.",
    name: "Dr. Maria Reyes",
    title: "President",
    institution: "Riverside Community College",
    institutionType: "Community College",
    initials: "MR",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Trusted by Higher Education
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Institutions Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading universities, liberal arts colleges, and community colleges rely on edu.cloud to measure, communicate, and amplify their educational impact.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col hover:shadow-md transition-shadow"
            >
              <StarRating count={t.rating} />

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed flex-grow mb-6 relative">
                <span className="absolute -top-2 -left-1 text-red-200 text-5xl font-serif leading-none select-none" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="pt-4">{t.quote}</p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {/* Avatar with initials */}
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                  <p className="text-sm text-red-600 font-medium">{t.institution}</p>
                </div>
              </div>

              {/* Institution type badge */}
              <div className="mt-4">
                <span className="inline-block bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1 rounded-full">
                  {t.institutionType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof stat bar */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Institutions Served' },
              { value: '500K+', label: 'Alumni Outcomes Tracked' },
              { value: '10x', label: 'Faster Than Manual Research' },
              { value: '98%', label: 'Data Accuracy Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-red-500 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}