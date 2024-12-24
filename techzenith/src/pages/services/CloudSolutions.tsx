import React from 'react';
import ServiceHeader from '../../components/ServiceHeader';
import { motion } from 'framer-motion';
import CloudServiceCard from '../../components/cloud/CloudServiceCard';
import { azureServices, gcpServices } from '../../data/cloudServices';

const CloudSolutions = () => {
  return (
    <div className="min-h-screen">
      <ServiceHeader
        title="Cloud Solutions"
        description="Scale your infrastructure with enterprise cloud services"
        bgColor="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900"
      />

      <div className="flex-grow">
        <div className="relative">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/35 to-cyan-800/40" />
          </div>
          
          <div className="relative z-10 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                  By offering specialized solutions for both Microsoft Azure and Google Cloud Platform, Tech Zenith ensures that your business can leverage the unique strengths of each platform to achieve your specific goals and drive sustained growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-white mb-4">Microsoft Azure</h2>
                <p className="text-xl text-blue-100">Leverage the power of Microsoft's cloud platform to transform your business</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {azureServices.map((service, index) => (
                  <CloudServiceCard
                    key={index}
                    {...service}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GCP Section */}
        <div className="relative">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?auto=format&fit=crop&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-teal-800/25 to-cyan-800/30" />
          </div>
          
          <div className="relative z-10 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-white mb-4">Google Cloud Platform</h2>
                <p className="text-xl text-emerald-100">Innovate and scale with Google's cutting-edge cloud technology</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gcpServices.map((service, index) => (
                  <CloudServiceCard
                    key={index}
                    {...service}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;