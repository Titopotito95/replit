import React from 'react';
import { motion } from 'framer-motion';

function Company() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Our Company
        </motion.h1>
        
        <motion.div 
          className="prose prose-lg max-w-none text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-300 text-lg mb-6">
            TheGenFX is a leading online trading broker, providing traders worldwide with access to multiple financial markets through cutting-edge technology and exceptional trading conditions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To provide traders with the most advanced trading technology and best-in-class trading conditions, enabling them to achieve their financial goals in the global markets.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To become the world's most trusted and innovative online trading platform, setting new standards in the industry for transparency, technology, and customer service.
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose TheGenFX?</h2>
          
          <ul className="space-y-4 text-gray-300">
            <li>✓ Advanced trading technology</li>
            <li>✓ Competitive trading conditions</li>
            <li>✓ Professional customer support</li>
            <li>✓ Educational resources</li>
            <li>✓ Secure trading environment</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Company;