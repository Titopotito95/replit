import React from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaGlobe, FaDownload, FaApple, FaAndroid } from 'react-icons/fa';

function TradingPlatforms() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Trading Platforms
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Trade on your preferred device with our advanced trading platforms
        </motion.p>
        
        <div className="grid md:grid-cols-1 gap-8 mb-16">
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center mb-6">
              <FaGlobe className="text-blue-400 text-4xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Web Trader</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Trade directly from your browser with our powerful web trading platform. No downloads required, access your account from anywhere.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Launch Web Trader
            </button>
          </motion.div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl">
          <div className="flex items-center mb-6">
            <FaMobile className="text-blue-400 text-4xl mr-4" />
            <h2 className="text-2xl font-semibold text-white">Mobile Trading</h2>
          </div>
          <p className="text-gray-300 mb-8">
            Trade on the go with our mobile trading apps. Available for both iOS and Android devices.
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              <FaApple className="mr-2" />
              Download for iOS
            </button>
            <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              <FaAndroid className="mr-2" />
              Download for Android
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradingPlatforms;