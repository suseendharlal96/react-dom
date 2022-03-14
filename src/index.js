import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Checkbox from "./components/Checkbox/Checkbox";
import CountDown from "./components/Countdown/Countdown";
import Calender from "./components/Calender/Calender";
import Parent from "./components/HOC/Parent";
import Error from "./components/ErrorComponent/Error";
import Modal from "./components/Modal/Modal";
import ColorSpotter from "./components/ColorSpotter/ColorSpotter";
import Clock from "./components/Clock/Clock";
import Timer from "./components/Timer/Timer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Error>
              <App />
            </Error>
          }
        >
          <Route path="checkbox" element={<Checkbox />} />
          <Route path="countdown" element={<CountDown />} />
          <Route path="calender" element={<Calender />} />
          <Route path="hoc" element={<Parent />} />
          <Route path="modal" element={<Modal />} />
          <Route path="colorspotter" element={<ColorSpotter />} />
          <Route path="clock" element={<Clock />} />
          <Route path="timer" element={<Timer />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
