import React, { useCallback, useState } from "react";

import classNames from "./StarRating.module.css";

const StarRating = () => {
  const [starRating, setstarRating] = useState(null);
  const stars = 5;
  const set = new Set();
  const hoverHandler = useCallback((id) => {
    for (let i = 0; i <= id; i++) {
      document.getElementById(i).style.setProperty("--starColor", "hsl(39, 90%, 61%)");
    }
  }, []);

  const removeHighlight = useCallback(() => {
    for (let i = 0; i < stars; i++) {
      if (!set.has(i)) document.getElementById(i).style.setProperty("--starColor", "hsl(0, 0%, 100%)");
    }
  }, []);

  const setRating = useCallback((id) => {
    setstarRating(id + 1);
    if (set.has(id + 1)) {
      for (let i = id + 1; i <= stars; i++) {
        set.delete(i);
        removeHighlight();
      }
    } else if (set.has(id)) {
      setstarRating(0);
      set.clear();
      removeHighlight();
    } else {
      for (let i = 0; i <= id; i++) {
        set.add(i);
        document.getElementById(i).style.setProperty("--starColor", "hsl(39, 90%, 61%)");
      }
    }
  }, []);

  return (
    <>
      <div className={classNames.starContainer}>
        {Array.from({ length: stars }).map((_, i) => (
          <div key={i} id={i} onClick={() => setRating(i)} onMouseOver={() => hoverHandler(i)} onMouseLeave={() => removeHighlight()} className={classNames.star}></div>
        ))}
      </div>
      <p>
        Your rating : <strong>{starRating ?? starRating}</strong>
      </p>
    </>
  );
};

export default StarRating;
