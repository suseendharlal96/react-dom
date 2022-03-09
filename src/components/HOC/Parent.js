import React, { useEffect, useState } from "react";

import HOC from "./HOC";
import Child from "./Child";
import Calender from "../Calender/Calender";
// There can be multiple
// import Child2 from "./Child";
// import Child3 from "./Child";

const ReturnedComponent = HOC(Child);
// const ReturnedCalenderComponent = HOC(Calender);

const Parent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [remaining, setRemaining] = useState(5);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setRemaining((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <ReturnedComponent isLoad={isLoading} name="Component Loaded" time={remaining} />
      {/* <ReturnedCalenderComponent isLoad={isLoading} name="Component Loaded" /> */}
    </>
  );
};

export default Parent;
