import React, { useCallback } from "react";

import classNames from "./QueenMove.module.css";

const QueenMove = () => {
  const { board, black, highlight } = classNames;
  let timeoutId;
  const helper = (x, y, r, c) => {
    let i = 1;
    while (r >= 0 && c >= 0 && r < 8 && c < 8) {
      const block = document.querySelector(`[data-block='${r}_${c}']`);
      timeoutId = setTimeout(() => {
        block.classList.add(highlight);
      }, i * 100);
      i++;
      r += x;
      c += y;
    }
  };

  const removeHighlight = useCallback(() => {
    clearTimeout(timeoutId);
    document.querySelectorAll("[data-block]").forEach((block) => {
      block.classList.remove(highlight);
    });
  }, []);

  const addHighLight = useCallback((r, c) => {
    const directions = [
      //   [0, 1],
      //   [0, -1],
      //   [1, 0],
      //   [-1, 0],
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];

    for (let [x, y] of directions) {
      helper(x, y, r, c);
    }
  }, []);

  return (
    <>
      <p>Click on any block</p>
      <div className={board}>
        {Array.from({ length: 8 }).map((_, i) => {
          return Array.from({ length: 8 }).map((_, j) => (
            <div
              key={i + "" + j}
              style={{ cursor: "pointer" }}
              onClick={() => addHighLight(i, j)}
              onMouseOver={() => removeHighlight()}
              data-block={`${i}_${j}`}
              className={(i + j) % 2 ? black : ""}
            ></div>
          ));
        })}
      </div>
    </>
  );
};

export default QueenMove;
