import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h2>
                <p>
                  edu.cloud provides research services to higher education institutions. Our platform enables institutions to submit alumni data and receive comprehensive reports on the professional achievements and impact of their graduates.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
                <p>
                  Institutions agree to use edu.cloud services only for legitimate educational and research purposes. Users must have appropriate authorization to submit alumni data and must comply with all applicable privacy laws and institutional policies.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Ownership</h2>
                <p>
                  While institutions retain ownership of their submitted data, they grant edu.cloud a limited license to conduct research and analysis. All aggregated findings remain the property of the submitting institution.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p>
                  edu.cloud provides research services "as is" without warranties. We are not liable for incomplete findings or inaccuracies that may result from publicly available information limitations or individual privacy choices.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <p>
                  For questions about our terms, please contact us at legal@edu.cloud
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