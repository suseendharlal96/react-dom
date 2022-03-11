import React, { useEffect, useRef, useState } from "react";

import classNames from "./ColorSpotter.module.css";

const ColorSpotter = () => {
  const [gridSize, setGridSize] = useState(4);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem("highscore") || 0);
  const [randomColor, setRandomColor] = useState([]);
  const [randomIndex, setRandomIndex] = useState([]);
  const blockRef = useRef(null);

  const getRandomColor = () => {
    console.log("here1");
    const colors = [];
    for (let i = 0; i < 3; i++) {
      colors.push(Math.floor(Math.random() * 255 + 1));
    }
    setRandomColor(colors);
  };

  const getRandomIndex = () => {
    console.log("here3");
    setRandomIndex([Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize)]);
  };

  useEffect(() => {
    getRandomColor();
    getRandomIndex(gridSize);
  }, [gridSize]);

  useEffect(() => {
    if (score > +highScore) {
      localStorage.setItem("highscore", score);
      setHighScore(score);
    }
  }, [score]);

  const checkHandler = (r, c) => {
    if (r === randomIndex[0] && c === randomIndex[1]) {
      setGridSize((prev) => prev + 1);
      setScore((prev) => prev + 1);
    } else {
      console.log("sd", blockRef.current);
      if (blockRef.current) {
        blockRef.current.animate([{ transform: "translate(-20px)" }, { transform: "translate(20px)" }, { transform: "translate(-20px)" }], {
          duration: 100,
        });
      }
      setGridSize(4);
      setScore(0);
    }
  };

  return (
    <div className={classNames.mainContainer}>
      Score:<h3>{score}</h3>
      <div ref={blockRef} className={classNames.gridContainer} style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
        {Array.from({ length: gridSize }).map((_, i) => {
          return Array.from({ length: gridSize }).map((_, j) => (
            <div
              onClick={() => checkHandler(i, j)}
              key={`${i}_${j}`}
              className={classNames.block}
              style={
                i === randomIndex[0] && j === randomIndex[1]
                  ? { backgroundColor: `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.8)` }
                  : { backgroundColor: `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 1)` }
              }
            ></div>
          ));
        })}
      </div>
      High Score:<h3>{highScore}</h3>
    </div>
  );
};

export default ColorSpotter;
