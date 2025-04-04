# TheGenFX UI Components

A comprehensive UI component library for building trading applications.

## Installation

```bash
npm install thegenfx-ui
```

## Usage

```jsx
import { Chart, TradingViewWidget, DXTradeWidget } from 'thegenfx-ui';

function App() {
  return (
    <div>
      <Chart symbol="EURUSD" />
      <TradingViewWidget symbol="EURUSD" theme="dark" />
      <DXTradeWidget symbol="EURUSD" theme="dark" />
    </div>
  );
}
```

## Available Components

### Trading Components
- `Chart`: Lightweight trading chart
- `TradingViewWidget`: TradingView chart integration
- `DXTradeWidget`: DXTrade platform integration

### Layout Components
- `Header`: Main navigation header
- `Footer`: Site footer
- `Sidebar`: Dashboard sidebar navigation
- `DashboardFooter`: Dashboard footer

### Pages
- Trading: `Trade`, `TradingAccounts`, `TradingPlatforms`, `MarketAnalysis`
- Account: `Deposit`, `Withdraw`, `Transfer`
- Auth: `Login`, `Register`
- Info: `Company`, `ContactUs`, `LegalDocuments`
- Education: `TradingGuides`, `Webinars`

### Hooks
- `usePolygonData`: Real-time market data from Polygon.io
- `useMarketData`: General market data hook
- `useTradeStore`: Trade state management
- `useOrderStore`: Order management

### Utils
- `tradeCalculator`: Trading calculations and validations

## Configuration

### Environment Variables
```env
VITE_POLYGON_API_KEY=your_polygon_api_key
VITE_ENVIRONMENT=development
```

## License
MIT