import {useState} from 'react';
import { Card } from 'flowbite-react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {TonConnectUIProvider} from '@tonconnect/ui-react'
import {Header} from "./components/Header/Header"
import WebApp from '@twa-dev/sdk'

function App() {
    const [count, setCount] = useState(0);
    
    return (
        <TonConnectUIProvider
            manifestUrl="https://kirill-84.github.io/tma/tonconnect-manifest.json"
            actionsConfiguration={{
                twaReturnUrl: 'https://t.me/TMAppsBot'
            }}
        >
        <div className="App">
            <Header/>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
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

export default App;
