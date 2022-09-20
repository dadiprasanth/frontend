import "./mainForm.css"
import { useState } from 'react';

import General from './general';
import Property from './property';
import Location from './location';
import Basic from './basic';
function MainForm() {
  const[count,setcount]=useState(0)
  const[form,setform]=useState({
    propertyType:"",
    negotable:"",
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
  const headers=["basicinfo","personaldetails","generaldetail","Locationdetails"]
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
  return(
    <><div style={{weidth:"500px"}} className="forms">
      <div className='body'>{pagedisplay()}</div>
      <div className='bottom'>
        <button id="bt1"onClick={()=>{
          if(count==0){
            console.log(form)
            alert("cancel event")
          }
          else{
            setcount(count-1)}
          }}>{count==0?"Cancel":"Previous"}</button>
        <button id="bt2" onClick={()=>{
            if(count==3){
              console.log(form)
              alert("form submittes")
            }
            else{
              setcount(count+1)}

        }}>{count==3?"Add Property":"Save&Continue"}</button>
      </div>
    </div>
    </>
  )
}

export default MainForm;
