import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">edu.cloud</h3>
            <p className="text-sm leading-relaxed">
              Measuring the real impact of education on alumni success and societal contribution.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Research Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Analytics Platform
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Custom Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Data Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">
              &copy; {currentYear} edu.cloud. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.278-1.387-2.278-1.389 0-1.601 1.084-1.601 2.205v4.251H8.75V9.75h2.514v1.123h.035c.35-.664 1.203-1.387 2.476-1.387 2.646 0 3.13 1.74 3.13 4.008v4.844zM4.462 8.357H1.798V16.338h2.664V8.357zm1.164-2.993c.743 0 1.352-.6 1.352-1.342 0-.742-.61-1.344-1.352-1.344-.742 0-1.343.602-1.343 1.344 0 .742.6 1.342 1.343 1.342zm9.015 5.192c0 .742-.602 1.343-1.343 1.343s-1.342-.601-1.342-1.343c0-.743.601-1.344 1.342-1.344s1.343.601 1.343 1.344zm5.834 7.256c0 .017 0 .034-.002.051v.006c0 .017 0 .034-.002.051h.002v.006c-.002.017-.002.034-.002.051v.006c0 .017 0 .034-.002.051h.002v.006c-.001.017-.001.034-.001.051v.006c0 .017 0 .034-.001.051h.001v.006c0 .017 0 .034-.002.051v.006c0 .017 0 .034-.002.051zm0 0" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-4.5-6.5h-1.5A2.5 2.5 0 0011.5 6.5v1.5h-1.5v2h1.5V15h2V10h1.5V8h-1.5V6.5a.5.5 0 01.5-.5h1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}