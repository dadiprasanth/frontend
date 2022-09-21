import React, { useState } from "react"
// import { Icon } from 'react-icons-kit';
// import {eyeOff} from 'react-icons-kit/feather/eyeOff';
// import {eye} from 'react-icons-kit/feather/eye';
 import { useNavigate } from "react-router-dom";
import "./login.css"
const Login=()=>{
    const [input,setInput]=useState("")
    // const [type,settype]=useState("password")
    // const [icon,setIcon]=useState(eyeOff)
    // const Toggle=()=>{
    //     if(type==="password"){
    //         setIcon(eye);
    //         settype("text")
    //     }
    //     else{
    //         setIcon(eyeOff);
    //         settype("password")
    //     }
    // }

    let nav=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(input)
       nav("/property")
    }
    return(
        <>
        <div className="login-form">
            <div>
                <div className="login-logo"><i class="fa-solid fa-city"></i></div>
                <p className="text">Enter your credentials to access your account</p>
            </div>
            <form className="login-data" onSubmit={handleSubmit} >
          

                <input className="userdata"  name="userid"  required  placeholder="User ID" onChange={(e)=>{setInput({...input,userid:e.target.value})}} />

                <input className="userdata"  name="userid"
                  type={"email"}
                required
                placeholder="User ID"
                onChange={(e)=>{setInput({...input,userid:e.target.value})}}
                />



           <input  required  placeholder="Password" onChange={(e)=>{setInput({...input,password:e.target.value})}}           />


            <button type="sumbit">Sign In</button>

          </form>
         
        </div>

        </>
    )
}
export default Login
 