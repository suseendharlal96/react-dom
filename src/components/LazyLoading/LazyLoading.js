import React, { useState } from "react";
import uuid from "react-uuid";

import Image from "./Image";
import classes from "./LazyLoading.module.css";
import { lazyImagedata } from "../../util/rawData";

const LazyLoading = () => {
  const [root, setRoot] = useState();
  const [threshold, setThreshold] = useState(1.0);
  return (
    <>
      <h2>Lazy Loading using IntersectionObserver</h2>
      <div className={classes.container} id="lazyContainer">
        {lazyImagedata.map((d) => (
          <React.Fragment key={uuid()}>
            <Image {...d} root={root} threshold={threshold} />
            <p>{d.text}</p>
          </React.Fragment>
        ))}
      </div>
      <fieldset>
        <legend>Root</legend>
        <input type="radio" name="root" checked={root === undefined} id="default" value={undefined} onChange={() => setRoot(undefined)} />
        <label htmlFor="default">Device Viewport(default)</label>
        <input type="radio" id="container" name="root" checked={root === document.getElementById("lazyContainer")} onChange={() => setRoot(document.getElementById("lazyContainer"))} />
        <label htmlFor="container">Container</label>
      </fieldset>
      <fieldset>
        <legend>Threshold(min=0.0, max=1.0)</legend>
        <input
          type="number"
          min="0.0"
          max="1.0"
          value={threshold}
          step="0.1"
          onKeyPress={() => false}
          onKeyDown={() => false}
          onPaste={() => false}
          onChange={({ target: { value } }) => setThreshold(value)}
        />
      </fieldset>
    </>
  );
};

export default LazyLoading;
