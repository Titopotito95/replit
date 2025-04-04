import React from 'react';
import Sidebar from './Sidebar';
import Overview from './Overview';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="p-8">
          <Overview />
        </div>
      </div>
    </div>
  );
}