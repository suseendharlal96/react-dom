import React, { useState, useRef, useEffect } from "react";

import classes from "./LazyLoading.module.css";

const initObserver = (ref, fn, root, threshold) => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      if (entries[0].isIntersecting) {
        fn(true);
        observer.unobserve(ref);
      }
    },
    { root: root || null, threshold: threshold <= 1 ? threshold : 1 }
  );
  observer.disconnect();
  observer.observe(ref);
};

const Image = ({ id, url, root, threshold }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageRef = useRef(null);

  useEffect(() => {
    initObserver(imageRef.current, setIsLoaded, root, threshold);
  }, [root, threshold]);

  return isLoaded ? <img className={classes.placeholder} src={url} /> : <img ref={imageRef} className={classes.placeholder} />;
};

export default Image;
