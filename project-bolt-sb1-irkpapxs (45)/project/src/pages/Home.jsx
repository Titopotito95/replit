import React from 'react';
import { motion } from 'framer-motion';
import { FaPercent, FaChartLine, FaMoon, FaChartBar, FaHeadset, FaCertificate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse"></div>
        </div>
        
        <div className="container relative mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 text-transparent bg-clip-text">
              Experience Next-Gen Trading
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              Leading Innovation in Global Markets
            </p>
            <p className="text-xl text-blue-400 mb-8">
              Trade with up to 1:500 leverage • Spreads from 0.0 pips • Fast Execution
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/register" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg text-xl font-semibold transition shadow-lg hover:shadow-blue-500/20 w-full md:w-auto"
            >
              Start Trading Now
            </Link>
            <Link 
              to="/register" 
              className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-xl font-semibold transition border border-gray-700 w-full md:w-auto"
            >
              Try Demo Account
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-4xl font-bold text-white mb-2">50K+</h3>
            <p className="text-gray-400">Active Traders</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-4xl font-bold text-white mb-2">$2B+</h3>
            <p className="text-gray-400">Monthly Volume</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-white mb-2">0.01s</h3>
            <p className="text-gray-400">Execution Speed</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
            <p className="text-gray-400">Support</p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[
            {
              icon: FaPercent,
              title: 'Ultra-Low Commission',
              description: 'Industry-leading rates starting from $2.9 per lot'
            },
            {
              icon: FaChartLine,
              title: 'Tight Spreads',
              description: 'Trade major pairs with spreads from 0.0 pips'
            },
            {
              icon: FaMoon,
              title: 'Swap-Free Trading',
              description: 'Trade without overnight fees on all instruments'
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1" 
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.8 }}
            >
              <div className="text-blue-400 text-4xl mb-4">
                <feature.icon />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: FaChartBar,
              title: '2250+ Trading Instruments',
              description: 'Access a wide range of Forex pairs, Commodities, Indices, and Cryptocurrencies'
            },
            {
              icon: FaHeadset,
              title: '24/7 Expert Support',
              description: 'Get professional assistance in multiple languages whenever you need it'
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 text-center" 
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 1.1 }}
            >
              <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                <feature.icon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contests Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Weekly Trading Contests</h2>
            <p className="text-xl text-blue-100">Join our trading community and win amazing prizes!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-500/30 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-2">$1,000</h3>
              <p className="text-blue-100">Weekly Prize</p>
            </div>
            <div className="bg-blue-500/30 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-2">$5,000</h3>
              <p className="text-blue-100">Monthly Prize</p>
            </div>
            <div className="bg-blue-500/30 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-2">$15,000</h3>
              <p className="text-blue-100">Yearly Prize</p>
            </div>
          </div>
        </motion.div>

        {/* Halal Certificate */}
        <motion.div 
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <div className="text-blue-400 text-5xl mb-4 flex justify-center">
            <FaCertificate />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Halal Certified Trading</h3>
          <p className="text-gray-300">Our trading services are certified Halal by leading Islamic scholars</p>
        </motion.div>
      </div>
    </>
  );
}

export default Home;