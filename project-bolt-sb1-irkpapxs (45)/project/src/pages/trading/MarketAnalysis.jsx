import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaNewspaper, FaVideo, FaCalendar } from 'react-icons/fa';

function MarketAnalysis() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Market Analysis
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Stay ahead of the markets with our comprehensive analysis and real-time updates
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <FaChartLine className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Technical Analysis</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">EUR/USD Analysis</h3>
                <p className="text-gray-300">Strong resistance at 1.2150, potential breakout expected</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Gold Outlook</h3>
                <p className="text-gray-300">Testing support at $1,850, watch for bounce</p>
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
              <FaNewspaper className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Market News</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Fed Meeting Minutes</h3>
                <p className="text-gray-300">Central bank signals potential rate adjustment</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">NFP Report</h3>
                <p className="text-gray-300">US job market shows strong recovery</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <FaVideo className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Video Analysis</h2>
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-gray-800/50 rounded-lg">
              {/* Video player would go here */}
              <div className="flex items-center justify-center h-48 text-gray-300">
                Latest Market Analysis Video
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
              <FaCalendar className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Economic Calendar</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Upcoming Events</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• USD Interest Rate Decision</li>
                  <li>• EUR GDP Data</li>
                  <li>• JPY Trade Balance</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MarketAnalysis;