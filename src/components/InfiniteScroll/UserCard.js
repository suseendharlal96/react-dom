import React, { useState, useEffect, useRef } from "react";

import classes from "./InfiniteScroll.module.css";

const initInfiniteObserver = (ref, cb) => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      const lastCardObj = entries[0];
      if (!lastCardObj.isIntersecting) return;
      cb();
      observer.unobserve(ref);
    },
    { threshold: 0.5 }
  );
  observer.observe(ref);
};

const initLazyImageObserver = (ref, cb) => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      const observedElObj = entries[0];
      if (!observedElObj.isIntersecting) return;
      cb(true);
      observer.unobserve(ref);
    },
    { threshold: 0.5 }
  );

  observer.observe(ref);
};

const UserCard = ({ id, name, img, email, getUsers, last }) => {
  const [imgInViewport, setImgInViewport] = useState(false);
  const lastCardRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    if (last) initInfiniteObserver(lastCardRef.current, getUsers);
    initLazyImageObserver(imgRef.current, setImgInViewport);
  }, [last, getUsers]);

  return last ? (
    <div ref={lastCardRef} className={classes.card}>
      {imgInViewport ? <img src={img} alt={name} /> : <img alt={name} ref={imgRef} className={classes.placeholder} />}
      <p>Captured by: {name}</p>
      <p>{email}</p>
    </div>
  ) : (
    <div className={classes.card}>
      {imgInViewport ? <img src={img} alt={name} /> : <img alt={name} ref={imgRef} className={classes.placeholder} />}
      <p>{id}</p>
      <p>Captured by: {name}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
