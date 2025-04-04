import { generateTempWallet } from '../../deposit-bridge-tron.mjs';

export default async function handler(req, res) {
  try {
    const wallet = await generateTempWallet();
    res.json({ 
      address: wallet.address.base58, 
      privateKey: wallet.privateKey 
    });
  } catch (err) {
    console.error('[API Error]', err);
    res.status(500).json({ error: 'Failed to generate wallet' });
  }
}