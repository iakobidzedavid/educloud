'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Features from '@/components/Features';

export default function FeaturesPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
      <Features />
    </div>
  );
}
