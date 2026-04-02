'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-20 pb-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Measure Your <span className="text-blue-200">Alumni Impact</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover the real outcomes of your education and research. Track startups, promotions, acquisitions, and more across your entire alumni network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 inline-flex items-center justify-center gap-2 transition">
                Request Demo
                <ArrowRight size={20} />
              </Link>
              <Link href="/how-it-works" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 inline-flex items-center justify-center gap-2 transition">
                Learn More
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-500">
              <div>
                <div className="text-3xl font-bold text-blue-200">1000+</div>
                <div className="text-sm text-blue-100">Institutions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200">500K+</div>
                <div className="text-sm text-blue-100">Alumni Tracked</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200">$2B+</div>
                <div className="text-sm text-blue-100">Impact Measured</div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-400 p-3 rounded-lg">
                    <TrendingUp className="text-emerald-900" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">247 Companies Started</div>
                    <div className="text-sm text-blue-100">By your alumni</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-amber-400 p-3 rounded-lg">
                    <BarChart3 className="text-amber-900" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">1,432 Promotions</div>
                    <div className="text-sm text-blue-100">Leadership advancements</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-pink-400 p-3 rounded-lg">
                    <Users className="text-pink-900" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">38,500 Jobs Created</div>
                    <div className="text-sm text-blue-100">By alumni-led organizations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
