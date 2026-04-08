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
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold text-sm">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}