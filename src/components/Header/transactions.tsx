    import { useTonConnectUI } from '@tonconnect/ui-react';
	import { toNano } from '@ton/ton'


    const jettonWalletContract = Address.parse('UQCTmlmrH5rZfFN-kFsvFl0TwyF6OS5sp3QEn8nNWnW0ESYA');

    const myTransaction = {
    validUntil: Math.floor(Date.now() / 1000) + 360,
    messages: [
  {
    address: jettonWalletContract, // sender jetton wallet
    amount: toNano("0.05").toString(), // for commission fees, excess will be returned
    payload: body.toBoc().toString("base64") // payload with jetton transfer and comment body
  }
    ]
  }

    export const Settings = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();

    return (
    <div>
    <button onClick={() => tonConnectUI.sendTransaction(myTransaction)}>
    Send transaction
  </button>
</div>
);
};
