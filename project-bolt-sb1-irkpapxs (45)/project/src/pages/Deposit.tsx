import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaBitcoin, FaEthereum, FaDollarSign, FaArrowRight, FaCopy, FaClock } from 'react-icons/fa';
import { SiTether, SiRipple } from 'react-icons/si';
import { QRCodeSVG } from 'qrcode.react';
import DashboardFooter from '../components/DashboardFooter';

export default function Deposit() {
  const [amount, setAmount] = useState('');
  const [crypto, setCrypto] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [expiryTime, setExpiryTime] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [walletHistory, setWalletHistory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchWalletHistory() {
      try {
        const res = await fetch('/api/wallet-history');
        if (!res.ok) throw new Error('Failed to fetch wallet history');
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error('Invalid wallet history data');
        setWalletHistory(data);
      } catch (err) {
        console.error('❌ Failed to fetch wallet history:', err);
        setError('Failed to load wallet history. Please try again later.');
      }
    }

    fetchWalletHistory();
    const interval = setInterval(fetchWalletHistory, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (expiryTime) {
      const interval = setInterval(() => {
        const remaining = Math.max(0, expiryTime - Date.now());
        setTimeRemaining(remaining);
        
        if (remaining === 0) {
          setWalletAddress('');
          setShowQR(false);
          setExpiryTime(null);
          setTimeRemaining(null);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [expiryTime]);

  const filteredHistory = useMemo(() => {
    return walletHistory.filter(w => w.crypto && w.address);
  }, [walletHistory]);

  const getTimeLeft = (expiresAt: number) => {
    const diff = expiresAt - Date.now();
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return diff > 0 ? `${minutes}:${seconds < 10 ? "0" : ""}${seconds}` : null;
  };

  const handleGenerateAddress = async () => {
    if (!crypto) {
      setError('Please select a cryptocurrency first.');
      return;
    }

    if (!amount || parseFloat(amount) < 10) {
      setError('Minimum deposit amount is $10 + $1.50 fee.');
      return;
    }

    setIsGenerating(true);
    setError('');
    
    try {
      const res = await fetch('/api/generate-wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ crypto, amount: parseFloat(amount) })
      });
      
      if (!res.ok) {
        throw new Error('Failed to generate wallet address');
      }

      const data = await res.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setWalletAddress(data.address);
      setExpiryTime(Date.now() + 5 * 60 * 1000); // 5 minutes
      setTimeRemaining(5 * 60 * 1000);
      setShowQR(true);
    } catch (error) {
      console.error('Error generating address:', error);
      setError('Failed to generate deposit address. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  const formatTimeRemaining = (ms: number) => {
    if (!ms || ms <= 0) return '0:00';
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getCryptoIcon = (cryptoName: string) => {
    switch (cryptoName) {
      case 'USDT TRC20':
      case 'USDT ERC20':
        return <SiTether className="text-2xl text-green-500" />;
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

  const getActualAmount = () => {
    const baseAmount = parseFloat(amount) || 0;
    return baseAmount + 1.50; // Add $1.50 fee
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
              <FaWallet className="text-2xl text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Deposit Funds</h2>
              <p className="text-blue-100">Select your preferred payment method</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount to Deposit (Minimum $10 + $1.50 fee)
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
                  min="10"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">USD</span>
                </div>
              </div>
              {amount && parseFloat(amount) >= 10 && (
                <p className="mt-2 text-sm text-gray-600">
                  Total amount to send: ${getActualAmount()} (includes $1.50 processing fee)
                </p>
              )}
            </div>

            {/* Crypto Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Cryptocurrency
              </label>
              <select
                value={crypto}
                onChange={(e) => {
                  setCrypto(e.target.value);
                  setWalletAddress('');
                  setShowQR(false);
                  setExpiryTime(null);
                  setTimeRemaining(null);
                }}
                className="block w-full py-3 pl-3 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Choose payment method</option>
                <option value="USDT TRC20">USDT (TRC20) - Lowest fees</option>
                <option value="USDT ERC20">USDT (ERC20)</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="XRP">Ripple (XRP)</option>
              </select>
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            {/* Generate Button */}
            <button
              onClick={handleGenerateAddress}
              disabled={isGenerating || !crypto || !amount || parseFloat(amount) < 10}
              className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg ${
                (isGenerating || !crypto || !amount || parseFloat(amount) < 10) ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              <span>{isGenerating ? 'Generating...' : 'Generate Deposit Address'}</span>
              {!isGenerating && <FaArrowRight />}
            </button>
          </div>

          {/* Wallet Address */}
          {walletAddress && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getCryptoIcon(crypto)}
                  <h3 className="font-semibold text-gray-800">
                    {crypto} Deposit Address
                  </h3>
                </div>
                <div className="flex items-center space-x-4">
                  {timeRemaining !== null && (
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-2" />
                      <span>Expires in: {formatTimeRemaining(timeRemaining)}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* QR Code */}
              <div className="flex justify-center mb-4">
                <QRCodeSVG
                  value={walletAddress}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>

              {/* Wallet Address Text */}
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm break-all text-gray-600">{walletAddress}</p>
                  <button
                    onClick={handleCopyAddress}
                    className="ml-2 p-2 text-blue-600 hover:text-blue-700 transition-colors"
                    title="Copy address"
                  >
                    <FaCopy className={copySuccess ? 'text-green-500' : ''} />
                  </button>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Please send exactly ${getActualAmount()} worth of {crypto} to this address.
                The address will expire in {formatTimeRemaining(timeRemaining || 0)}.
              </p>
            </motion.div>
          )}

          {/* Deposit History */}
          {filteredHistory.length > 0 && (
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Deposit History</h3>
              <div className="space-y-4">
                {filteredHistory.slice().reverse().map((wallet, idx) => {
                  const timeLeft = wallet.expiresAt - Date.now();
                  const expired = timeLeft <= 0;
                  const status = expired ? 'Expired' : wallet.status || 'Pending';

                  return (
                    <div
                      key={idx}
                      className="border p-4 rounded-lg bg-white shadow flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm text-gray-600">{wallet.crypto || 'Unknown Crypto'}</div>
                        <div className="font-mono text-xs text-gray-500 truncate w-60">{wallet.address}</div>
                        <div className="text-xs mt-1 text-gray-400">
                          <FaClock className="inline mr-1" />
                          Expires in: {expired ? '0:00' : getTimeLeft(wallet.expiresAt)}
                        </div>
                      </div>
                      <div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          status === 'Complete'
                            ? 'bg-green-100 text-green-600'
                            : status === 'Expired'
                            ? 'bg-gray-200 text-gray-500'
                            : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <DashboardFooter />
    </motion.div>
  );
}