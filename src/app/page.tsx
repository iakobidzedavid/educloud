'use client';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <HowItWorks />
      <CaseStudies />
      <CTA />
    </div>
  );
}
