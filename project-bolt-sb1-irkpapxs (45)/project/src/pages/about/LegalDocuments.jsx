import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LegalDocuments() {
  const documents = [
    'Terms of Service',
    'Privacy Policy',
    'Risk Disclosure',
    'AML Policy',
    'Refund Policy',
    'Trading Conditions'
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Legal Documents
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {documents.map((doc, index) => (
            <motion.div 
              key={doc}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4">
                <FaFileAlt className="text-blue-400 text-2xl" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{doc}</h3>
                  <button className="text-blue-400 hover:text-blue-300 transition">
                    Download PDF
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LegalDocuments;