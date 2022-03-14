import React, { useState, useEffect, useCallback } from "react";

// import className from "./Timer.module.css";

const getEndDate = () => {
  const endDate = new Date(2022, new Date().getMonth(), new Date().getDate() + 3, 12, 10);
  return [endDate.getDate(), endDate.getMonth() + 1, endDate.getFullYear(), endDate.getHours(), endDate.getMinutes(), endDate];
};
const CountDown = () => {
  const getRemaining = useCallback(() => {
    const rem = getEndDate()[5].getTime() - new Date().getTime();
    const days = Math.floor(rem / (24 * 60 * 60 * 1000));
    const hours = Math.floor((rem % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const min = Math.floor((rem % (60 * 60 * 1000)) / (60 * 1000));
    const sec = Math.floor((rem % (60 * 1000)) / 1000);
    const ms = Math.floor(rem % 1000);
    return [days, hours, min, sec, ms];
  }, []);

  const [remaining, setRemaining] = useState(getRemaining());
  const [endDate] = useState(getEndDate());

  useEffect(() => {
    let interval = setInterval(() => {
      setRemaining(getRemaining());
    }, 10);
    return () => clearInterval(interval);
  }, [getRemaining]);

  return (
    <>
      <h2>Timer</h2>
      <h3>
        Last date for offer: {endDate[0]}/{endDate[1]}/{endDate[2]} {endDate[3]} : {endDate[4]} AM
      </h3>
      <h3>Offer ends in: {`${remaining[0]} days ${remaining[1]} hours ${remaining[2]} minutes ${remaining[3]} sec ${remaining[4]} ms`}</h3>
    </>
  );
};

export default CountDown;
