import React, { useEffect, useRef } from 'react';

interface TradingViewWidgetProps {
  symbol?: string;
  theme?: 'light' | 'dark';
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ 
  symbol = 'EURUSD', 
  theme = 'dark' 
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (container.current && window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: `FX:${symbol}`,
          interval: '1',
          timezone: 'exchange',
          theme: theme,
          style: '1',
          locale: 'en',
          toolbar_bg: theme === 'dark' ? '#1e293b' : '#f8fafc',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: container.current.id,
          studies: [
            'MASimple@tv-basicstudies',
            'RSI@tv-basicstudies',
            'MACD@tv-basicstudies'
          ],
          disabled_features: [
            'header_symbol_search',
            'header_compare',
            'header_undo_redo',
            'header_screenshot',
            'header_saveload'
          ],
          enabled_features: [
            'hide_left_toolbar_by_default',
            'move_logo_to_main_pane',
            'countdown'
          ]
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [symbol, theme]);

  return (
    <div 
      ref={container}
      id={`tradingview_${Math.random().toString(36).substring(7)}`}
      className="w-full h-[600px] rounded-xl overflow-hidden"
    />
  );
};

export default TradingViewWidget;