import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
              <p>
                edu.cloud ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, submit a research request, or contact our support team. This may include your name, email address, institution name, and student/alumni data you submit for analysis.
              </p>
              <p>
                We automatically collect certain information about your device when you access our website, including IP address, browser type, operating system, and pages visited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our alumni impact research services</li>
                <li>Process and analyze student/alumni data you submit</li>
                <li>Send you service-related announcements and updates</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p>
                We implement comprehensive security measures to protect your information, including encryption, secure servers, and restricted access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Alumni Data Protection</h2>
              <p>
                When you submit student/alumni data to edu.cloud, we:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Only use the data for the research services you request</li>
                <li>Maintain strict confidentiality of all personal information</li>
                <li>Do not share individual records with third parties without consent</li>
                <li>Provide only aggregated, anonymized results in reports</li>
                <li>Comply with FERPA and other applicable privacy regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. To exercise these rights or if you have questions about our privacy practices, please contact us at privacy@edu.cloud.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by posting a notice on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p>
                <strong>edu.cloud Privacy Team</strong><br />
                Email: privacy@edu.cloud<br />
                Website: www.edu.cloud
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}