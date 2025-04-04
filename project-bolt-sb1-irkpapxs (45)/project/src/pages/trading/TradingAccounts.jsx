import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

function TradingAccounts() {
  const accounts = [
    {
      name: 'Standard Account',
      minDeposit: '5',
      spread: '1.0',
      leverage: '1:500',
      commission: '0',
      features: [
        'Standard spreads',
        'Basic support',
        'Market execution',
        'All trading instruments',
        'Mobile trading'
      ]
    },
    {
      name: 'Premium Account',
      minDeposit: '500',
      spread: '0.6',
      leverage: '1:500',
      commission: '$3.3',
      features: [
        'Tight spreads',
        'Priority support',
        'Market execution',
        'All trading instruments',
        'Mobile trading',
        'Trading signals'
      ]
    },
    {
      name: 'VIP Account',
      minDeposit: '5000',
      spread: '0.0',
      leverage: '1:500',
      commission: '$2.9',
      features: [
        'Raw spreads',
        'VIP support',
        'Market execution',
        'All trading instruments',
        'Mobile trading',
        'Trading signals',
        'Personal account manager'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Trading Accounts
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Choose the account that best suits your trading style and experience
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {accounts.map((account, index) => (
            <motion.div
              key={account.name}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">{account.name}</h2>
              <div className="mb-6">
                <p className="text-4xl font-bold text-blue-400">${account.minDeposit}</p>
                <p className="text-gray-400">Minimum Deposit</p>
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-gray-400">Spread from</p>
                  <p className="text-xl font-semibold text-white">{account.spread} pips</p>
                </div>
                <div>
                  <p className="text-gray-400">Commission per lot</p>
                  <p className="text-xl font-semibold text-white">{account.commission}</p>
                </div>
                <div>
                  <p className="text-gray-400">Max Leverage</p>
                  <p className="text-xl font-semibold text-white">{account.leverage}</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {account.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <FaCheck className="text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Open Account
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TradingAccounts;