import { useTonConnectUI } from '@tonconnect/ui-react';
const [tonConnectUI] = useTonConnectUI();

const transaction = {
    messages: [
        {
            address: "UQCTmlmrH5rZfFN-kFsvFl0TwyF6OS5sp3QEn8nNWnW0ESYA", // destination address
            amount: "20000000" //Toncoin in nanotons
        }
    ]

}

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
