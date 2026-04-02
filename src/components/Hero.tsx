import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Amazing Web Projects
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              BuildHub is your complete solution for creating modern, scalable web applications. 
              Get everything you need to bring your ideas to life with powerful tools and seamless integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
                Start Building
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-50 transition">
                View Demo
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-400"></div>
                <div className="w-10 h-10 rounded-full bg-purple-400"></div>
                <div className="w-10 h-10 rounded-full bg-pink-400"></div>
              </div>
              <p>Join 10,000+ developers already building with BuildHub</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gray-50 rounded p-4 font-mono text-sm text-gray-700 space-y-2">
                  <p className="text-blue-600">$ npm install buildhub</p>
                  <p className="text-gray-400">creating project...</p>
                  <p className="text-green-600">✓ Project created successfully</p>
                  <p className="text-blue-600">$ npm run dev</p>
                  <p className="text-gray-400">→ http://localhost:3000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;