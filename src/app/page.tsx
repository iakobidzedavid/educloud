import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">Brand</div>
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to Our Platform</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We provide innovative solutions to help your business grow and succeed in the digital age.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fast & Reliable</h3>
            <p className="text-gray-600">
              Our platform is built for speed and reliability, ensuring your business never misses a beat.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Safe</h3>
            <p className="text-gray-600">
              Enterprise-grade security keeps your data protected with industry-standard encryption.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovative Solutions</h3>
            <p className="text-gray-600">
              Cutting-edge technology and features designed to give you a competitive edge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}