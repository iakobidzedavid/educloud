import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Demonstrate Your Institution's Impact?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Let's help you tell the powerful story of how your education transforms lives and drives innovation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}"
    },
    {
      "file": "src/components/Footer.tsx",
      "data": "import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">edu.cloud</h3>
            <p className="text-sm leading-relaxed">
              Demonstrating the impact of higher education through comprehensive alumni research and analysis.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Alumni Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Impact Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fundraising Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Program Evaluation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@edu.cloud" className="hover:text-white transition-colors">hello@edu.cloud</a></li>
              <li>Washington, D.C.</li>
              <li className="pt-2"><a href="#" className="text-blue-400 hover:text-blue-300">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            &copy; 2024 edu.cloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}