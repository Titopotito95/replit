import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Validate inputs
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      // Admin credentials check
      if (email === 'admin@thegenfx.com' && password === 'admin123') {
        const adminUser = { email, isAdmin: true };
        localStorage.setItem('currentUser', JSON.stringify(adminUser));
        navigate('/admin');
        return;
      }

      // Regular user check
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Ensure user has an account ID
      if (!user.accountId) {
        user.accountId = `STD${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
        localStorage.setItem('users', JSON.stringify(users));
      }

      // Store logged in user
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      // Redirect to accounts page
      navigate('/dashboard/accounts', { replace: true });
    } catch (err) {
      setError(err.message || 'An error occurred during login');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign In to Your Account</h2>
            
            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 space-y-4">
              <p className="text-gray-400 text-center">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-400 hover:text-blue-300">
                  Register here
                </Link>
              </p>
              
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Admin access: admin@thegenfx.com / admin123
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;