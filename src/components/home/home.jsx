import Search from "./search"
import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import { useState , useEffect} from "react"
const Home =(props)=>{
    const [data , setData] = useState([]);
    const {token,settoken,id,setid,name}=props;
 
    useEffect(()=>{
        fetch('http://localhost:8080/property',{
         method:"GET",
          headers: {
           'Content-Type': 'application/json',
            'Accept':'application/json',
            "Authorization":token
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
        <Header token={token} settoken={settoken} id={id} setid={setid} name={name}/>
        <Search data = {data} token={token}/>
        </div>
        </div>
        </>
    )

}

export default Home