import React from 'react'
import {useState} from 'react'
import Table from './table';

import data from './new';
import {Link} from 'react-router-dom'
import Sidebar from '../sidebar';
import Header from '../header';

const Search = () => {

    const [query , setQuery] = useState("")
    const info = data.filter(data=> data.PPDID.toLowerCase().includes(query))
  return (
    <>
            <div className='search-body'>
              <div className='searchBox'>
                <form>
                 <input type="text" 
                   placeholder='propId'
                   className='searchbar'
                   onChange={(e)=>{setQuery(e.target.value)}}
                   >
                 </input>
            
                     <Link to={"/property/addNew"}>
                      <button className='newprop'> add new prop</button>
                    </Link> 
                </form>
            </div>
            <Table data={info}/>
        </div>
    

    </>
  )
}

export default Search ;