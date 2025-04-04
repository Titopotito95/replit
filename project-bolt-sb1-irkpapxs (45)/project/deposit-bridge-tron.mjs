import TronWeb from 'tronweb';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const historyPath = path.join(process.cwd(), 'wallet-history.json');

// Ensure file exists before writing
async function ensureHistoryFile() {
  try {
    await fs.access(historyPath);
  } catch {
    await fs.writeFile(historyPath, '[]');
  }
}

export async function generateTempWallet() {
  await ensureHistoryFile();

  try {
    const tronWeb = new TronWeb({
      fullHost: 'https://api.trongrid.io'
    });

    const account = await tronWeb.createAccount();
    
    // Read existing wallets
    const data = await fs.readFile(historyPath, 'utf-8');
    const wallets = JSON.parse(data);
    
    // Add new wallet
    wallets.push({
      address: account.address.base58,
      crypto: 'USDT TRC20',
      status: 'pending',
      expiresAt: Date.now() + (5 * 60 * 1000) // 5 minutes
    });
    
    // Save updated history
    await fs.writeFile(historyPath, JSON.stringify(wallets, null, 2));
    
    return account;
  } catch (error) {
    console.error('[❌] Error generating wallet:', error);
    throw new Error('Failed to generate temporary wallet');
  }
}