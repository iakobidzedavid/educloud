import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Impact from '@/components/Impact';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Impact />
      <CTA />
      <Footer />
    </main>
  );
}
