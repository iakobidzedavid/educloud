import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">edu.cloud</h3>
            <p className="text-sm">Measuring the impact of education and research for higher institutions worldwide.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-green-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Alumni Research</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Impact Analysis</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Data Reporting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@edu.cloud" className="hover:text-green-400 transition-colors">info@edu.cloud</a></li>
              <li className="text-gray-400">Higher Education Research</li>
              <li className="text-gray-400">Impact Measurement</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 edu.cloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}