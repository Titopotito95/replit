import React from 'react';
import { FaUsers, FaMoneyBillWave, FaExchangeAlt, FaChartLine } from 'react-icons/fa';

export default function Overview() {
  const stats = [
    {
      title: 'Total Clients',
      value: '1,234',
      change: '+12%',
      icon: FaUsers,
      color: 'blue'
    },
    {
      title: 'Total Deposits',
      value: '$2.4M',
      change: '+8%',
      icon: FaMoneyBillWave,
      color: 'green'
    },
    {
      title: 'Active Trades',
      value: '3,456',
      change: '+15%',
      icon: FaExchangeAlt,
      color: 'purple'
    },
    {
      title: 'Trading Volume',
      value: '$12.8M',
      change: '+18%',
      icon: FaChartLine,
      color: 'orange'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
        <div className="flex space-x-4">
          <select className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg border border-gray-700">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-500/10`}>
                <stat.icon className={`text-2xl text-${stat.color}-500`} />
              </div>
              <span className={`text-${stat.color}-500 text-sm font-semibold`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-400 text-sm">{stat.title}</h3>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <FaUsers className="text-blue-500" />
                </div>
                <div>
                  <p className="text-white font-medium">New Client Registration</p>
                  <p className="text-gray-400 text-sm">Client #{Math.floor(Math.random() * 10000)}</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">2 minutes ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}