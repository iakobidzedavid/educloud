import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Measure Your Impact?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join higher education institutions across the country demonstrating the transformative value of their education and research programs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-lg"
        >
          Request Your Demo Today
        </Link>
      </div>
    </section>
  );
}
"
    },
    {
      "file": "src/components/Footer.tsx",\      "data": "import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ec</span>
              </div>
              <span className="font-bold text-white text-lg">edu.cloud</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Demonstrating the impact of higher education through comprehensive alumni research and metrics.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-400 hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#metrics" className="text-gray-400 hover:text-white transition">
                  Metrics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 edu.cloud. All rights reserved. Helping institutions measure and demonstrate their transformative impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
