import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    try {
      if (email === 'admin@thegenfx.com' && password === 'admin123') {
        const adminUser = {
          email,
          isAdmin: true
        };
        localStorage.setItem('currentUser', JSON.stringify(adminUser));
        navigate('/admin');
      } else {
        throw new Error('Invalid admin credentials');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during login');
      console.error('Admin login error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full mx-4"
      >
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-500/10 p-4 rounded-full">
              <FaLock className="text-4xl text-blue-500" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2 text-center">Admin Login</h2>
          <p className="text-gray-400 text-center mb-8">Access TheGenFX Admin Panel</p>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Admin Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="admin@thegenfx.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="admin123"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Sign In to Admin Panel
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Admin credentials: admin@thegenfx.com / admin123
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminLogin;