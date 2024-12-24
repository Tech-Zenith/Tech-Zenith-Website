import React from 'react';
import ServiceHeader from '../components/ServiceHeader';
import { motion } from 'framer-motion';
import { Lightbulb, Shield, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive real business value.",
      icon: Lightbulb
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of professional ethics and transparency in all our dealings.",
      icon: Shield
    },
    {
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in every project we undertake.",
      icon: Target
    }
  ];

  return (
    <div>
      <ServiceHeader
        title="About Tech Zenith"
        description="Empowering businesses through innovative technology solutions"
        bgColor="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600">
              Founded in Melbourne, Tech Zenith emerged from a vision to bridge the gap between complex technology solutions and growing businesses. Our journey began with a simple mission: to make enterprise-grade technology accessible and impactful for organizations of all sizes.
            </p>
            <p className="text-gray-600">
              Today, we've grown into a trusted technology partner for businesses across Australia, delivering innovative solutions that drive real business outcomes. Our team of experts brings decades of combined experience across various technology domains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Tech Zenith Team"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-b from-indigo-50 to-white border border-indigo-100 rounded-lg p-8 aspect-[3/4] flex flex-col items-center justify-center text-center hover:border-indigo-200 transition-colors"
              >
                <value.icon className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;