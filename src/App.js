import Addproperty from './components/addproperty/addproperty';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Header from './components/header';
import './App.css';
import Search from './components/home/search';

function App() {
  
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search/>} />
        <Route path="/property/addnew" element={<Addproperty/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
