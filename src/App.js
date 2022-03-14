import React from "react";
import { Outlet } from "react-router";

import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
