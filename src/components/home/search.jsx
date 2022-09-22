import React from 'react'
import {useState,useEffect} from 'react'
import Table from './table';

import {Link} from 'react-router-dom'
import "./search.css"

const Search = () => {

    // const [query , setQuery] = useState("")
    // const info = data.filter(data=> data.PPDID.toLowerCase().includes(query))
    
  
      const [query , setQuery] = useState("")
      const [propdata , setPropdata] = useState([456,455])
      const info = propdata.filter(data => data.PPDID.toLowerCase().includes(query));
  
      useEffect(()=>{
        fetch('http://localhost:8080/property',{
          method:"GET",
          headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json'
          }
        }).then((data)=> data.json())
        .then(data=>  setPropdata(data)
        )
        console.log(propdata)
      },[])
      
    // console.log(propdata)
  return (
    <>
    <div className='bigcontainer'>
     <div className='search-body'>
              <div className='searchBox'>
                <form className='form'>
                 <input type="text" 
                   placeholder='PPDID'
                   className='searchbar'
                   onChange={(e)=>{setQuery(e.target.value)}}
                   >
                 </input>
                    <Link to={"/property/addNew"}>
                      <button className='newprop'> + Add Property</button>
                    </Link> 
                </form>
            </div>
            <div className='table-container'>
            <Table data={info}/>
            </div>
      </div>
      </div>   
    </>
  )
}

export default Search ;