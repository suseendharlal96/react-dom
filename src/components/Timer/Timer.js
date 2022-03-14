import React, { useEffect, useRef, useState } from "react";

import classNames from "./Timer.module.css";

const Timer = () => {
  const [time, setTime] = useState({ minInput: 1, secInput: 0 });
  const [timer, setTimer] = useState({ min: 1, sec: 0 });
  const [start, setStart] = useState(false);
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  let intervalId = null;

  useEffect(() => {
    let totalSeconds = timer.min * 60 + timer.sec;
    if (start && totalSeconds > 0) {
      intervalId = setInterval(() => {
        totalSeconds -= 1;
        setTimer((prev) => ({ ...prev, min: Math.floor(totalSeconds / 60), sec: totalSeconds % 60 }));
      }, 1000);
    } else {
      setStart(false);
      inputRef1.current.style.display = "block";
      inputRef2.current.style.display = "block";
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [start, timer]);

  const changeHandler = (val, type) => {
    let total = val;
    if (type === "minInput") {
      total = val * 60 + time.secInput;
    } else {
      total = time.minInput * 60 + val;
    }
    setTime((prev) => ({ ...prev, [type]: val }));
    setTimer((prev) => ({ ...prev, min: Math.floor(total / 60), sec: total % 60 }));
  };

  const startTimer = () => {
    inputRef1.current.style.display = "none";
    inputRef2.current.style.display = "none";
    setStart(true);
  };

  const pauseTimer = () => {
    setStart(false);
    clearInterval(intervalId);
    if (!start) {
      inputRef1.current.style.display = "none";
      inputRef2.current.style.display = "none";
      setStart(true);
    }
  };

  const resetTimer = () => {
    inputRef1.current.style.display = "block";
    inputRef2.current.style.display = "block";
    setStart(false);
    clearInterval(intervalId);
    let totalSeconds = time.minInput * 60 + time.secInput;
    setTimer((prev) => ({ ...prev, min: Math.floor(totalSeconds / 60), sec: totalSeconds % 60 }));
  };

  return (
    <div className={classNames.mainContainer}>
      <input
        ref={inputRef1}
        type="number"
        value={time["minInput"]}
        onKeyDown={(e) => e.preventDefault()}
        min="0"
        max="10"
        onChange={({ target: { valueAsNumber } }) => changeHandler(valueAsNumber, "minInput")}
      />
      <input
        ref={inputRef2}
        type="number"
        value={time["secInput"]}
        onKeyDown={(e) => e.preventDefault()}
        min="1"
        onChange={({ target: { valueAsNumber } }) => changeHandler(valueAsNumber, "secInput")}
      />
      <div className={classNames.timerContainer}>
        <span>{timer.min.toString().padStart(2, "0")}</span>
        <span>:</span>
        <span>{timer.sec.toString().padStart(2, "0")}</span>
      </div>
      <div className={classNames.buttonContainer}>
        <button onClick={() => startTimer()} disabled={start || inputRef1.current?.style.display === "none"}>
          Start
        </button>
        <button disabled={!start && inputRef1.current?.style.display !== "none"} onClick={() => pauseTimer()}>
          {inputRef1.current?.style.display === "none" && !start ? "Resume" : "Pause"}
        </button>
        <button disabled={!start && inputRef1.current?.style.display !== "none"} onClick={() => resetTimer()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
