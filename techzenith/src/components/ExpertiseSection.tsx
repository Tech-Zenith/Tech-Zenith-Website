import React from 'react';
import { Shield, Users, BarChart, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const expertiseItems = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business assets and data.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    bgGradient: "from-indigo-950 to-indigo-900"
  },
  {
    icon: Users,
    title: "CRM Solutions",
    description: "Streamlined customer relationship management for enhanced engagement.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    bgGradient: "from-indigo-900 to-indigo-800"
  },
  {
    icon: BarChart,
    title: "Digital Transformation",
    description: "End-to-end digital solutions for business growth and efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    bgGradient: "from-indigo-800 to-indigo-700"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for modern businesses.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    bgGradient: "from-indigo-700 to-indigo-600"
  }
];

const ExpertiseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-indigo-950 text-white" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.bgGradient} rounded-lg shadow-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="h-48 overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <item.icon className="w-8 h-8 text-indigo-300" />
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-indigo-100">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;