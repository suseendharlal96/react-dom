import React from "react";
import { Outlet } from "react-router";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
