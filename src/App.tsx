import {useState, useRef, useEffect, useMemo} from 'react'
import { Card } from 'flowbite-react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {TonConnectUIProvider} from '@tonconnect/ui-react'
import {Header} from "./components/Header/Header"
import WebApp from '@twa-dev/sdk'

function App() {
    const [count, setCount] = useState(0)

    const searchParams = useMemo(
        () => new URLSearchParams(document.location.search),
        []
    );
    
    const [id, setId] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    
    const tgWrapperRef = useRef(null)
    
    useEffect(() => {
        const scriptElement = document.createElement("script")
        scriptElement.src = "https://telegram.org/js/telegram-widget.js?22"
        scriptElement.setAttribute("data-telegram-login", "TMAppsBot")
        scriptElement.setAttribute("data-size", "medium")
        scriptElement.setAttribute("data-auth-url", "")
        scriptElement.async = true
        
        tgWrapperRef.current.appendChild(scriptElement)
    }, [])
        
    useEffect(() => {
        setId(searchParams.get("id"))
        setFirstName(searchParams.get("first_name"))
        setLastName(searchParams.get("last_name"))
    }, [searchParams])
    
    return (
        {/* <TonConnectUIProvider
            manifestUrl="https://kirill-84.github.io/tma/tonconnect-manifest.json"
            actionsConfiguration={{
                twaReturnUrl: 'https://t.me/TMAppsBot'
            }}
        > */}
        <div className="App">
        {/* <Header/> */}
        <div className="telegram-login-widget flex justify-center mb-3" ref={tgWrapperRef}></div>
        {id || firstName || lastName ? (
        <Card className="max-w-sm">
          <h5 className="text-xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
            Data from Telegram redirecting
          </h5>
          <p className="font-normal text-left text-gray-700 dark:text-gray-400">
            <span className="font-bold">ID: </span> {id ? id : "-"}
          </p>
          <p className="font-normal text-left text-gray-700 dark:text-gray-400">
            <span className="font-bold">First name: </span>
            {firstName ? firstName : "-"}
          </p>
          <p className="font-normal text-left text-gray-700 dark:text-gray-400">
            <span className="font-bold">Last name: </span>
            {lastName ? lastName : "-"}
          </p>
        </Card>
      ) : (
        <></>
      )}
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
        {/* </
        TonConnectUIProvider
        > */}
    )
}

export default App
