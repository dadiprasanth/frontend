import Sidebar from "../sidebar"
import Header from "../header"
import MainForm from "./mainForm"
const Addproperty=()=>{
    return(
        <>
        <div className='property'>
        <div className='child1'>
        <Sidebar/>
        </div>
        <div className='child2'>
        <Header/>
        <MainForm/>
        </div>
        </div>
        </>
    )
}
export default Addproperty;