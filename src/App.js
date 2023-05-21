import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Dailyroutine from './component/dailyroutine';
import Searchbar from './component/searchbar';
import Weekened from './component/weekened';



function App() {
  return (
   <HashRouter>
     <Navbar/>
     <Searchbar/>
    <Routes>
      <Route exact path = "/dailyroutine" element = {<Dailyroutine/>}/>
      <Route exact path = "/weekened" element = {<Weekened/>}/>
    </Routes>
   </HashRouter>
  );
}

export default App;
