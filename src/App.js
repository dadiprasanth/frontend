
import Header from './components/header';
import './App.css';
import MainForm from './components/addproperty/mainForm';
import Sidebar from "./components/sidebar"

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
    <Sidebar/>
    <Header/>
    </>
  );
}

export default App;
