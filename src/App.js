import Addproperty from './components/addproperty/addproperty';
import './App.css';

import Login from './components/Authentication/login';
import Register from './components/Authentication/register';
import Home from './components/home/home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from 'react';
function App() {
  const[token,settoken]=useState("")
  return (

  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/login" element={<Login token={token} settoken={settoken}/>}/> 
    <Route path='/property' element={<Home token={token} settoken={settoken}/>} />
    <Route path="/property/addnew" element={<Addproperty token={token} settoken={settoken}/>}/> 
  </Routes>
  </BrowserRouter>
    
  )}


export default App;
