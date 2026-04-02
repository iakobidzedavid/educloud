import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Page Header */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Discover the mission, values, and story behind our company.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4">
                Founded in 2015, our company emerged from a simple vision: to create innovative solutions that empower businesses to achieve their full potential. What started as a small team of passionate developers has grown into a leading platform trusted by organizations across the globe.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                We believe in the power of technology to drive positive change. Our journey has been marked by continuous innovation, unwavering commitment to quality, and deep partnerships with our customers.
              </p>
              <p className="text-lg text-slate-600">
                Today, we serve thousands of businesses in more than 50 countries, helping them streamline operations, reduce costs, and accelerate growth.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">8+</div>
                <p className="text-slate-600 text-lg">Years of Innovation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Our Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission</h3>
                <p className="text-slate-600 text-lg">
                  To empower businesses of all sizes with intelligent, user-friendly solutions that unlock their potential and drive sustainable growth in an increasingly digital world.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
                <p className="text-slate-600 text-lg">
                  To be the most trusted and innovative technology partner, recognized globally for transforming how businesses operate and creating lasting value for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push boundaries and embrace new ideas to create breakthrough solutions.'
              },
              {
                title: 'Integrity',
                description: 'We conduct business with honesty, transparency, and strong ethical principles.'
              },
              {
                title: 'Excellence',
                description: 'We strive for the highest quality in everything we do and deliver exceptional results.'
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and building strong partnerships with clients.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Stats */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '5000+', label: 'Active Customers' },
                { number: '150+', label: 'Team Members' },
                { number: '50+', label: 'Countries Served' },
                { number: '99.9%', label: 'Uptime Guarantee' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <p className="text-slate-300 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Chief Executive Officer',
                bio: 'Visionary leader with 15+ years of experience in tech innovation and business strategy.'
              },
              {
                name: 'Michael Chen',
                role: 'Chief Technology Officer',
                bio: 'Expert software architect passionate about building scalable, secure solutions.'
              },
              {
                name: 'Emma Williams',
                role: 'Chief Operating Officer',
                bio: 'Strategic thinker focused on operational excellence and customer satisfaction.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-32"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Join Our Growing Community</h2>
            <p className="text-lg mb-8 opacity-90">Experience the difference that innovation and customer-centric solutions can make.</p>
            <a
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}