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
    console.log('✅ History file exists');
  } catch {
    console.log('Creating history file...');
    await fs.writeFile(historyPath, '[]');
    console.log('✅ History file created');
  }
}

export async function generateTempWallet() {
  await ensureHistoryFile();

  try {
    const tronWeb = new TronWeb({
      fullHost: 'https://api.trongrid.io'
    });

    const account = await tronWeb.createAccount();
    console.log('✅ TronWeb account generated');
    
    // Read existing wallets
    const data = await fs.readFile(historyPath, 'utf-8');
    const wallets = JSON.parse(data);
    
    // Add new wallet
    const newWallet = {
      address: account.address.base58,
      crypto: 'USDT TRC20',
      status: 'pending',
      amount: 0,
      expiresAt: Date.now() + (5 * 60 * 1000) // 5 minutes
    };
    
    wallets.push(newWallet);
    console.log('📝 Adding wallet to history:', newWallet);
    
    // Save updated history
    await fs.writeFile(historyPath, JSON.stringify(wallets, null, 2));
    console.log('✅ History updated');
    
    return account;
  } catch (error) {
    console.error('❌ Error generating wallet:', error);
    throw new Error('Failed to generate temporary wallet');
  }
}

export async function getWalletHistory() {
  await ensureHistoryFile();
  try {
    const data = await fs.readFile(historyPath, 'utf-8');
    const history = JSON.parse(data);
    console.log('📋 Retrieved', history.length, 'wallet records');
    return history;
  } catch (error) {
    console.error('❌ Error reading wallet history:', error);
    return [];
  }
}