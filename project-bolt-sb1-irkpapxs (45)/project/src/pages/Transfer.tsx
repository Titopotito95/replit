import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExchangeAlt, FaWallet, FaDollarSign, FaArrowRight } from 'react-icons/fa';
import DashboardFooter from '../components/DashboardFooter';

export default function Transfer() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('Main Wallet');
  const [to, setTo] = useState('Trading Wallet');
  const [balances, setBalances] = useState({
    'Main Wallet': 5000,
    'Trading Wallet': 0
  });
  const [message, setMessage] = useState('');

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) return setMessage('⚠️ Enter a valid amount.');
    if (from === to) return setMessage('⚠️ Cannot transfer to same wallet.');
    if (balances[from] < amt) return setMessage('⚠️ Insufficient funds.');

    setBalances(prev => ({
      ...prev,
      [from]: prev[from] - amt,
      [to]: prev[to] + amt
    }));

    setMessage(`✅ Transferred $${amt} from ${from} to ${to}`);
    setAmount('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <FaExchangeAlt className="text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Transfer Funds</h2>
              <p className="text-blue-100">Move funds between your wallets</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleTransfer} className="space-y-6">
            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount to Transfer
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaDollarSign className="text-gray-400" />
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter amount"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">USD</span>
                </div>
              </div>
            </div>

            {/* From Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="block w-full py-3 pl-3 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Main Wallet">Main Wallet (${balances['Main Wallet'].toLocaleString()})</option>
                <option value="Trading Wallet">Trading Wallet (${balances['Trading Wallet'].toLocaleString()})</option>
              </select>
            </div>

            {/* To Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="block w-full py-3 pl-3 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Trading Wallet">Trading Wallet (${balances['Trading Wallet'].toLocaleString()})</option>
                <option value="Main Wallet">Main Wallet (${balances['Main Wallet'].toLocaleString()})</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Transfer Now</span>
              <FaArrowRight />
            </button>
          </form>

          {/* Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-lg text-center ${
                message.includes('✅')
                  ? 'bg-blue-50 text-blue-800 border border-blue-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {message}
            </motion.div>
          )}
        </div>
      </div>

      <DashboardFooter />
    </motion.div>
  );
}