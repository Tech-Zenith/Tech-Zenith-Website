import React from 'react';
import { motion } from 'framer-motion';
import ServiceHeader from '../components/ServiceHeader';
import Logo from '../components/Logo';
import EmailButton from '../components/EmailButton';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      <ServiceHeader
        title="Contact Us"
        description="Get in touch with our team of experts"
        bgColor="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12 pb-8 transform scale-[2]"
        >
          <Logo />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
            <p className="text-gray-600">
              We'd love to hear from you! Click the button below to send us an email, 
              and we'll get back to you as soon as possible.
            </p>
            <EmailButton 
              email="contact@techzenith.com.au" 
              className="w-full md:w-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <div className="space-y-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start space-x-3"
                >
                  <MapPin className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600">Tech Zenith</p>
                    <p className="text-gray-600">Ground Floor</p>
                    <p className="text-gray-600">470 St Kilda Rd</p>
                    <p className="text-gray-600">Melbourne VIC 3004</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <Phone className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Mobile</h3>
                    <p className="text-gray-600">+61-447775432</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex items-start space-x-3"
                >
                  <Mail className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@techzenith.com.au</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="flex items-start space-x-3"
                >
                  <Clock className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;