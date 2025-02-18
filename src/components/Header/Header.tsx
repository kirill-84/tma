import {TonConnectButton} from "@tonconnect/ui-react"

export const Header = () => {
    return <header>
        <span className="block">My App with React UI!</span>
        <TonConnectButton className="btn float-right" />
    </header>
}
