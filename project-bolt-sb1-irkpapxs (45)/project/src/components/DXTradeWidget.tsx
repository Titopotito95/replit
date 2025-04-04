import React, { useEffect, useRef } from 'react';
import ErrorBoundary from './ErrorBoundary';

interface DXTradeWidgetProps {
  symbol?: string;
  theme?: 'light' | 'dark';
}

const DXTradeWidget: React.FC<DXTradeWidgetProps> = ({ 
  symbol = 'EURUSD',
  theme = 'dark'
}) => {
  const container = useRef<HTMLDivElement>(null);
  const widgetInstance = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = process.env.VITE_DXTRADE_URL + '/webtrader/dxwt.js';
    script.async = true;
    
    script.onload = () => {
      if (container.current && window.DXWebTrading?.default) {
        const config = {
          containerId: container.current.id,
          tradingUrl: process.env.VITE_DXTRADE_URL,
          authToken: process.env.VITE_DXTRADE_TOKEN,
          theme: theme,
          language: 'en',
          symbols: [symbol],
          defaultSymbol: symbol
        };

        try {
          window.DXWebTrading.default.create(config);
          widgetInstance.current = window.DXWebTrading.default;
        } catch (error) {
          console.error('[❌] DXTrade initialization error:', error);
        }
      }
    };

    document.head.appendChild(script);

    return () => {
      if (widgetInstance.current && container.current) {
        try {
          widgetInstance.current.destroy(container.current.id);
        } catch (error) {
          console.error('[❌] DXTrade cleanup error:', error);
        }
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [symbol, theme]);

  return (
    <ErrorBoundary>
      <div 
        ref={container}
        id={`dxtrade_${Math.random().toString(36).substring(7)}`}
        className="w-full h-[600px] rounded-xl overflow-hidden bg-slate-900"
      />
    </ErrorBoundary>
  );
};

export default DXTradeWidget;