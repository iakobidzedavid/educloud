export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Institutions Are Saying</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real institutions — shared as our pilot program progresses.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-sm">
          {/* Clock / coming-soon icon */}
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Customer Stories — Coming Soon
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Coming soon: Customer stories from pilot institutions. We&apos;ll share real results as
            our pilot program progresses.
          </p>

          {/* Pilot status badge */}
          <span className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-sm font-medium px-4 py-2 rounded-full border border-red-200">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Pilot program currently enrolling institutions
          </span>
        </div>

        {/* Social proof placeholder row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { label: 'Pilot institutions', value: 'Enrolling now' },
            { label: 'Alumni tracked', value: 'Starting soon' },
            { label: 'Results expected', value: 'Q2 2026' },
          ].map((item) => (
            <div key={item.label} className="p-6 bg-white rounded-xl border border-gray-200">
              <p className="text-2xl font-bold text-red-500 mb-1">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
