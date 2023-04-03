import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const signIn = async () => {
        const response = await fetch(
            "http://127.0.0.1:5000/api/loginUser?" + "email=" + 
            email + "&password=" + password,
            {
                method:"GET",
                headers: {
                    "content-Type": "application/json",
                    
                }
            }
        )
    
        const res = await response.json();
        console.log(res);
    
        if (res.err) {
            alert(res.err);
        } else {    
            navigate('/home', {state:{token: res.token}})
        }
    }
    
  return (
    <div className="b h-100 d-flex align-center">
       
    <div className="Card">
      <h2 className="l">Login Here!</h2>
      
      <div className="Email">
      <input className='in' type="email" placeholder="Email" name="email" value={email} onChange={(e) => {setemail(e.target.value)}}/><br />
      </div>
      <div className="Password">
      <input className='in' type="password" placeholder="Password" name="pwd" value={password} onChange={(e) => {setpassword(e.target.value)}}/><br />
      </div>
      
        
      <button className="btn btn-dark" onClick={signIn}>Login </button>
      </div>
      </div>
  );
}

export default Login