import React from "react";

import Display from "./Display";
import Controls from "./Controls";
import { CalcProvider } from "./CalcProvider";

import classes from "./Calculator.module.css";

const Calculator = () => {
  return (
    <div className={classes.calcContainer}>
      <CalcProvider>
        <Display />
        <Controls />
      </CalcProvider>
    </div>
  );
};

export default Calculator;
