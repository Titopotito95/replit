import React, { useEffect, useRef, useState } from 'react';
import { createChart, IChartApi, ISeriesApi, LineStyle } from 'lightweight-charts';
import { useAlphaVantageData } from '../hooks/useAlphaVantageData';

interface ChartProps {
  symbol?: string;
  height?: number;
}

const Chart = ({ symbol = 'EUR/USD', height = 400 }: ChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const { data, isConnected, error } = useAlphaVantageData(symbol);
  const [isLoading, setIsLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('1m');
  const [wsError, setWsError] = useState<string | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Initialize chart
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: height,
      layout: {
        background: { color: '#1a1b26' },
        textColor: '#DDD',
      },
      grid: {
        vertLines: { color: '#2a2b36' },
        horzLines: { color: '#2a2b36' },
      },
      crosshair: {
        mode: 0,
        vertLine: {
          width: 1,
          color: '#555',
          style: LineStyle.Solid,
          labelBackgroundColor: '#555',
        },
        horzLine: {
          width: 1,
          color: '#555',
          style: LineStyle.Solid,
          labelBackgroundColor: '#555',
        },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        borderColor: '#2a2b36',
      },
    });

    // Create candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    // Store references
    chartRef.current = chart;
    seriesRef.current = candlestickSeries;

    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, [height]);

  // Update data
  useEffect(() => {
    if (seriesRef.current && data.length > 0) {
      seriesRef.current.setData(data);
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
          <div className="text-white">Loading chart data...</div>
        </div>
      )}
      {error && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg z-20">
          {error}
        </div>
      )}
      <div ref={chartContainerRef} className="rounded-lg overflow-hidden" />
    </div>
  );
};

export default Chart;