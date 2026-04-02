const steps = [
  {
    number: 1,
    title: 'Submit Alumni Data',
    description: 'Provide us with an anonymized spreadsheet of student and alumni names and contact information. We handle all data securely.'
  },
  {
    number: 2,
    title: 'Comprehensive Research',
    description: 'Our advanced research engine automatically searches for each person across professional networks, news sources, and public records.'
  },
  {
    number: 3,
    title: 'Data Aggregation',
    description: 'We compile research findings into structured data: career positions, companies founded, capital raised, exits, and more.'
  },
  {
    number: 4,
    title: 'Analysis & Insights',
    description: 'Our team analyzes the data to identify trends, calculate impact metrics, and provide actionable insights specific to your institution.'
  },
  {
    number: 5,
    title: 'Custom Reporting',
    description: 'Receive beautifully designed reports and interactive dashboards ready for presentations to donors, regents, and the public.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">A simple, five-step process to measure your impact</p>
        </div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}"
    },
    {
      "file": "src/components/CTA.tsx",
      "data": "export default function CTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Showcase Your Impact?</h2>
        <p className="text-xl text-blue-100 mb-8">Join hundreds of higher education institutions already using edu.cloud to measure and communicate their value.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Schedule a Demo
          </button>
          <button className="bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors text-lg border-2 border-white">
            View Pricing
          </button>
        </div>
        
        <p className="text-blue-100 mt-8">Questions? Email us at hello@edu.cloud</p>
      </div>
    </section>
  );
}"
    },
    {
      "file": "src/components/Footer.tsx",
      "data": "export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ec</span>
              </div>
              <span className="font-bold text-white text-lg">edu.cloud</span>
            </div>
            <p className="text-sm">Measuring the impact of higher education.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 edu.cloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}