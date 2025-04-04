import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 pt-32">
        <motion.h1 
          className="text-6xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Us
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-8">Get in Touch</h2>
            <form className="space-y-8">
              <div>
                <label className="block text-gray-300 mb-3 text-xl">Name</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-xl focus:outline-none focus:border-blue-500" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-3 text-xl">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-xl focus:outline-none focus:border-blue-500" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-3 text-xl">Message</label>
                <textarea 
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-xl focus:outline-none focus:border-blue-500" 
                  rows="6"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-xl font-semibold">
                Send Message
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-12 rounded-xl h-full flex flex-col justify-center">
              <div className="flex items-center mb-8">
                <FaEnvelope className="text-blue-400 text-4xl mr-4" />
                <h3 className="text-3xl font-semibold text-white">Email Support</h3>
              </div>
              <p className="text-gray-300 text-2xl mb-8">Our support team is here to help you 24/7.</p>
              <p className="text-blue-400 text-3xl font-semibold">support@thegenfx.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;