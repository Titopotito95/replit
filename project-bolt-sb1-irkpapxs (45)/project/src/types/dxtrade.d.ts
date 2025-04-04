declare namespace DXWebTrading {
  interface Config {
    containerId: string;
    tradingUrl: string;
    authToken: string;
    theme: 'light' | 'dark';
    language: string;
    symbols: string[];
    defaultSymbol: string;
  }

  interface DXWebTradingStatic {
    create: (config: Config) => void;
    destroy: (containerId: string) => void;
  }

  interface Window {
    DXWebTrading: {
      default: DXWebTradingStatic;
    };
  }
}