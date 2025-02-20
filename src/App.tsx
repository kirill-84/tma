import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TonConnectUIProvider} from '@tonconnect/ui-react'
import {Header} from "./components/Header/Header"
import WebApp from '@twa-dev/sdk'

function copyText(entryText: any){
  navigator.clipboard.writeText(entryText);
}

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
            <div className="grid grid-flow-col">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo w-full" loading="lazy" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react w-full" loading="lazy" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button className="hover:bg-blue-400 group flex-auto items-center rounded-md bg-blue-500 text-white text-sm font-medium mb-3 pl-2 pr-3 py-2 shadow-sm" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            {/* Here we add our button with alert callback */}
            <div className="card">
                <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
                    Show Alert!
                </button>
            </div>
            <div className="mt-2">
                For inspiration: <span onClick={() => copyText("0x1266a05165458ce7b2C120FB744887f40eca6d63")}>0x1266...6d63</span> | &hearts; Ethereum <svg className="inline-block" width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z" fill="#080341"/>
</svg>
            </div>
        </div>
        </TonConnectUIProvider>    
    );
}

export default App
