import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.js'
import Resume from './components/Resume/Resume'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='resume' element = {<Resume />}/>
    </Routes>
    </>
  );
}

export default App;
