import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup({ authStatus, setAuthStatus }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [name, setName] = useState("");
    const navigate = useNavigate();

    function setLogin() {
        setAuthStatus(0);
        console.log(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/signup", {
                userName: name,
                email: email,
                password: password 
            })
            .then((res) => {
                if (res.status === 200) {
                    setAuthStatus(0);
                } else {
                    window.alert("Unable to Signup: " + res.data);
                }
            })
            .catch((err) => {
                console.log("Error in Signup post method: ", err);
            });
    }

    return (
        <section className="auth-component-content">
            <div className="auth-heading">SIGNUP</div>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-form-element">
                    <span>Name</span>
                    <input
                        type="text"
                        placeholder="name"
                        required
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
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
                    <button type="submit">SIGNUP</button>
                </div>
            </form>
            <div className="auth-options">
                <div>
                    <span onClick={setLogin}>Login</span>
                </div>
            </div>
        </section>
    );
}
