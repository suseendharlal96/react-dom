import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

import UserCard from "./UserCard";
import { lazyImagedata } from "../../util/rawData";

import classes from "./InfiniteScroll.module.css";

const InfiniteScroll = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok && response.status === 200) {
      const users = await response.json();
      setUsers((prevUsers) => [...prevUsers, ...users]);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={classes.cardContainer}>
      {users.length > 0 && users.map((user, i) => <UserCard {...user} last={i === users.length - 1} img={lazyImagedata[user.id - 1].url} key={uuid()} getUsers={getUsers} />)}
    </div>
  );
};

export default InfiniteScroll;
