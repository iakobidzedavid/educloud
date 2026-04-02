import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
          edu.cloud
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Measure the impact of education on alumni success and society
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}