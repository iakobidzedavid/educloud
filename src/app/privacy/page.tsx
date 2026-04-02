import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            <div className="space-y-6 text-gray-600">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
                <p className="text-lg">
                  edu.cloud is committed to protecting the privacy and security of all alumni data submitted by higher education institutions. We implement industry-leading security measures including encryption, secure data storage, and strict access controls.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Data</h2>
                <p className="text-lg">
                  Alumni names and information provided are used exclusively for research purposes to identify professional achievements, career milestones, and impact metrics. Data is aggregated at the institutional level and never shared with third parties without explicit consent.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h2>
                <p className="text-lg">
                  We comply with all applicable data protection regulations including FERPA, GDPR, and other relevant privacy laws. Our practices are regularly audited to ensure the highest standards of data security and privacy protection.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <p className="text-lg">
                  For questions about our privacy practices, please contact us at privacy@edu.cloud
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}