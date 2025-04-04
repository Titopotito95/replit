import React from 'react';
import { FaChartLine, FaUsers, FaMoneyBillWave, FaCog, FaFileAlt, FaChartBar } from 'react-icons/fa';

const menuItems = [
  {
    name: 'Overview',
    icon: FaChartLine,
  },
  {
    name: 'Clients',
    icon: FaUsers,
  },
  {
    name: 'Deposits',
    icon: FaMoneyBillWave,
  },
  {
    name: 'Withdrawals',
    icon: FaMoneyBillWave,
  },
  {
    name: 'Reports',
    icon: FaFileAlt,
  },
  {
    name: 'Analytics',
    icon: FaChartBar,
  },
  {
    name: 'Settings',
    icon: FaCog,
  },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 fixed left-0 top-0 h-full">
      {/* Logo */}
      <div className="px-6 py-8">
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-white">The</span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Gen</span>
            <span className="text-white">FX</span>
          </span>
          <span className="ml-2 text-sm text-gray-400">Admin</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
              >
                <item.icon className="text-xl" />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}