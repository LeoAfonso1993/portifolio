import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";

function App() {

  function titleChange(pagetitle) {
    document.title = pagetitle
  }

  return (
    <Routes>
      <Route path="/" element={<Home titleChange={titleChange} />}/>
    </Routes>
  );
}

export default App;
