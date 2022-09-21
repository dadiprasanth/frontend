import "./mainForm.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import General from './general';
import Property from './property';
import Location from './location';
import Basic from './basic';
function MainForm() {
  const nav=useNavigate()
  const[count,setcount]=useState(0)
  const[form,setform]=useState({
    propertyType:"",
    negotiable:"",
    price:"",
    ownerShip:"",
    propertyAge:"",
    propertyApproved:"",
    propertyDescription:"",
    bankLoan:"",
    length:"",
    breath:"",
    toatalArea:"",
    areaUnit:"",
    noOfBhk:"",
    noOfFloor:"",
    attached:"",
    westernToilet:"",
    furnished:"",
    carParking:"",
    lift:"",
    electricity:"",
    facing:"",
    name:"",
    mobile:"",
    postedBy:"",
    saleType:"",
    featuredPackage:"",
    ppdPackage:"",
    email:"",
    city:"",
    area:"",
    pincode:"",
    address:"",
    landMark:"",
    latitude:"",
    longitude:""
  })
  
  const pagedisplay=()=>{
    if(count==0){
      return(
        <Basic form={form} setform={setform}/>
      )
    }else if(count==1){
      return(
        <Property form={form} setform={setform}/>
      )
    }else if(count==2){
      return(
        <General form={form} setform={setform}/>
      )
    }else{
      return(
        <Location form={form} setform={setform}/>
      )
    }
  }
  const postfun=()=>{
    fetch("http://localhost:8080/property/add",{
      method:"POST",
      body:JSON.stringify(form),
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(x=>x.json()).then(data=>alert(data.message))
    nav("/property")
  }
  return(
    <div id="bigcon" className="bigcontainer"><div>Add New Property</div>
      <div id={"hi"+count}className="strip">
        <div id="zero"><div>1</div> Basic</div>
        <div id="one"><div>2</div>Property Details</div>
        <div id="two"><div>3</div>General info</div>
        <div id="three"><div>4</div>Location info</div>
        </div>
    <div style={{weidth:"500px"}} className="forms">
     
      <div>
      <div className='body'>{pagedisplay()}</div>
      <div className='bottom'>
        <button id="bt1"onClick={()=>{
          if(count==0){
            
            alert("i am not willing to add")
            nav("/property")
          }
          else{
            setcount(count-1)}
          }}>{count==0?"Cancel":"Previous"}</button>
        <button id="bt2" onClick={()=>{
            if(count==3){
              postfun()
              
            }
            else{
              setcount(count+1)}

        }}>{count==3?"Add Property":"Save&Continue"}</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default MainForm;
