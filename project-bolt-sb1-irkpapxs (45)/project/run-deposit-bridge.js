import { generateTempWallet, monitorAndForward } from './deposit-bridge-tron.mjs';

async function startBridge() {
  try {
    const { address, privateKey } = await generateTempWallet();
    console.log('🧾 Temp Wallet:', address.base58);
    console.log('🔐 Private Key:', privateKey);
    await monitorAndForward(privateKey, address.base58);
  } catch (error) {
    console.error('Failed to start deposit bridge:', error);
  }
}

startBridge();