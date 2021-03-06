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
  return observer;
};

const Image = ({ id, url, root, threshold }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageRef = useRef(null);

  useEffect(() => {
   const observer= initObserver(imageRef.current, setIsLoaded, root, threshold);
   return ()=>observer.disconnect();
  }, [root, threshold]);

  return isLoaded ? <img alt={id} className={classes.placeholder} src={url} /> : <img alt={id} ref={imageRef} className={classes.placeholder} />;
};

export default Image;
