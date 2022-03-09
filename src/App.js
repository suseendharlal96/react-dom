import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";

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
