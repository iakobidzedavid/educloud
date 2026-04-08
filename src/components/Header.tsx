import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-red-600">
              edu.cloud
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-red-600 transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-red-600 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}