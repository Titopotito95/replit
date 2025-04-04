// Components
export { default as Chart } from './components/Chart';
export { default as DashboardFooter } from './components/DashboardFooter';
export { default as DXTradeWidget } from './components/DXTradeWidget';
export { default as ErrorBoundary } from './components/ErrorBoundary';
export { default as Footer } from './components/Footer';
export { default as Header } from './components/Header';
export { default as LanguageSelector } from './components/LanguageSelector';
export { default as Sidebar } from './components/Sidebar';
export { default as TradingViewWidget } from './components/TradingViewWidget';

// Pages
export { default as Home } from './pages/Home';
export { default as Dashboard } from './pages/Dashboard';
export { default as Trade } from './pages/Trade';
export { default as Deposit } from './pages/Deposit';
export { default as Withdraw } from './pages/Withdraw';
export { default as Transfer } from './pages/Transfer';
export { default as Investigation } from './pages/Investigation';
export { default as Contact } from './pages/Contact';

// Auth Pages
export { default as Login } from './pages/auth/Login';
export { default as Register } from './pages/auth/Register';

// About Pages
export { default as Company } from './pages/about/Company';
export { default as ContactUs } from './pages/about/ContactUs';
export { default as LegalDocuments } from './pages/about/LegalDocuments';
export { default as Regulations } from './pages/about/Regulations';

// Trading Pages
export { default as TradingAccounts } from './pages/trading/TradingAccounts';
export { default as TradingPlatforms } from './pages/trading/TradingPlatforms';
export { default as MarketAnalysis } from './pages/trading/MarketAnalysis';

// Education Pages
export { default as TradingGuides } from './pages/education/TradingGuides';
export { default as Webinars } from './pages/education/Webinars';

// Legal Pages
export { default as PrivacyPolicy } from './pages/legal/PrivacyPolicy';
export { default as TermsOfService } from './pages/legal/TermsOfService';

// Hooks
export { usePolygonData } from './hooks/usePolygonData';
export { useMarketData } from './hooks/useMarketData';

// Store
export { useTradeStore } from './store/tradeStore';
export { useOrderStore } from './store/orderStore';

// Utils
export * from './utils/tradeCalculator';

// Types
export * from './types/dxtrade';
export * from './types/window';

// Services
export * from './services/deposit-bridge-tron';

// i18n
export { default as i18n } from './i18n';