'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
              <p className="text-slate-700 leading-relaxed">
                edu.cloud ("we," "us," "our," or "Company") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We collect information you voluntarily provide to us, such as when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Create an account or register for our services</li>
                <li>Upload alumni or student data for research</li>
                <li>Contact us with inquiries or feedback</li>
                <li>Request a demo or consultation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                edu.cloud uses the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Conduct alumni and student impact research</li>
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Ensure legal and regulatory compliance</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
              <p className="text-slate-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
              <p className="text-slate-700 leading-relaxed">
                Our services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-700 leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at privacy@edu.cloud or visit our Contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;