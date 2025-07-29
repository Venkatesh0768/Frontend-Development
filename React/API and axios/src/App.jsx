import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";
import About from "./components/About";
import { useEffect } from "react";

function App() {
  
  

  return (
    <div className="w-full h-screen ">
      <nav className="flex justify-center items-center gap-5 py-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/show">Show</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
