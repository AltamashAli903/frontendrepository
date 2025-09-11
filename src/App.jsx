import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import About from './components/About/About';

function App() {
  return (
    <div>
     <Header />
      <Routes>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
