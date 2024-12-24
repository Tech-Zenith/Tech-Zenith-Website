import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import EmailButton from './EmailButton';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-600">
              Ready to transform your business with innovative technology solutions? 
              Get in touch with our team of experts today.
            </p>
            <EmailButton email="contact@techzenith.com.au" />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Location</h3>
                  <p className="text-gray-600">Tech Zenith</p>
                  <p className="text-gray-600">Ground Floor</p>
                  <p className="text-gray-600">470 St Kilda Rd</p>
                  <p className="text-gray-600">Melbourne VIC 3004</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Mobile</h3>
                  <p className="text-gray-600">+61-447775432</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;