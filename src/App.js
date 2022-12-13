import { Route, Routes } from "react-router-dom";
import './App.css';
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";

function App() {

  function titleChange(pagetitle) {
    document.title = pagetitle
  }

  return (
    <div className='body'>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home titleChange={titleChange} />}/>
        <Route path="/about" element={<AboutMe titleChange={titleChange} />} />
        <Route path="/projects" element={<Projects titleChange={titleChange} />} />
        <Route path="/contact" element={<ContactMe titleChange={titleChange} />} />
      </Routes>
    </div>
  );
}

export default App;
