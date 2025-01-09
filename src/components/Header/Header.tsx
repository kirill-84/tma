// import {TonConnectButton} from "@tonconnect/ui-react"
import {useState, useRef, useEffect, useMemo} from 'react'
import { Card } from "flowbite-react"

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

export const Header = () => {
    return <header>
        {/* <span style={{display:"block"}}>My App with React UI</span>
        <TonConnectButton className="btn" style={{float:"right"}} /> */}
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
    </header>
}
