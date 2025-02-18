import {TonConnectButton} from "@tonconnect/ui-react"
const [tonConnectUI] = useTonConnectUI();

const transaction = {
    messages: [
        {
            address: "0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F", // destination address
            amount: "20000000" //Toncoin in nanotons
        }
    ]

}

export const Header = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();
    
    return <header>
        <span className="block">My App with React UI!</span>
        <TonConnectButton className="btn float-right" />

        <div>
            <button onClick={() => tonConnectUI.sendTransaction(transaction)}>
                Send transaction
            </button>
        </div>
    </header>
}
