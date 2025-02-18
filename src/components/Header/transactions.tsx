import { useTonConnectUI } from '@tonconnect/ui-react';

const transaction: SendTransactionRequest = {
  validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
  messages: [
    {
      address:
        "UQCTmlmrH5rZfFN-kFsvFl0TwyF6OS5sp3QEn8nNWnW0ESYA", // message destination in user-friendly format
      amount: "50000000", // Toncoin in nanotons
    },
  ],
};

export const Settings = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();

  return (
    <div>
      <button onClick={() => tonConnectUI.sendTransaction(transaction)}>
        Send transaction
      </button>
    </div>
  );
};
