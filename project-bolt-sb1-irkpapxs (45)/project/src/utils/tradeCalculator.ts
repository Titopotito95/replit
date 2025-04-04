export const calculateMargin = (lots: number, leverage: number, price: number): number => {
  // 1 lot = 100,000 units
  const contractSize = lots * 100000;
  // Required margin = (Contract Size * Price) / Leverage
  return (contractSize * price) / leverage;
};

export const calculateProfit = (
  type: 'buy' | 'sell',
  lots: number,
  openPrice: number,
  currentPrice: number
): number => {
  const pipValue = 0.0001; // For most forex pairs
  const contractSize = lots * 100000;
  
  if (type === 'buy') {
    const pips = (currentPrice - openPrice) / pipValue;
    return pips * (contractSize * pipValue);
  } else {
    const pips = (openPrice - currentPrice) / pipValue;
    return pips * (contractSize * pipValue);
  }
};

export const validateTrade = (
  type: 'buy' | 'sell',
  lots: number,
  balance: number,
  leverage: number,
  price: number,
  stopLoss?: number,
  takeProfit?: number
): { valid: boolean; message?: string } => {
  const margin = calculateMargin(lots, leverage, price);
  
  if (margin > balance) {
    return {
      valid: false,
      message: 'Insufficient margin available'
    };
  }

  if (stopLoss) {
    if (type === 'buy' && stopLoss >= price) {
      return {
        valid: false,
        message: 'Stop loss must be below entry price for buy orders'
      };
    }
    if (type === 'sell' && stopLoss <= price) {
      return {
        valid: false,
        message: 'Stop loss must be above entry price for sell orders'
      };
    }
  }

  if (takeProfit) {
    if (type === 'buy' && takeProfit <= price) {
      return {
        valid: false,
        message: 'Take profit must be above entry price for buy orders'
      };
    }
    if (type === 'sell' && takeProfit >= price) {
      return {
        valid: false,
        message: 'Take profit must be below entry price for sell orders'
      };
    }
  }

  return { valid: true };
};