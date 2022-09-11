import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebase";

const Login = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        setLoading(true);
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{
            await signInWithEmailAndPassword(auth, email, password);
            setLoading(false);
            navigate("/");
        }catch(err){
            setErr(true);
            setLoading(false);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">UChat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button disabled={loading}>Sign in</button>
                    {loading && <span>Wait for authentication...</span>}
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}

export default Login