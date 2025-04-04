import React from 'react';
import { motion } from 'framer-motion';

function Regulations() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Regulations & Compliance
        </motion.h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg">
            TheGenFX operates under strict regulatory guidelines to ensure the highest standards of security and transparency for our clients.
          </p>
          
          <div className="mt-12 space-y-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Regulatory Framework</h2>
              <p className="text-gray-600">
                We maintain compliance with international financial regulations and implement strict security measures to protect our clients' funds and personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regulations;