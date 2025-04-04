import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';

function FAQ() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Frequently Asked Questions
        </motion.h1>
        
        <div className="space-y-8">
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <FaQuestionCircle className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Common Questions</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">How do I open an account?</h3>
                <p className="text-gray-300">Click on the "Create Account" button in the top right corner and follow the registration process. You'll need to provide some basic information and verify your identity.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept various payment methods including credit/debit cards, bank transfers, and popular e-wallets.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">What is the minimum deposit?</h3>
                <p className="text-gray-300">The minimum deposit varies by account type, starting from $5 for a Standard Account.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">How can I contact support?</h3>
                <p className="text-gray-300">Our support team is available 24/7 via live chat, email, or phone. You can also visit our Contact Us page for more details.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 TheGenFX. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;