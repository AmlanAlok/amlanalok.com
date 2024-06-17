import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.js'
import Navbar from './components/Navbar/Navbar'
import NoMatch from './components/NoMatch/NoMatch'
import Footer from './components/Footer/Footer';
import ProgrammingLanguages from './components/ProgrammingLanguages/ProgrammingLanguages.js';

function App() {
  return (
    // <div className='container'>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='resume' element={<Resume />} /> */}
        <Route path='/ProgrammingLanguages' element={<ProgrammingLanguages />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
