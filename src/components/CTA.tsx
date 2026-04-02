import Link from 'next/link';

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Measure Your Impact?
        </h2>
        <p className="text-lg text-blue-100 mb-8 leading-relaxed">
          Join hundreds of higher education institutions demonstrating the real-world outcomes of their education and research programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-center">
            Schedule a Demo
          </Link>
          <a href="#features" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition font-semibold text-center">
            Learn More
          </a>
        </div>
        <p className="text-blue-100 text-sm mt-8">
          Get started in minutes. Questions? Contact our team.
        </p>
      </div>
    </section>
  );
}