import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login({ authStatus, setAuthStatus }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function setSignup() {
        setAuthStatus(1);
        console.log(1);
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:7000/login", {
                email: email,
                password: password
            })
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem("token",res.data.token)
                    navigate("/home");
                } else {
                    window.alert("Invalid Credentials");
                }
            })
            .catch((err) => {
                console.log("error in Login post method: ", err);
            });
    }

    return (
        <section className="auth-component-content">
            <div className="auth-heading">LOGIN</div>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-form-element">
                    <span>Email</span>
                    <input
                        type="email"
                        placeholder="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="auth-form-element">
                    <span>Password</span>
                    <input
                        type="password"
                        placeholder="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="auth-form-submit">
                    <button type="submit">LOGIN</button>
                </div>
            </form>
            <div className="auth-options">
                <div>
                    <span>Forgot Password?</span> |{" "}
                    <span onClick={setSignup}>Signup</span>
                </div>
            </div>
        </section>
    );
}
