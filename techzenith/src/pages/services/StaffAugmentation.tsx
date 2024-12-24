import React from 'react';
import { motion } from 'framer-motion';
import ServiceHeader from '../../components/ServiceHeader';
import StaffingCard from '../../components/staffing/StaffingCard';
import SkillsetCard from '../../components/staffing/SkillsetCard';
import { staffingServices, skillsets } from '../../data/staffingFeatures';
import { ArrowRight } from 'lucide-react';

const StaffAugmentation = () => {
  return (
    <div className="min-h-screen">
      <ServiceHeader
        title="IT Staff Augmentation"
        description="Enhance your team with skilled IT professionals"
        bgColor="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900"
      />
      
      <div className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/95 via-gray-900/90 to-emerald-900/95" />
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
                Staff Augmentation Services
              </h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                At Tech Zenith, we understand that managing IT operations efficiently requires the right talent at the right time. Our Staff Augmentation services provide your business with skilled IT professionals who seamlessly integrate with your existing teams.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {staffingServices.map((service, index) => (
                <StaffingCard
                  key={index}
                  {...service}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Comprehensive Skill Sets
              </h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                Access a diverse pool of IT experts with specialized skills across multiple domains
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {skillsets.map((skillset, index) => (
                <SkillsetCard
                  key={index}
                  {...skillset}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Tech Zenith?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Expertise Across Domains",
                    description: "Access to diverse IT talent pool"
                  },
                  {
                    title: "Proven Track Record",
                    description: "Successfully augmented teams across industries"
                  },
                  {
                    title: "Client-Centric Approach",
                    description: "Solutions aligned with your goals"
                  },
                  {
                    title: "Excellence Commitment",
                    description: "Dedicated to exceptional service delivery"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    className="flex items-start space-x-2"
                  >
                    <ArrowRight className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
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

export default StaffAugmentation;