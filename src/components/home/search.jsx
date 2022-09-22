import {useState} from 'react'
import Table from './table';
import {Link} from 'react-router-dom';
import "./search.css"

const Search = (props) => {
    const data = props.data;
    const [query , setQuery] = useState("")
    const info = data.filter(data => data.ppdid.toLowerCase().includes(""));

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