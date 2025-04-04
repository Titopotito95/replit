import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaCalendar, FaPlay, FaClock } from 'react-icons/fa';

function Webinars() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Trading Webinars
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Join our expert traders for live sessions and enhance your trading skills
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <FaVideo className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Upcoming Webinars</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-semibold">Advanced Chart Patterns</h3>
                  <span className="text-blue-400">Free</span>
                </div>
                <p className="text-gray-300">Master complex chart patterns with our expert trader</p>
                <div className="flex items-center mt-4 text-sm text-gray-400">
                  <FaCalendar className="mr-2" />
                  <span>Dec 15, 2024</span>
                  <FaClock className="ml-4 mr-2" />
                  <span>15:00 GMT</span>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Register Now
                </button>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-semibold">Risk Management Mastery</h3>
                  <span className="text-blue-400">Free</span>
                </div>
                <p className="text-gray-300">Learn essential risk management strategies</p>
                <div className="flex items-center mt-4 text-sm text-gray-400">
                  <FaCalendar className="mr-2" />
                  <span>Dec 18, 2024</span>
                  <FaClock className="ml-4 mr-2" />
                  <span>14:00 GMT</span>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Register Now
                </button>
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
              <FaPlay className="text-blue-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-white">Recent Recordings</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Technical Analysis Basics</h3>
                <p className="text-gray-300">Introduction to technical analysis and chart reading</p>
                <div className="flex items-center mt-4 text-sm text-gray-400">
                  <FaClock className="mr-2" />
                  <span>Duration: 1h 45m</span>
                </div>
                <button className="mt-4 bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">
                  Watch Now
                </button>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Trading Psychology</h3>
                <p className="text-gray-300">Understanding the psychology behind successful trading</p>
                <div className="flex items-center mt-4 text-sm text-gray-400">
                  <FaClock className="mr-2" />
                  <span>Duration: 2h 15m</span>
                </div>
                <button className="mt-4 bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">
                  Watch Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Webinars;