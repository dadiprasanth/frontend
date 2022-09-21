
import Addproperty from './components/addproperty/addproperty';
import './App.css';
import Login from './components/Authentication/login';
import Register from './components/Authentication/register';
import {BrowserRouter,Routes,Route} from "react-router-dom";



function App() {
  
  return (
     <>
     {/* //place your routing elements here  u can see if i add routoing here i will give this part*/}
    <Addproperty/>
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>

  </Routes></BrowserRouter>
    </>
  );
}

export default App;
