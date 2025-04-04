import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import DashboardFooter from '../components/DashboardFooter';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Get in Touch</h2>
          <form className="space-y-8">
            <div>
              <label className="block text-gray-700 mb-3 text-xl">Name</label>
              <input 
                type="text" 
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-800 text-xl focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-3 text-xl">Email</label>
              <input 
                type="email" 
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-800 text-xl focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-3 text-xl">Message</label>
              <textarea 
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-gray-800 text-xl focus:outline-none focus:border-blue-500" 
                rows={6}
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
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-xl h-full flex flex-col justify-center">
            <div className="flex items-center mb-8">
              <FaEnvelope className="text-blue-400 text-4xl mr-4" />
              <h3 className="text-3xl font-semibold text-gray-800">Email Support</h3>
            </div>
            <p className="text-gray-600 text-2xl mb-8">Our support team is here to help you 24/7.</p>
            <p className="text-blue-400 text-3xl font-semibold">support@thegenfx.com</p>
          </div>
        </motion.div>
      </div>

      <DashboardFooter />
    </motion.div>
  );
}