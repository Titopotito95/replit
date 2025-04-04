import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaBitcoin, FaEthereum, FaDollarSign, FaArrowRight } from 'react-icons/fa';
import { SiTether, SiRipple } from 'react-icons/si';
import DashboardFooter from '../components/DashboardFooter';

export default function Withdraw() {
  const [amount, setAmount] = useState('');
  const [crypto, setCrypto] = useState('');
  const [destination, setDestination] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !crypto || !destination) {
      alert('Please fill out all fields');
      return;
    }
    setSubmitted(true);
  };

  const getCryptoIcon = (cryptoName: string) => {
    switch (cryptoName) {
      case 'USDT TRC20':
      case 'USDT ERC20':
        return <SiTether className="text-2xl text-blue-500" />;
      case 'BTC':
        return <FaBitcoin className="text-2xl text-orange-500" />;
      case 'ETH':
        return <FaEthereum className="text-2xl text-purple-500" />;
      case 'XRP':
        return <SiRipple className="text-2xl text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <FaWallet className="text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Withdraw Funds</h2>
              <p className="text-blue-100">Request a withdrawal to your wallet</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleWithdraw} className="space-y-6">
            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount to Withdraw
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

            {/* Crypto Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Cryptocurrency
              </label>
              <select
                value={crypto}
                onChange={(e) => setCrypto(e.target.value)}
                className="block w-full py-3 pl-3 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Choose withdrawal method</option>
                <option value="USDT TRC20">USDT (TRC20) - Lowest fees</option>
                <option value="USDT ERC20">USDT (ERC20)</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="XRP">Ripple (XRP)</option>
              </select>
            </div>

            {/* Wallet Address Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Wallet Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="block w-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                  placeholder="Enter your wallet address"
                />
              </div>
              {crypto === 'XRP' && (
                <p className="mt-2 text-sm text-gray-500">
                  Don't forget to include the destination tag if required
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Request Withdrawal</span>
              <FaArrowRight />
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                {getCryptoIcon(crypto)}
                <h3 className="font-semibold text-blue-800">
                  Withdrawal Request Submitted
                </h3>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <p className="text-blue-700">
                  Your withdrawal request has been submitted successfully. You'll receive your {crypto} soon.
                </p>
              </div>
              <p className="mt-4 text-sm text-blue-600">
                Track your withdrawal status in the transactions history.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Withdrawal History */}
      <div className="mt-10 bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
        {/* Table Header */}
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800">Withdrawal History</h3>
          <p className="text-sm text-gray-500">Track your withdrawal requests</p>
        </div>

        {/* History Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Trading Account</th>
                <th className="px-6 py-3">Payment Method</th>
                <th className="px-6 py-3">Withdrawal</th>
                <th className="px-6 py-3">Remaining</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 1,
                  date: '2025-04-01 10:18',
                  account: 'Wallet #USD8729FX',
                  method: 'USDT TRC20',
                  amount: '$1,000',
                  remaining: '$0',
                  type: 'Standard',
                  status: 'Pending'
                },
                {
                  id: 2,
                  date: '2025-03-30 11:17',
                  account: 'Wallet #USD8729FX',
                  method: 'BTC',
                  amount: '$500',
                  remaining: '$0',
                  type: 'Standard',
                  status: 'Approved'
                },
                {
                  id: 3,
                  date: '2025-03-28 11:16',
                  account: 'Wallet #USD8729FX',
                  method: 'ETH',
                  amount: '$2,500',
                  remaining: '$0',
                  type: 'Standard',
                  status: 'Completed'
                },
                {
                  id: 4,
                  date: '2025-03-25 11:15',
                  account: 'Wallet #USD8729FX',
                  method: 'XRP',
                  amount: '$420',
                  remaining: '$420',
                  type: 'Standard',
                  status: 'Declined'
                }
              ].map((tx) => (
                <tr key={tx.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-3">{tx.date}</td>
                  <td className="px-6 py-3">{tx.account}</td>
                  <td className="px-6 py-3">{tx.method}</td>
                  <td className="px-6 py-3">{tx.amount}</td>
                  <td className="px-6 py-3">{tx.remaining}</td>
                  <td className="px-6 py-3">{tx.type}</td>
                  <td className="px-6 py-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full
                      ${tx.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        tx.status === 'Approved' ? 'bg-blue-100 text-blue-800' :
                        tx.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Status Definitions */}
        <div className="px-6 py-6 border-t border-gray-200 bg-gray-50">
          <h4 className="text-md font-semibold mb-3 text-gray-800">Status Definitions</h4>
          <ul className="text-sm space-y-1 text-gray-700">
            <li><span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-2 align-middle"></span><strong>Processing</strong>: We have received confirmation of your withdrawal and will process it shortly.</li>
            <li><span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 align-middle"></span><strong>Completed</strong>: Your withdrawal has been successfully processed and funds are on the way.</li>
            <li><span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-2 align-middle"></span><strong>Cancelled</strong>: Your withdrawal was cancelled as per your request.</li>
            <li><span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2 align-middle"></span><strong>Declined</strong>: Your withdrawal could not be processed — please contact support if needed.</li>
          </ul>
        </div>

        {/* Important Notes */}
        <div className="px-6 py-6 border-t border-gray-200 bg-white">
          <h4 className="text-md font-semibold mb-3 text-gray-800">Important Notes</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li><span className="text-green-700 font-bold">Withdrawals are processed within 24h max</span>.</li>
            <li>TheGenFX does not charge additional fees for deposits or withdrawals.</li>
            <li>We are not responsible for delays caused by external crypto networks.</li>
            <li>Withdrawals must be made to the same wallet address used for deposit.</li>
            <li>You'll receive an email confirmation when your withdrawal is approved.</li>
            <li>Suspicious activity may delay or decline your request for security reasons.</li>
          </ul>
        </div>
      </div>

      <DashboardFooter />
    </motion.div>
  );
}