import { useEffect, useState } from "react"
import "../App.css"
import Login from "../components/Login"
import Signup from "../components/Signup"

export default function Auth(){
    const [authStatus , setAuthStatus] = useState(0)
    const [component , setComponent] = useState(0)
    useEffect(()=>{
        if(authStatus == 0){
            setComponent(<Login authStatus = {authStatus} setAuthStatus = {setAuthStatus} />)
        }else if(authStatus == 1){
            setComponent(<Signup authStatus = {authStatus} setAuthStatus = {setAuthStatus}/>)
        }
    },[authStatus])
    return (
        <div className="auth">
            <section className="auth-content">
                <div className="auth-content-heading">
                    DESTINOTE
                </div>
                <div className="auth-content-subHeading">
                    <span>Guiding</span> one step closer to your <span>destination</span>
                </div>
                <div className="auth-content-description">
                Destinote is a travel app that alerts users when they reach their set destination. With real-time GPS tracking, it ensures users don’t miss their stop, making it perfect for public transport or unfamiliar routes. Simple, efficient, and reliable!
                </div>
            </section>
            <section className="auth-component">
                {component}
            </section>
        </div>
    )
}