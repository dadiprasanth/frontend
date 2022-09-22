import Search from "./search"
import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import { useState , useEffect} from "react"
const Home =()=>{
    const [data , setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/property',{
         method:"GET",
          headers: {
           'Content-Type': 'application/json',
            'Accept':'application/json'
           }
        }).then((data)=> data.json())
        .then((money)=> setData(money)
      )
      },[])
    return (
        <>
        <div className='property'>
        <div className='child1'>
        <Sidebar/>
        </div>
        <div className='child2' id="search-child">
        <Header/>
        <Search data = {data}/>
        </div>
        </div>
        </>
    )

}

export default Home