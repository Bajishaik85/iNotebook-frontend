import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const Login = (props) => {
    const [credentials, setcredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://inotebook-backend-82ye.onrender.com/api/v1/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //redirect
            localStorage.setItem("token", json.authtoken);
            navigate("/");
            props.showAlert("Logged In successfully", "Success");

        }
        else {
            props.showAlert("Invalid Credentials", "danger");
        }

    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })

    }
    return (
        <>
            <div className='mt-2'>
                <h2>Login to continue to iNotebook</h2>
                <form onSubmit={handleSubmit} autocomplete="off" >
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" onChange={onChange} className="form-control" id="password" name="password" />
                    </div>

                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>


        </>
    )
}

export default Login
