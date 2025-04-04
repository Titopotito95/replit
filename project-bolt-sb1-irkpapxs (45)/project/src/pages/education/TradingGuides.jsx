import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaChartBar, FaGraduationCap, FaLightbulb } from 'react-icons/fa';

function TradingGuides() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Trading Guides
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Master the markets with our comprehensive trading guides
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <FaBook className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Beginner's Guide</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Introduction to Trading</h3>
                <p className="text-gray-300">Learn the basics of financial markets and trading</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 transition">Start Learning →</button>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Understanding Charts</h3>
                <p className="text-gray-300">Master the art of reading trading charts</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 transition">Start Learning →</button>
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
              <FaChartBar className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Technical Analysis</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Chart Patterns</h3>
                <p className="text-gray-300">Learn to identify and trade chart patterns</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 transition">Start Learning →</button>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Technical Indicators</h3>
                <p className="text-gray-300">Master popular technical indicators</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 transition">Start Learning →</button>
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
              <FaGraduationCap className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Advanced Strategies</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Risk Management</h3>
                <p className="text-gray-300">Learn advanced risk management techniques</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 transition">Start Learning →</button>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Trading Psychology</h3>
                <p className="text-gray-300">Master the mental aspects of trading</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 transition">Start Learning →</button>
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
              <FaLightbulb className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Trading Tips</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-300">
                  <li>• Always use stop-loss orders</li>
                  <li>• Never risk more than you can afford to lose</li>
                  <li>• Keep a trading journal</li>
                  <li>• Stay updated with market news</li>
                  <li>• Practice with a demo account first</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TradingGuides;