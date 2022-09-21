import Addproperty from './components/addproperty/addproperty';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './components/home/home';

function App() {
  
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path='/property' element={<Home/>} />
        <Route path="/property/addnew" element={<Addproperty/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
