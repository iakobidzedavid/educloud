import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-32 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex items-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
          edu.cloud
        </h1>
        <p className="text-2xl sm:text-3xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          Transform alumni data into comprehensive impact metrics. Measure careers, companies, capital, and the real-world outcomes of your education.
        </p>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}