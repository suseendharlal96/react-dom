import React, { useState } from "react";

import Image from "./Image";
import classes from "./LazyLoading.module.css";

const data = [
  {
    id: 1,
    url: "https://source.unsplash.com/featured?animal",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 2,
    url: "https://source.unsplash.com/featured?nature",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 3,
    url: "https://source.unsplash.com/featured?ocean",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 4,
    url: "https://source.unsplash.com/featured?mountains",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 4,
    url: "https://source.unsplash.com/featured?hills",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 4,
    url: "https://source.unsplash.com/featured?river",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 4,
    url: "https://source.unsplash.com/featured?snow",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 4,
    url: "https://source.unsplash.com/featured?people",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 4,
    url: "https://source.unsplash.com/featured?cats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 4,
    url: "https://source.unsplash.com/featured?buildings",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
  {
    id: 4,
    url: "https://source.unsplash.com/featured?fish",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus quasi sit magnam dolores. Maiores repudiandae voluptate facilis et libero?",
  },
];

const LazyLoading = () => {
  const [root, setRoot] = useState();
  const [threshold, setThreshold] = useState(1.0);
  return (
    <>
    <h2>Lazy Loading using IntersectionObserver</h2>
      <div className={classes.container} id="lazyContainer">
        {data.map((d) => (
          <React.Fragment key={data.length + 1 * Math.random()}>
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
        <input type="number" min="0.0" max="1.0" value={threshold} step="0.1" onKeyPress={()=>false} onKeyDown={() => false} onPaste={() => false} onChange={({ target: { value } }) => setThreshold(value)} />
      </fieldset>
    </>
  );
};

export default LazyLoading;
