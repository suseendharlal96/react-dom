import React from "react";

import { useCalc } from "./CalcProvider";
import classes from "./Calculator.module.css";

const Display = () => {
  const {
    state: { prev, curr, operation },
  } = useCalc();
  return (
    <div className={classes.display}>
      <div className={classes.prevOperand}>{`${prev || ""} ${operation || ""}`}</div>
      <div className={classes.currOperand}>{`${(curr !== undefined && curr !== null) || curr === "." ? curr : ""}`}</div>
    </div>
  );
};

export default Display;
