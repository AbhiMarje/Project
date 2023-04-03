import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setname] = useState('')
  const [phoneNo, setphoneNo] = useState('')


  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [repeat, setrepeat] = useState('')
  const [age, setage] = useState('')
  const [gender, setgender] = useState('')

    const navigate = useNavigate();


  const registerIn = async () => {
    const response = await fetch(
      "http://127.0.0.1:5000/api/registerUser?",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",

        },
        body: JSON.stringify({
          name:name,
          phnNo:phoneNo,
          email:email,
          password:password,
          age:age,
          gender:gender

        })
      }
    )

    const res = await response.json();
    console.log(res);

    if (res.err) {
      alert(res.err);
    } else {
      alert(res.message);
      navigate('/')
    }
  }
  return (
    <div className="b">

      <div className="Card">
        <h2 className="l">Register here!</h2>
        <div className="Name">
          <input className='in' type="text" placeholder="Name" name="name" value={name} onChange={(e) => {setname(e.target.value)}}/><br />
        </div>
        <div className="PhoneNo">
          <input className='in' type="text" placeholder="Phone number" name="phn" value={phoneNo} onChange={(e) => {setphoneNo(e.target.value)}}/><br />
        </div>
        <div className="Email">
          <input className='in' type="email" placeholder="Email" name="email" value={email} onChange={(e) => {setemail(e.target.value)}}/><br />
        </div>
        <div className="Password">
          <input className='in' type="password" placeholder="Password" name="pwd" value={password} onChange={(e) => {setpassword(e.target.value)}}/><br />
        </div>
        <div className="Repeat">
          <input className='in' type="password" placeholder="Repeat Password" name="reppwd" value={repeat} onChange={(e) => {setrepeat(e.target.value)}}/><br />
        </div>
        <div className="Age">
          <input className='in' type="text" placeholder="Age" name="age" value={age} onChange={(e) => {setage(e.target.value)}}/><br />
        </div>
        {/* <div className="PhoneNo">
      <input type="text" placeholder="Phone number" name="phn"/><br />
      </div> */}
        <select name="gender" id="gender" value={gender} onChange={(e) => {setgender(e.target.value)}}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Non-binary">Non-binary</option>
          <option value="Concealed">Prefer not to say</option>
        </select>
        <div className="ts">
          <input className='in' type="checkbox" name="ts" />I agree to the Terms and Condtions. <br />
        </div>
        <button className="but" onClick={registerIn}>Submit</button>
      </div>
    </div>
  );
}

export default Register;