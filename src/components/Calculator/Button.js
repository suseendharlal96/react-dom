import React from "react";

import { useCalc } from "./CalcProvider";
import classes from "./Calculator.module.css";

const Button = ({ style, symbol, type }) => {
  const { dispatch } = useCalc();
  return (
    <button className={classes.calcBtn} style={style} onClick={() => dispatch({ type, payload: symbol })}>
      {symbol}
    </button>
  );
};

export default Button;
