import React, { useState, useEffect, useRef } from "react";

import classes from "./InfiniteScroll.module.css";

const initInfiniteObserver = (ref, cb) => {
  const infiniteObserver = new IntersectionObserver(
    (entries, observer) => {
      const lastCardObj = entries[0];
      if (!lastCardObj.isIntersecting) return;
      cb();
      observer.unobserve(ref);
    },
    { threshold: 0.5 }
  );
  infiniteObserver.observe(ref);
  return infiniteObserver;
};

const initLazyImageObserver = (ref, cb) => {
  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      const observedElObj = entries[0];
      if (!observedElObj.isIntersecting) return;
      cb(true);
      observer.unobserve(ref);
    },
    { threshold: 0.5 }
  );

  imageObserver.observe(ref);
  return imageObserver;
};

const UserCard = ({ id, name, img, email, getUsers, last }) => {
  const [imgInViewport, setImgInViewport] = useState(false);
  const lastCardRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    let imageObserver;
    let infiniteObserver;
    if (last) {
      infiniteObserver = initInfiniteObserver(lastCardRef.current, getUsers);
    }
    imageObserver = initLazyImageObserver(imgRef.current, setImgInViewport);
    return () => {
      imageObserver?.disconnect();
      infiniteObserver?.disconnect();
    };
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
