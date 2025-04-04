import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Always links to root "/" */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold flex items-center"
            >
              <span className="text-white">The</span>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Gen</span>
              <span className="text-white">FX</span>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/trading/accounts" className="text-gray-300 hover:text-white transition">Trading</Link>
            <Link to="/education/guides" className="text-gray-300 hover:text-white transition">Education</Link>
            <Link to="/about/company" className="text-gray-300 hover:text-white transition">About</Link>
            <Link to="/about/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
          </nav>

          {/* Right side navigation */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/login"
              className="px-4 py-2 text-gray-300 hover:text-white transition"
            >
              Sign In
            </Link>
            <Link 
              to="/register" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg text-xl font-semibold transition shadow-lg hover:shadow-blue-500/20"
            >
              Start Trading
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;