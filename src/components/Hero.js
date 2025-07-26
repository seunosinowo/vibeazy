import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Consolidated business types
  const businessTypes = [
    'Restaurants & Bars',
    'Supermarkets',
    'Salons',
    'Spas',
  ];

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
            Track spending. Reward customers. Sell more.
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {businessTypes.map((item, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1.5 bg-[#f8e5ea] text-[#6c0f2a] rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.button 
            className="px-8 py-3.5 bg-gradient-to-r from-[#6c0f2a] to-[#d32f2f] text-white font-bold rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(108, 15, 42, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Get started
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md">
            {/* Image 1 - Restaurant */}
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-lg aspect-square"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Restaurant"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Image 2 - Retail Store */}
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg aspect-square"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Retail Store"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Image 3 - Lounge */}
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg aspect-square"
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Lounge"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Image 4 - Supermarket */}
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg aspect-square"
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1515&q=80" 
                alt="Supermarket"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="-top-4 -right-4 w-24 h-24 bg-[#f8e5ea] rounded-full z-[-1]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 }}
            />
            <motion.div 
              className="-bottom-4 -left-4 w-20 h-20 bg-[#f8e5ea] rounded-full z-[-1]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;