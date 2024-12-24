import React from 'react';
import { motion } from 'framer-motion';

const quotes = [
  {
    text: "We don't just implement solutions; we craft experiences that transform businesses.",
    author: "Tech Zenith Leadership"
  },
  {
    text: "Understanding your business is our first priority. Technology comes second.",
    author: "Our Approach"
  },
  {
    text: "Innovation is not about technology alone; it's about solving real business challenges.",
    author: "Tech Zenith Philosophy"
  }
];

const ApproachSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" id="approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Approach
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-indigo-800 p-8 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              <div className="text-5xl text-indigo-400 mb-4">"</div>
              <p className="text-lg mb-4">{quote.text}</p>
              <p className="text-sm text-indigo-300 font-semibold">- {quote.author}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-lg text-gray-300"
        >
          <p>
            At Tech Zenith, we start by listening. We immerse ourselves in the unique challenges, goals, and culture of each client, using these insights to craft tailored, scalable solutions that deliver tangible business results. Through collaborative engagement and transparent communication, we ensure that every recommendation is strategically aligned with both current objectives and long-term ambitions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;