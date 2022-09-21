import Search from "./search"
import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
const Home =()=>{

    return (
        <>
        <div className='property'>
        <div className='child1'>
        <Sidebar/>
        </div>
        <div className='child2' id="search-child">
        <Header/>
        <Search/>
        </div>
        </div>
        </>
    )

}

export default Home