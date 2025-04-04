import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateTempWallet, getWalletHistory } from './src/services/deposit-bridge-tron.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

const historyPath = path.join(process.cwd(), 'wallet-history.json');

// Ensure wallet-history.json exists
async function ensureHistoryFile() {
  try {
    await fs.access(historyPath);
    console.log('✅ wallet-history.json exists');
  } catch {
    console.log('Creating wallet-history.json...');
    await fs.writeFile(historyPath, '[]');
    console.log('✅ wallet-history.json created');
  }
}

// Initialize server and routes
await ensureHistoryFile();

// Generate Wallet
app.post('/api/generate-wallet', async (req, res) => {
  console.log('📝 Generating new wallet...');
  try {
    const wallet = await generateTempWallet();
    console.log('✅ Wallet generated:', wallet.address.base58);
    res.json({ 
      address: wallet.address.base58,
      crypto: 'USDT TRC20',
      status: 'pending',
      expiresAt: Date.now() + (5 * 60 * 1000)
    });
  } catch (err) {
    console.error('❌ Wallet generation error:', err);
    res.status(500).json({ error: 'Failed to generate wallet' });
  }
});

// Get Wallet History
app.get('/api/wallet-history', async (req, res) => {
  console.log('📋 Fetching wallet history...');
  try {
    const history = await getWalletHistory();
    console.log('✅ History fetched:', history.length, 'records');
    res.json(history);
  } catch (err) {
    console.error('❌ History fetch error:', err);
    res.status(500).json({ error: 'Failed to load wallet history' });
  }
});

app.listen(port, () => {
  console.log(`✅ API server running at http://localhost:${port}`);
});