import Sidebar from "../sidebar"
import Header from "../header"
import MainForm from "./mainForm"
const Addproperty=(props)=>{
    const {token,settoken}=props
    return(
        <>
        <div className='property'>
        <div className='child1'>
        <Sidebar/>
        </div>
        <div className='child2'>
        <Header token={token} settoken={settoken}/>
        <MainForm token={token} settoken={settoken}/>
        </div>
        </div>
        </>
    )
}
export default Addproperty;