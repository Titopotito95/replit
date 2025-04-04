import create from 'zustand';
import { persist } from 'zustand/middleware';

interface TradeState {
  balance: number;
  positions: Position[];
  history: TradeHistory[];
  updateBalance: (newBalance: number) => void;
  addPosition: (position: Position) => void;
  updatePosition: (id: string, updates: Partial<Position>) => void;
  removePosition: (id: string) => void;
  addToHistory: (trade: TradeHistory) => void;
}

interface Position {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  lots: number;
  openPrice: number;
  currentPrice: number;
  profit: number;
  timestamp: number;
  stopLoss?: number;
  takeProfit?: number;
  margin: number;
}

interface TradeHistory {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  lots: number;
  openPrice: number;
  closePrice: number;
  profit: number;
  openTime: number;
  closeTime: number;
}

export const useTradeStore = create<TradeState>()(
  persist(
    (set) => ({
      balance: 10000,
      positions: [],
      history: [],
      updateBalance: (newBalance) => set({ balance: newBalance }),
      addPosition: (position) => set((state) => ({ 
        positions: [...state.positions, position],
        balance: state.balance - position.margin
      })),
      updatePosition: (id, updates) => set((state) => ({
        positions: state.positions.map(pos => 
          pos.id === id ? { ...pos, ...updates } : pos
        )
      })),
      removePosition: (id) => set((state) => {
        const position = state.positions.find(p => p.id === id);
        if (!position) return state;
        
        return {
          positions: state.positions.filter(p => p.id !== id),
          balance: state.balance + position.margin + position.profit
        };
      }),
      addToHistory: (trade) => set((state) => ({
        history: [...state.history, trade]
      }))
    }),
    {
      name: 'trade-storage',
      getStorage: () => localStorage
    }
  )
);