import React, { useState, useRef, useEffect } from "react";

import classNames from "./Memory.module.css";

const Memory = () => {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [highscore, setHighscore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gridSize, setGridSize] = useState(4);
  const [randomIndex, setRandomIndex] = useState([]);
  const buttonRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    console.log({ level });
    const res = [];
    for (let i = 0; i < level; i++) {
      res.push(`${Math.floor(Math.random() * gridSize)}_${Math.floor(Math.random() * gridSize)}`);
    }
    setRandomIndex(res);
    if (gameStarted) {
      setTimeout(() => {
        startGame(res);
      }, 1000);
    }
    if (score > highscore) {
      setHighscore(score);
    }
  }, [level]);

  //   useEffect(() => {
  //     if (gameStarted && randomIndex.length !== 0) {
  //       setTimeout(() => {
  //         startGame();
  //       });
  //     }
  //   }, [randomIndex]);

  const startGame = (randomIndex) => {
    setGameStarted(true);
    buttonRef.current.disabled = true;
    gridRef.current.disabled = true;
    console.log(randomIndex);
    for (let i = 0; i < randomIndex.length; i++) {
      setTimeout(() => {
        console.log(document.querySelector(`[data-id='${randomIndex[i]}']`));
        document.querySelector(`[data-id='${randomIndex[i]}']`).classList.toggle(classNames.highlight);
        setTimeout(() => {
          document.querySelector(`[data-id='${randomIndex[i]}']`).classList.toggle(classNames.highlight);
          if (i === randomIndex.length - 1) {
            setTimeout(() => {
              gridRef.current.disabled = false;
            });
          }
        }, 400);
      }, i * 1000);
    }
  };

  const handleClick = (dataId) => {
    if (gridRef.current.disabled) return;
    // let temp = [...randomIndex];
    if (dataId === randomIndex[0]) {
      const temp = [...randomIndex];
      console.log({ temp });
      temp.shift();
      setRandomIndex(temp);
      document.querySelector(`[data-id='${dataId}']`).classList.toggle(classNames.green);
      setTimeout(() => {
        document.querySelector(`[data-id='${dataId}']`).classList.toggle(classNames.green);
      }, 400);
      console.log({ randomIndex, temp });
      if (temp.length === 0) {
        setScore((prev) => prev + 1);
        setLevel((prev) => prev + 1);
      }
    } else {
      document.querySelector(`[data-id='${dataId}']`).classList.toggle(classNames.red);
      setTimeout(() => {
        document.querySelector(`[data-id='${dataId}']`).classList.toggle(classNames.red);
      }, 400);
      gridRef.current.animate([{ transform: "translateX(-5px)" }, { transform: "translateX(5px)" }, { transform: "translateX(-5px)" }], {
        iterations: 8,
        duration: 100,
      });
      setLevel(1);
      setScore(0);
      buttonRef.current.disabled = false;
      gridRef.current.disabled = true;
    }
  };

  return (
    <div className={classNames.mainContainer}>
      <button ref={buttonRef} onClick={() => startGame(randomIndex)}>
        Start Game
      </button>
      <div>Score: {score}</div>
      <div ref={gridRef} className={classNames.grid}>
        {Array.from({ length: gridSize }).map((_, i) => {
          return Array.from({ length: gridSize }).map((_, j) => <div data-id={`${i}_${j}`} className={classNames.block} key={`${i}_${j}`} onClick={() => handleClick(`${i}_${j}`)}></div>);
        })}
      </div>
      <div>High Score: {highscore}</div>
    </div>
  );
};

export default Memory;
