import React from "react";
import NavBar from "./components/NavBar";
import Routing from "./utils/Routing";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-">
      <NavBar />
      <Routing />
    </div>
  );
}

export default App;
