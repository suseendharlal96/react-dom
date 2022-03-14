import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const Checkbox = React.lazy(() => import("./components/Checkbox/Checkbox"));
const CountDown = React.lazy(() => import("./components/Countdown/Countdown"));
const Calender = React.lazy(() => import("./components/Calender/Calender"));
const Parent = React.lazy(() => import("./components/HOC/Parent"));
const Error = React.lazy(() => import("./components/ErrorComponent/Error"));
const Modal = React.lazy(() => import("./components/Modal/Modal"));
const ColorSpotter = React.lazy(() => import("./components/ColorSpotter/ColorSpotter"));
const Clock = React.lazy(() => import("./components/Clock/Clock"));
const Timer = React.lazy(() => import("./components/Timer/Timer"));
const StarRating = React.lazy(() => import("./components/StarRating/StarRating"));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <React.Suspense fallback={<h2>Loading...</h2>}>
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
            <Route path="star" element={<StarRating />} />
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
