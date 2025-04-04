import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaGlobe, FaChartLine } from 'react-icons/fa';

function EconomicCalendar() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Economic Calendar
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Stay informed with real-time economic events and market-moving indicators
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <FaCalendar className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Today's Events</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-semibold">USD Interest Rate Decision</h3>
                  <span className="text-red-400">High Impact</span>
                </div>
                <p className="text-gray-300">Federal Reserve Rate Decision</p>
                <p className="text-blue-400 text-sm mt-2">19:00 GMT</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-semibold">EUR GDP Data</h3>
                  <span className="text-yellow-400">Medium Impact</span>
                </div>
                <p className="text-gray-300">Quarterly GDP Growth Rate</p>
                <p className="text-blue-400 text-sm mt-2">09:00 GMT</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <FaClock className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Upcoming Events</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-semibold">JPY Trade Balance</h3>
                  <span className="text-yellow-400">Medium Impact</span>
                </div>
                <p className="text-gray-300">Monthly Trade Balance Data</p>
                <p className="text-blue-400 text-sm mt-2">Tomorrow, 23:50 GMT</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-semibold">GBP Employment Data</h3>
                  <span className="text-red-400">High Impact</span>
                </div>
                <p className="text-gray-300">Monthly Employment Change</p>
                <p className="text-blue-400 text-sm mt-2">Tomorrow, 06:00 GMT</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <FaGlobe className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Market Impact</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Impact Levels</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                    <span className="text-gray-300">High Impact: Major market movement expected</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                    <span className="text-gray-300">Medium Impact: Moderate volatility expected</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    <span className="text-gray-300">Low Impact: Minor market reaction expected</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <FaChartLine className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Trading Tips</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-300">
                  <li>• Plan your trades around major economic events</li>
                  <li>• Be aware of increased volatility during news releases</li>
                  <li>• Consider wider stops during high-impact events</li>
                  <li>• Monitor multiple currency pairs for opportunities</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default EconomicCalendar;