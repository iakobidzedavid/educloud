import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Platform() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 sm:py-32 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Our Platform
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Comprehensive tools for measuring alumni impact and demonstrating institutional value.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}