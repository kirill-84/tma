import {TonConnectButton, Locales, useTonConnectUI} from "@tonconnect/ui-react"
import TonConnectUI from '@tonconnect/ui'

const tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://kirill-84.github.io/tma/tonconnect-manifest.json',
    buttonRootId: 'div#tma'
});

export const Header = () => {
    const [TonConnectUI, setOptions] = useTonConnectUI();

    const onLanguageChange = (language: Locales) => {
        setOptions({ language });
    };
    
    return <header>
        <span className="block">My App with React UI!</span>
        <TonConnectButton className="btn float-right" />
        <div>
          <label>language</label>
          <select onChange={(e) => onLanguageChange(e.target.value as Locales)}>
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
        </div>
    </header>
}
