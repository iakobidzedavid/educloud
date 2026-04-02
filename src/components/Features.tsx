import { TrendingUp, Users, Award, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Career Progression Tracking',
      description: 'Monitor promotions, job changes, and career advancement across your alumni network.'
    },
    {
      icon: Award,
      title: 'Entrepreneurship Metrics',
      description: 'Track companies founded, venture capital raised, and successful exits like acquisitions and IPOs.'
    },
    {
      icon: Users,
      title: 'Job Creation Impact',
      description: 'Quantify the jobs created by your graduates and their contributions to the economy.'
    },
    {
      icon: BarChart3,
      title: 'Impact Analytics',
      description: 'Generate detailed reports and visualizations demonstrating institutional impact.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 rounded-lg">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Comprehensive Alumni Impact Data
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <Icon className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;