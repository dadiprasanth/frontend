import React from "react";
import { useNavigate} from "react-router-dom";
import {useState} from "react";

import "./register.css"

const Register=()=>{

  let nav=useNavigate()
const [password,setPassowrd]=useState("")
const [form,setform]=useState({
  MailID:"",
  password:"",
})
var handlesubmit=0
if(form.password===password){
 handlesubmit=(e)=>{
  e.preventDefault()
  console.log(form)
  
 
  fetch("http://localhost:8080/users/add",{
    method:"POST",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(form)
  }).then((data)=>data.json())
  .then((response)=>alert(JSON.stringify(response)))
  nav("/login")
  }}
  else{
    handlesubmit=(e)=>{
      e.preventDefault()
      alert("password doesnt match")
    }
  }
    return(
        <>
        <div className="cover">
         <div className="register-form">
            <div className="register-header">
            <div className="login-logo"><i class="fa-solid fa-city"></i></div>
          <p className="text">Create New Account</p>
          </div>

          <form className="register-data"
          
onSubmit={handlesubmit}>
           <input  name="MailID"
           type={"email"}
           placeholder="MailID"
           value={form.MailID}
           required
           onChange={(e)=>{setform({...form,MailID:e.target.value})}}

          />
          <input name="password"
             placeholder="Password"
           
             required
             onChange={(e)=>{setform({...form,password:e.target.value})}}

             />
        <input name="confirmpassword"
             placeholder="ConfirmPassword"
           value={password}
             required
             onChange={(e)=>{setPassowrd(e.target.value)}}
             

             />

          <button type="submit">Sign Up</button>
  
      </form>
        </div>
        </div>
         
        </>
    )
}
export default Register