import Auth from "../pages/AuthPage";
import {Link} from "react-router-dom"
export default function Login(authStatus , setAuthStatus) {
    function setSignup(){
        setAuthStatus(1)
        console.log(1)
    }
    return (
        <section className="login">
            <div className="login-heading">
                LOGIN
            </div>
            <form className="login-form">
                <div className="login-form-element">
                    <span>Email</span>
                    <input type="email" placeholder="email" required></input>
                </div>
                <div className="login-form-element">
                    <span>Password</span>
                    <input type="email" placeholder="passsword" required></input>
                </div>
                <div className="login-form-submit">
                    <button type="submit">
                        LOGIN
                    </button>
                </div>
            </form>
            <div className="login-options">
                <div>
                    <span>forgot Password ?</span> | <span>Signup</span>    
                </div>
            </div>
        </section>
    )
}