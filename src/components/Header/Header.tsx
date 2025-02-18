import {useTonWallet, TonConnectButton, Locales, useTonConnectUI} from "@tonconnect/ui-react"

export const Header = () => {
    const wallet = useTonWallet();
    const [, setOptions] = useTonConnectUI();

    const onLanguageChange = (language: Locales) => {
        setOptions({ language });
    };
    
    return <header>
        <span className="block mb-1">My App with React UI!</span>
        <TonConnectButton className="btn block" />
        <div className="block m-4">
          <label>language</label>
          <select onChange={(e) => onLanguageChange(e.target.value as Locales)}>
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
        </div>
        (wallet && (
          <div>
            <span>Connected wallet address: {wallet.account.address}</span>
            <span>Device: {wallet.device.appName}</span>
            <span>Connected via: {wallet.provider}</span>
            {wallet.connectItems?.tonProof?.proof && <span>Ton proof: {wallet.connectItems.tonProof.proof}</span>}
    
            <div>Connected wallet info:</div>
            <div>
              {wallet.name} <img src={wallet.imageUrl} />
            </div>
          </div>
        ))
    </header>
}
