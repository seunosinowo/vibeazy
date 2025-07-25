import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-36 md:pb-24 relative bg-gradient-to-br from-[#f9f2f4] to-white">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6c0f2a] mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Make your customers <span className="text-[#d32f2f]">spend more</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Track your customers' spending. Reward top customers. Sell more.
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {['Restaurants', 'Super Markets', 'Stores', 'Lounges', 'Bars', 'Salons', 'Spas'].map((item, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 bg-[#f8e5ea] text-[#6c0f2a] rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </motion.div>
          
          <motion.button 
            className="px-8 py-3.5 bg-gradient-to-r from-[#6c0f2a] to-[#d32f2f] text-white font-bold rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Join Vibeazy
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6">
            {/* First image - Customer scanning QR code */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl"
              initial={{ y: 20, rotate: -3 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-64 h-64 md:w-72 md:h-72 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center relative">
                <img 
                  src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-full object-cover"
                  alt="Menu"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-center text-sm w-full">
                  Scan. Earn. Repeat.
                </div>
              </div>
            </motion.div>
            
            {/* Second image - Dashboard interface */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl"
              initial={{ y: -20, rotate: 3 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-64 h-64 md:w-72 md:h-72 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center relative">
                
                <img 
                  src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Food"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-center text-sm w-full">
                  Track. Reward. Grow.
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;