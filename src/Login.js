import React, { useState } from "react"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const navigate=useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log({ email, password })
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleAPI = () => {
        console.log({ email, password })
        axios.post('api/Registration/login', {
            email: email,
            password: password
        }).then(resule => {
            console.log(resule)
            navigate('/add')
        })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="col-sm-6 offset-sm-3">
          <h1>Login Page</h1>
                        
            Email:<input value={email} onChange={handleEmail} type='text' placeholder="email" className="form-control" /><br />
            Password:<input value={password} onChange={handlePassword} type='password' placeholder="password" className="form-control" /><br />
            <button onClick={handleAPI} className="btn btn-primary">Login</button>
            <p>You are agree to our teams and conditions </p>
            <Link to="/Register" className="btn btn-default border w-100 "  >Create Account</Link>
             
           
        </div>
    )
}

export default Login