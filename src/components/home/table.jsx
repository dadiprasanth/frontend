import React, { useState } from 'react'
import './table.css'
const Table = (props) => {
   const {data}=props ;
  const changeStatus = async(e)=>{
   const property_id= e.target.parentElement.children[0].innerText ;
   const undate = {ppdid:property_id}

  await fetch("http://localhost:8080/property",{
    method:"PUT",
    body:JSON.stringify(undate),
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  }).then(x=>x.json()).then(data=>alert(data.message)); 
  e.target.innerText= "Sold"
  }
  return (
    <>
    <table>
      <tbody>
        <tr className="table-row">
            <th className='first-td'>PPD ID</th>
            <th className='td'>Image</th>
            <th className='td'>Property</th>
            <th className='td'>Contact</th>
            <th className='td'>Area</th>
            <th className='td'>Views</th>
            <th className='td'>Status</th>
            <th className='td'>Days Left</th>
            <th className='last-td'>Action</th>
        </tr>
        {
          data.map((item)=>{
            return (
              <>
              <tr key={item.ppdid} className="table-row"> 
              <td className='first-td'>{item.ppdid}</td>
              <td className='td' id='Image'><i className='far fa-images'></i></td>
              <td className='td'>{item.propertyType}</td>
              <td className='td'>{item.mobile}</td>
              <td className='td'>{item.toatalArea}</td>
              <td className='td'>{item.views}</td>
              <td onClick={changeStatus} className='td' id='status-font'>{item.status}</td>
              <td className='td'>{item.days}</td>
              <td className='last-td' id='Action'><i className="fa fa-eye"> </i><i className="fa fa-edit" style={{marginLeft :"10px"}}></i></td>
              </tr>
              </>
              
            ) 
          })
        } 
      </tbody>
        
    </table>
    </>
   
  )
}

export default Table