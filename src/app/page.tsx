import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import Features from '@/src/components/Features'
import HowItWorks from '@/src/components/HowItWorks'
import Results from '@/src/components/Results'
import CTA from '@/src/components/CTA'
import Footer from '@/src/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Results />
      <CTA />
      <Footer />
    </main>
  )
}
