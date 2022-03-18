import React, { useCallback } from "react";

import classNames from "./QueenMove.module.css";

const QueenMove = () => {
  const { board, black, highlight } = classNames;
  const helper = (x, y, r, c) => {
    while (r >= 0 && c >= 0 && r < 8 && c < 8) {
      console.log({ x, y, r, c });
      const block = document.querySelector(`[data-block='${r}_${c}']`);
      if (block) {
        block.classList.add(highlight);
      }
      r += x;
      c += y;
    }
  };

  const removeHighlight = useCallback(() => {
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
    <div className={board}>
      {Array.from({ length: 8 }).map((_, i) => {
        return Array.from({ length: 8 }).map((_, j) => (
          <div key={i + "" + j} onMouseOver={() => addHighLight(i, j)} onMouseLeave={() => removeHighlight()} data-block={`${i}_${j}`} className={(i + j) % 2 ? black : ""}></div>
        ));
      })}
    </div>
  );
};

export default QueenMove;
