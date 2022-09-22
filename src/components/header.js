import { useState } from "react";
import {useNavigate} from "react-router-dom"
const Header=()=>{
    const nav=useNavigate()
    const[pop,setpop]=useState(false)
    const popfun=()=>{
        if(!pop){
            return(
                <><i id="pop" class="fa fa-arrow-down" aria-hidden="true"></i></>
            )
        }else{
            return(
                <><i id="pop"class="fa fa-arrow-up" aria-hidden="true"></i>
                <div class="pop" onClick={()=>nav("/login")}>logout</div>
                </>
            )

        }
    }
    return(
        <div className="top">
        <header>
            <div className="headerid">userid :06PPD125</div>
            <div>
            <div>
                <span onClick={()=>setpop(!pop)}><i class="fa-solid fa-user"></i> UserName 
                 <span>{popfun()}</span>
                </span>
            </div>
            </div>
            
        </header>
        </div>
    )
}
export default Header;