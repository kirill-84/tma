import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TonConnectUIProvider} from '@tonconnect/ui-react'
import {Header} from "./components/Header/Header"
import WebApp from '@twa-dev/sdk'

function App() {
    const [count, setCount] = useState(0)
    
    return (
        <TonConnectUIProvider
            manifestUrl="https://kirill-84.github.io/tma/tonconnect-manifest.json"
            actionsConfiguration={{
                twaReturnUrl: 'https://t.me/TMAppsBot'
            }}
        >
        <div className="App">
            <Header/>
            <div className="columns-3xs">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo w-full" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react w-full" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mb-3" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <p>Test from MiniApps</p>
            {/* Here we add our button with alert callback */}
            <div className="card">
                <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
                    Show Alert!
                </button>
            </div>
        </div>
        </TonConnectUIProvider>    
    );
}

export default App
