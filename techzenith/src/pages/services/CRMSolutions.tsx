import React from 'react';
import { motion } from 'framer-motion';
import ServiceHeader from '../../components/ServiceHeader';
import CRMFeatureCard from '../../components/crm/CRMFeatureCard';
import { zohoFeatures, hubspotFeatures } from '../../data/crmFeatures';
import { ArrowRight } from 'lucide-react';

const CRMSolutions = () => {
  return (
    <div className="min-h-screen">
      <ServiceHeader
        title="CRM Solutions"
        description="Transform your customer relationships with intelligent CRM systems"
        bgColor="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900"
      />
      
      <div className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/95 via-gray-900/90 to-blue-900/95" />
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                CRM Solutions for Small to Medium Businesses
              </h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                At Tech Zenith, we specialise in delivering tailored Customer Relationship Management (CRM) solutions using industry-leading platforms like Zoho CRM and HubSpot CRM. Our offerings are designed to empower small to medium businesses (SMBs) in Australia to enhance customer relationships, streamline operations, and drive growth.
              </p>
            </motion.div>

            {/* Zoho CRM Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Zoho CRM Solutions</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {zohoFeatures.map((feature, index) => (
                  <CRMFeatureCard
                    key={index}
                    {...feature}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            {/* HubSpot CRM Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">HubSpot CRM Solutions</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hubspotFeatures.map((feature, index) => (
                  <CRMFeatureCard
                    key={index}
                    {...feature}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Tech Zenith for Your CRM Solutions?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Platform Expertise",
                    description: "Certified professionals in both Zoho CRM and HubSpot CRM"
                  },
                  {
                    title: "Customized Approach",
                    description: "Tailored solutions for your specific business needs"
                  },
                  {
                    title: "End-to-End Support",
                    description: "Comprehensive service from assessment to ongoing support"
                  },
                  {
                    title: "Growth Focus",
                    description: "Solutions designed to scale with your business"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    className="flex items-start space-x-2"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMSolutions;