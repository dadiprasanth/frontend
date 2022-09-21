import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Header from './components/header';
import './App.css';
import Search from './components/home/search';
import Sidebar from "./components/sidebar";

function App() {
  
  return (
    <>
    {/* <div class="main">
      <div>
        // <Sidebar/>
      </div>
    
      <div>
        <Header/>
        <MainForm/>
      </div>
    </div> */}
    {/* <MainForm/> */}

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search/>} />
        <Route path="/addnew" element={<Sidebar/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
