import React from "react";
import { ACTIONS } from "../../util/rawData";

import { useCalc } from "./CalcProvider";
import classes from "./Calculator.module.css";

const Display = () => {
  const {
    state: { prev, curr, operation },
    dispatch,
  } = useCalc();
  return (
    <>
      <button className={classes.calcBtn} style={{ backgroundColor: "#dadce0" }} onClick={() => dispatch({ type: ACTIONS.PREV_OPERATION })}>
        Prev
      </button>
      <div className={classes.display}>
        <div className={classes.prevOperand}>{`${prev || ""} ${operation || ""}`}</div>
        <div className={classes.currOperand}>{`${(curr !== undefined && curr !== null) || curr === "." ? curr : ""}`}</div>
      </div>
    </>
  );
};

export default Display;
