import '../styles.css';

// Initialize TradingView Widget
new TradingView.widget({
  "width": "100%",
  "height": "100%",
  "symbol": "BINANCE:BTCUSDT",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "light",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f8fafc",
  "enable_publishing": false,
  "hide_side_toolbar": false,
  "allow_symbol_change": true,
  "container_id": "tradingview",
  "hide_top_toolbar": false,
  "studies": [
    "MASimple@tv-basicstudies",
    "RSI@tv-basicstudies"
  ]
});

// Typewriter effect for hero section
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typewriter when page loads
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-section h1');
  typeWriter(heroTitle, 'Trade with Confidence');
});