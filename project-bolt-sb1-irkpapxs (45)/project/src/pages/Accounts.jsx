import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaArrowUp, FaStar, FaGem } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Accounts() {
  const [totalDeposits, setTotalDeposits] = useState(() => {
    const saved = localStorage.getItem('totalDeposits');
    return saved ? parseFloat(saved) : 0;
  });

  const [accountData, setAccountData] = useState({
    accountId: `STD${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
    leverage: '1:500',
    balance: '0.00',
    equity: '0.00',
    margin: '0.00',
    freeMargin: '0.00',
    marginLevel: '0.00',
    status: 'Pending'
  });

  // Tier determination logic
  const getTierInfo = (depositAmount) => {
    if (depositAmount >= 100000) {
      return {
        type: 'Ultimate',
        badge: '/badges/ultimate.gif',
        emoji: '👑',
        color: 'text-purple-400',
        nextTier: null,
        nextAmount: null
      };
    }
    if (depositAmount >= 50000) {
      return {
        type: 'Diamond',
        badge: '/badges/diamond.gif',
        emoji: '💎',
        color: 'text-blue-400',
        nextTier: 'Ultimate',
        nextAmount: 100000
      };
    }
    if (depositAmount >= 10000) {
      return {
        type: 'Gold',
        badge: '/badges/gold.gif',
        emoji: '✨',
        color: 'text-yellow-400',
        nextTier: 'Diamond',
        nextAmount: 50000
      };
    }
    if (depositAmount >= 5000) {
      return {
        type: 'VIP',
        badge: '/badges/vip.gif',
        emoji: '🧿',
        color: 'text-indigo-400',
        nextTier: 'Gold',
        nextAmount: 10000
      };
    }
    if (depositAmount >= 500) {
      return {
        type: 'Premium',
        badge: '/badges/premium.gif',
        emoji: '💫',
        color: 'text-blue-400',
        nextTier: 'VIP',
        nextAmount: 5000
      };
    }
    return {
      type: 'Standard',
      badge: null,
      emoji: '⭐',
      color: 'text-gray-400',
      nextTier: 'Premium',
      nextAmount: 500
    };
  };

  useEffect(() => {
    // Fetch deposit history from wallet-history.json
    const fetchDepositHistory = async () => {
      try {
        const res = await fetch('/api/wallet-history');
        if (!res.ok) throw new Error('Failed to fetch history');
        const history = await res.json();
        
        // Calculate total completed deposits
        const total = history.reduce((sum, wallet) => {
          if (wallet.status === 'completed') {
            return sum + (wallet.amount || 0);
          }
          return sum;
        }, 0);
        
        setTotalDeposits(total);
        localStorage.setItem('totalDeposits', total.toString());
        
        // Update account data
        setAccountData(prev => ({
          ...prev,
          balance: total.toFixed(2),
          equity: total.toFixed(2),
          freeMargin: total.toFixed(2),
          status: total > 0 ? 'Active' : 'Pending'
        }));
      } catch (err) {
        console.error('Failed to fetch deposit history:', err);
      }
    };

    fetchDepositHistory();
  }, []);

  const tierInfo = getTierInfo(totalDeposits);
  const nextTierProgress = tierInfo.nextAmount 
    ? ((totalDeposits / tierInfo.nextAmount) * 100).toFixed(1)
    : null;

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-xl p-6"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Trading Account</h2>
            <p className="text-gray-400">Manage your trading account and view your tier status</p>
          </div>
          {tierInfo.badge && (
            <div className="flex items-center bg-gray-700/50 p-3 rounded-lg">
              <img 
                src={tierInfo.badge} 
                alt={`${tierInfo.type} badge`} 
                className="w-12 h-12 object-contain"
              />
              <div className="ml-3">
                <p className="text-white font-semibold">{tierInfo.type}</p>
                <p className={`text-sm ${tierInfo.color}`}>{tierInfo.emoji} Tier Account</p>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-700/50 rounded-lg p-4">
            <h3 className="text-gray-400 text-sm mb-1">Total Balance</h3>
            <p className="text-2xl font-bold text-white">${accountData.balance}</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <h3 className="text-gray-400 text-sm mb-1">Account Type</h3>
            <p className="text-2xl font-bold text-white flex items-center">
              {tierInfo.type} <span className="ml-2">{tierInfo.emoji}</span>
            </p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <h3 className="text-gray-400 text-sm mb-1">Leverage</h3>
            <p className="text-2xl font-bold text-white">{accountData.leverage}</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <h3 className="text-gray-400 text-sm mb-1">Status</h3>
            <div className="flex items-center">
              {accountData.status === 'Active' ? (
                <FaCheckCircle className="text-green-400 mr-2" />
              ) : (
                <FaClock className="text-yellow-400 mr-2" />
              )}
              <p className="text-2xl font-bold text-white">{accountData.status}</p>
            </div>
          </div>
        </div>

        {tierInfo.nextTier && (
          <div className="bg-gray-700/20 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <FaArrowUp className="text-blue-400 mr-2" />
                  Next Tier: {tierInfo.nextTier}
                </h3>
                <p className="text-gray-400 mt-1">
                  Deposit ${(tierInfo.nextAmount - totalDeposits).toFixed(2)} more to upgrade
                </p>
              </div>
              <Link
                to="/dashboard/deposit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Make a Deposit
              </Link>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-blue-400">
                    Progress to {tierInfo.nextTier}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-400">
                    {nextTierProgress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${nextTierProgress}%` }}
                  transition={{ duration: 1 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-700/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Account Details</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="pb-4 text-gray-400 font-medium">Account ID</th>
                  <th className="pb-4 text-gray-400 font-medium">Type</th>
                  <th className="pb-4 text-gray-400 font-medium">Leverage</th>
                  <th className="pb-4 text-gray-400 font-medium">Balance</th>
                  <th className="pb-4 text-gray-400 font-medium">Equity</th>
                  <th className="pb-4 text-gray-400 font-medium">Margin</th>
                  <th className="pb-4 text-gray-400 font-medium">Free Margin</th>
                  <th className="pb-4 text-gray-400 font-medium">Margin Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 text-white">{accountData.accountId}</td>
                  <td className="py-4 text-white">{tierInfo.type}</td>
                  <td className="py-4 text-white">{accountData.leverage}</td>
                  <td className="py-4 text-white">${accountData.balance}</td>
                  <td className="py-4 text-white">${accountData.equity}</td>
                  <td className="py-4 text-white">${accountData.margin}</td>
                  <td className="py-4 text-white">${accountData.freeMargin}</td>
                  <td className="py-4 text-white">{accountData.marginLevel}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Accounts;