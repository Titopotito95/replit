import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaUser, 
  FaMoneyBillWave, 
  FaExchangeAlt, 
  FaFileAlt,
  FaHeadset,
  FaWallet,
  FaChartLine
} from 'react-icons/fa';

interface MenuItem {
  name: string;
  icon: React.ElementType;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Accounts',
    icon: FaUser,
    path: '/dashboard/accounts'
  },
  {
    name: 'Trade',
    icon: FaChartLine,
    path: '/dashboard/trade'
  },
  {
    name: 'Deposit',
    icon: FaMoneyBillWave,
    path: '/dashboard/deposit'
  },
  {
    name: 'Withdraw',
    icon: FaWallet,
    path: '/dashboard/withdraw'
  },
  {
    name: 'Transfer',
    icon: FaExchangeAlt,
    path: '/dashboard/transfer'
  },
  {
    name: 'Trade Investigation Form',
    icon: FaFileAlt,
    path: '/dashboard/investigation'
  },
  {
    name: 'Contact Us',
    icon: FaHeadset,
    path: '/dashboard/contact'
  }
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-900 fixed left-0 top-0 h-full">
      {/* Logo */}
      <div className="px-6 py-8">
        <Link to="/dashboard" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-white">The</span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Gen</span>
            <span className="text-white">FX</span>
          </span>
        </Link>
      </div>

      <nav className="px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon className={`text-xl ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;