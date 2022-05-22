import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

import UserCard from "./UserCard";
import { lazyImagedata } from "../../util/rawData";

import classes from "./InfiniteScroll.module.css";

const InfiniteScroll = () => {
  const [load, setLoad] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async (userController, imageController) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal: userController.signal });
    if (response.ok && response.status === 200) {
      const users = await response.json();
      const res = await fetch("https://dog.ceo/api/breed/labrador/images/random/10", { signal: imageController.signal });
      if (res.status === 200 && res.ok) {
        setLoad(false);
        const { message: imgUrls } = await res.json();
        const usersWithImg = users.reduce((acc, curr, i) => [...acc, { ...curr, img: imgUrls[i] }], []);
        // const usersWithImg = users.map((user, i) => ({ ...user, img: imgUrls[i] }));
        console.log({ usersWithImg });
        setUsers((prevUsers) => [...prevUsers, ...usersWithImg]);
      }
    }
  };

  useEffect(() => {
    const userController = new AbortController();
    const imageController = new AbortController();
    getUsers(userController, imageController);
    return () => {
      userController.abort();
      imageController.abort();
    };
  }, []);

  return load ? (
    <h2>Loading...</h2>
  ) : (
    <div className={classes.cardContainer}>{users.length > 0 && users.map((user, i) => <UserCard {...user} last={i === users.length - 1} key={uuid()} getUsers={getUsers} />)}</div>
  );
};

export default InfiniteScroll;
