import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="bg-gradient-to-br from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 mb-12">
            At edu.cloud, we are committed to protecting your privacy and ensuring you have a positive experience.
          </p>
          <div className="space-y-8 text-gray-700">
            <p>Last updated: 2025</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}