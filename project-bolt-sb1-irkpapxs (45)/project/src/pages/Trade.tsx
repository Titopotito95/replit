import React, { useState } from 'react';
import Chart from "../components/Chart";
import ErrorBoundary from "../components/ErrorBoundary";
import { useAlphaVantageData } from "../hooks/useAlphaVantageData";

const Trade = () => {
  const [selectedPair, setSelectedPair] = useState('EUR/USD');
  const { data, isConnected, error } = useAlphaVantageData(selectedPair);

  const currencyPairs = [
    'EUR/USD',
    'GBP/USD',
    'USD/JPY',
    'USD/CHF',
    'AUD/USD',
    'USD/CAD',
    'NZD/USD',
    'EUR/GBP',
    'EUR/JPY',
    'GBP/JPY'
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Forex Trading</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Select Currency Pair
        </label>
        <select
          value={selectedPair}
          onChange={(e) => setSelectedPair(e.target.value)}
          className="bg-slate-800 text-white border border-gray-700 rounded px-3 py-2 w-full md:w-auto"
        >
          {currencyPairs.map((pair) => (
            <option key={pair} value={pair}>
              {pair}
            </option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ErrorBoundary>
            <Chart symbol={selectedPair} height={500} />
          </ErrorBoundary>
        </div>
        
        <div className="bg-slate-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Market Info</h2>
          
          {error ? (
            <div className="text-red-500">
              <p>Error: {error}</p>
              <p className="text-sm mt-2">Using simulated data as fallback.</p>
            </div>
          ) : (
            <div>
              <p className="text-gray-300">
                Status: <span className={isConnected ? "text-green-500" : "text-yellow-500"}>
                  {isConnected ? "Connected" : "Connecting..."}
                </span>
              </p>
              
              {data.length > 0 && (
                <div className="mt-4">
                  <p className="text-gray-300">Latest Price: <span className="text-white font-medium">
                    {data[data.length - 1].close.toFixed(5)}
                  </span></p>
                  <p className="text-gray-300">Change: <span className={
                    data[data.length - 1].close > data[data.length - 1].open 
                      ? "text-green-500" 
                      : "text-red-500"
                  }>
                    {(data[data.length - 1].close - data[data.length - 1].open).toFixed(5)}
                  </span></p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trade;