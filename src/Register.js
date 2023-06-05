import React, { useState } from "react"
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
;
function Register(props) {
    const navigate=useNavigate()
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isActive, setisActive] = useState('')
    console.log({ username, email, password, isActive })
    
    const handleAPI = () => {
        console.log({ username, email, password, isActive })
        axios.post('api/Registration/registration', {
            username: username,
            email: email,
            password: password,
            isActive: isActive
        }).then(resule => {
            console.log(resule)
            navigate('/login')

        })
            .catch(error => {
                console.log(error)
            })
    }


    
    return (
        
        <div className="col-sm-6 offset-sm-3">
            <h1>Registration Page</h1>     
           
            <input type="text" value={username} onChange={(e) => setusername(e.target.value)}  placeholder="username" className="form-control"/>
            <br />    
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="form-control" />
            <br />  
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="form-control" />
            <br />  
            <input type="number" value={isActive} onChange={(e) => setisActive(e.target.value)} placeholder="isActive" className="form-control" />
            <br />  
            <button onClick={handleAPI} className="btn btn-primary">Sign Up</button>
            <br />
            <br/>
            <Link to="/Login" className="btn btn-default border w-100   ">Already have an account? <strong>Login here</strong>.</Link>
                       
        </div>
    )
}

export default Register;