import React, { useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Transfer from './Transfer';
import Investigation from './Investigation';
import Contact from './Contact';
import Trade from './Trade';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-auto p-8 ml-64">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
          <p className="text-gray-600">Welcome to your dashboard.</p>
        </div>

        {/* Dashboard routes */}
        <Routes>
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="trade" element={<Trade />} />
          <Route path="investigation" element={<Investigation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/" element={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-gray-600 text-sm mb-2">Account Type</h3>
                <p className="text-xl font-bold text-green-600">Demo</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-gray-600 text-sm mb-2">Balance</h3>
                <p className="text-xl font-bold text-blue-600">$100,000</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-gray-600 text-sm mb-2">Status</h3>
                <p className="text-xl font-bold text-yellow-500">Active</p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}