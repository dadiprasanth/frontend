import Addproperty from './components/addproperty/addproperty';
import './App.css';

import Login from './components/Authentication/login';
import Register from './components/Authentication/register';
import Home from './components/home/home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  
  return (

  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/> 
    <Route path='/property' element={<Home/>} />
    <Route path="/property/addnew" element={<Addproperty/>}/> 
  </Routes>
  </BrowserRouter>
    
  )}


export default App;
