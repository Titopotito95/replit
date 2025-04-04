import React, { useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Trade from './Trade';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Transfer from './Transfer';
import Investigation from './Investigation';
import Contact from './Contact';
import Accounts from './Accounts';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h1 className="text-2xl font-bold text-white mb-4">Welcome to Your Dashboard</h1>
                  <p className="text-gray-300">Manage your trading accounts and transactions</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-800 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">Account Balance</h3>
                    <p className="text-3xl font-bold text-white">$10,000.00</p>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">Open Positions</h3>
                    <p className="text-3xl font-bold text-white">0</p>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">Account Type</h3>
                    <p className="text-3xl font-bold text-white">Standard</p>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Account Created</p>
                        <p className="text-gray-400 text-sm">Standard Trading Account</p>
                      </div>
                      <span className="text-gray-400">Just now</span>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="accounts" element={<Accounts />} />
            <Route path="trade" element={<Trade />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="transfer" element={<Transfer />} />
            <Route path="investigation" element={<Investigation />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}