import React, { useState, useEffect } from "react";

import classNames from "./Clock.module.css";

const hands = ["hour", "min", "sec"];
const Clock = () => {
  const [rotation, setRotation] = useState({});

  useEffect(() => {
    setTime();
    const interval = setInterval(() => {
      setTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function setTime() {
    const date = new Date();
    const sec = date.getSeconds() / 60;
    const min = (sec + date.getMinutes()) / 60;
    const hour = (min + date.getHours()) / 12;
    setRotation({ sec, min, hour });
  }

  return (
    <div className={classNames.mainContainer}>
      <div className={classNames.clockContainer}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={classNames.numberContainer} style={{ transform: `rotate(${((i + 1) * 30) % 360}deg)` }}>
            <div style={{ transform: `rotate(${-1 * (((i + 1) * 30) % 360)}deg)` }}>
              {i + 1}
            </div>
          </div>
        ))}
        {hands.map((hand) => (
          <div key={hand} className={`${classNames.hands} ${classNames[hand]}`} style={{ transform: `translateX(-50%) rotate(${rotation[hand] * 360}deg)` }}></div>
        ))}
      </div>
    </div>
  );
};

export default Clock;
