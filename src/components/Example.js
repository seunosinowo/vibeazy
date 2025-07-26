import React from 'react';
import { motion } from 'framer-motion';

const Example = () => {
  return (
    <section className="py-20 bg-[#f9f2f4]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -top-16 -left-6 w-24 h-24 bg-[#d32f2f] rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6c0f2a] rounded-full opacity-10"></div>
              
               <div className="flex gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#6c0f2a]">See Vibeazy in Action</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong className="text-[#6c0f2a]">Sarah</strong> visits your restaurant and spends{" "}
                    <strong className="text-[#6c0f2a]">₦30,000</strong>. She scans your QR code after checkout and uploads her receipt.
                  </p>
                  <p>
                    Instantly she earns points based on how much she spent and gets an automated{" "}
                    <strong className="text-green-600">WhatsApp message</strong> each week showing her points.
                  </p>
                  <p>
                    Your restaurant can reward top point earners with <strong className="text-[#6c0f2a]">discounts or freebies</strong> — encouraging Sarah to come back and spend more. It’s a simple way to drive repeat business.
                  </p>
                  <p>
                    <strong className="text-[#6c0f2a]">Sarah wants to come back and earn more points.</strong> That repeat business made easy.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6c0f2a] mb-6">Real Customer Success</h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#6c0f2a] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6c0f2a] mb-2">Direct Customer Connection</h3>
                  <p className="text-gray-700">You now have her contact and can message her via WhatsApp with offers or updates.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#6c0f2a] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6c0f2a] mb-2">Increased Loyalty</h3>
                  <p className="text-gray-700">Sarah wants to come back and earn more points.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#6c0f2a] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6c0f2a] mb-2">Repeat Business</h3>
                  <p className="text-gray-700">That repeat business made easy.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Example;