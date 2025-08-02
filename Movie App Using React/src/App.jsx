import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="bg-[#1F1E24] w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tvshows" element={<Tvshows />}></Route>
  
        <Route path="/:media_type/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
