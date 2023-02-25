import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.js'
import Resume from './components/Resume/Resume'
import Navbar from './components/Navbar/Navbar'
import NoMatch from './components/NoMatch/NoMatch'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='resume' element={<Resume />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
