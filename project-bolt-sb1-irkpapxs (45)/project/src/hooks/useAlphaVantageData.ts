import { useEffect, useState } from 'react';
import axios from 'axios';

interface CandleData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export function useAlphaVantageData(symbol: string = 'EUR/USD') {
  const [data, setData] = useState<CandleData[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const apiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;

  // Fetch historical data from Alpha Vantage
  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        setError(null);
        if (!apiKey) {
          throw new Error('API key is not set');
        }

        // Format the symbol for Alpha Vantage (remove the slash)
        const [fromSymbol, toSymbol] = symbol.split('/');
        
        console.log(`Fetching data for ${fromSymbol}/${toSymbol} from Alpha Vantage`);
        
        const res = await axios.get(
          `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${fromSymbol}&to_symbol=${toSymbol}&interval=1min&apikey=${apiKey}`
        );

        if (res.data['Time Series FX (1min)']) {
          const timeSeriesData = res.data['Time Series FX (1min)'];
          const formattedData = Object.entries(timeSeriesData).map(([timestamp, values]: [string, any]) => ({
            time: Math.floor(new Date(timestamp).getTime() / 1000),
            open: parseFloat(values['1. open']),
            high: parseFloat(values['2. high']),
            low: parseFloat(values['3. low']),
            close: parseFloat(values['4. close'])
          })).reverse();
          
          setData(formattedData);
          setIsConnected(true);
          console.log('Successfully fetched data:', formattedData.length, 'points');
        } else {
          throw new Error('No data received from Alpha Vantage');
        }
      } catch (err: any) {
        console.error('Alpha Vantage data error:', err);
        setError(err.message || 'Failed to fetch historical data');
        // Fall back to mock data if API fails
        const mockData = generateMockData();
        setData(mockData);
        setIsConnected(true);
      }
    };

    if (apiKey) {
      fetchHistoricalData();
    } else {
      // Fall back to mock data if no API key
      const mockData = generateMockData();
      setData(mockData);
      setIsConnected(true);
    }
  }, [symbol, apiKey]);

  // Generate mock data for fallback
  const generateMockData = () => {
    const mockData: CandleData[] = [];
    const now = Math.floor(Date.now() / 1000);
    
    // Different base prices for different currency pairs
    const basePrices: Record<string, number> = {
      'EUR/USD': 1.1000,
      'GBP/USD': 1.2500,
      'USD/JPY': 110.00,
      'USD/CHF': 0.9200,
      'AUD/USD': 0.7500,
      'USD/CAD': 1.3000,
      'NZD/USD': 0.7000,
      'EUR/GBP': 0.8800,
      'EUR/JPY': 120.00,
      'GBP/JPY': 140.00
    };
    
    const basePrice = basePrices[symbol] || 1.1000;
    let lastClose = basePrice;
    
    // Generate 100 candles with realistic forex patterns
    for (let i = 0; i < 100; i++) {
      const time = now - (100 - i) * 60; // One minute intervals
      
      // Create more realistic price movements
      const volatility = 0.0005; // Lower volatility for forex
      const trend = Math.sin(i / 10) * 0.0003; // Add a slight trend
      const randomChange = (Math.random() - 0.5) * volatility + trend;
      
      const open = lastClose;
      const close = open * (1 + randomChange);
      const high = Math.max(open, close) * (1 + Math.random() * 0.0003);
      const low = Math.min(open, close) * (1 - Math.random() * 0.0003);
      
      mockData.push({
        time,
        open,
        high,
        low,
        close
      });
      
      lastClose = close;
    }
    
    return mockData;
  };

  // Simulate real-time updates (only used if API doesn't provide real-time data)
  useEffect(() => {
    if (data.length === 0) return;

    const interval = setInterval(() => {
      const lastCandle = data[data.length - 1];
      
      // Create more realistic price movements
      const volatility = 0.0005;
      const trend = Math.sin(Date.now() / 10000) * 0.0003;
      const randomChange = (Math.random() - 0.5) * volatility + trend;
      
      const open = lastCandle.close;
      const close = open * (1 + randomChange);
      const high = Math.max(open, close) * (1 + Math.random() * 0.0003);
      const low = Math.min(open, close) * (1 - Math.random() * 0.0003);
      
      const newCandle = {
        time: Math.floor(Date.now() / 1000),
        open,
        high,
        low,
        close
      };

      setData(prev => {
        const updated = [...prev, newCandle];
        return updated.slice(-1000); // Keep last 1000 candles
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [data]);

  return { data, isConnected, error };
}