import React from 'react';
import { motion } from 'framer-motion';

const Cta = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#6c0f2a] to-[#d32f2f]">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Growing with Vibeazy Today</h2>
          <p className="text-xl text-white/90 mb-10">
            Keep track of your top spenders. Use loyalty to increase foot traffic, boost repeat sales, and build a direct customer channel.
          </p>
          
          <motion.button 
            className="px-8 py-4 bg-white text-[#6c0f2a] font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started with Vibeazy
          </motion.button>
          
          
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;