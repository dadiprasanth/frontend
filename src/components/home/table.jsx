import React from 'react'
import './table.css'
const Table = (props) => {
   const {data}=props ;

  const changeStatus =(e)=>{
   const property_id= e.target.parentElement.children[0].innerText ;
    console.log(property_id)
  }
  return (
    <>
    <table className='table'>
      <tbody>
        <tr className='table-heading'>
            <th>PPD ID</th>
            <th>Image</th>
            <th>Property</th>
            <th>Contact</th>
            <th>Area</th>
            <th>Views</th>
            <th>Status</th>
            <th>Days Left</th>
            <th>Action</th>
        </tr>
        
        {
          data.map((item)=>{
            return (
              <>
              <tr key={item.PPDID} className="table-row"> 
              <td>{item.PPDID}</td>
              <td><i className='far fa-images'></i></td>
              <td>{item.propertyType}</td>
              <td>{item.mobile}</td>
              <td>{item.toatalArea}</td>
              <td>{item.views}</td>
              <td onClick={changeStatus} value={"5"}>{item.status}</td>
              <td>{item.days}</td>
              <td><i className="fa fa-eye"> </i><i className="fa fa-edit" style={{marginLeft :"10px"}}></i></td>
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