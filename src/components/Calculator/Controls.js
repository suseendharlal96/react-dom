import React, { useEffect, useCallback } from "react";

import Button from "./Button";
import { ACTIONS, btnArr } from "../../util/rawData";
import { useCalc } from "./CalcProvider";

const Controls = () => {
  const { dispatch } = useCalc();
  const handleKeyBoardCharac = useCallback(({ key }) => {
    if ((key >= "0" && key <= "9") || key === ".") {
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: key });
    } else if (["*", "/", "-", "+"].includes(key)) {
      dispatch({ type: ACTIONS.CHOOSE_OP, payload: key });
    } else if (key === "=" || key === "Enter") {
      dispatch({ type: ACTIONS.EVALUATE, payload: key });
    } else if (key === "Backspace") {
      dispatch({ type: ACTIONS.REMOVE_DIGIT });
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyBoardCharac);
    return () => document.body.removeEventListener("keydown", handleKeyBoardCharac);
  }, []);

  return btnArr.map((btn) => <Button key={btn.symbol} {...btn} />);
};

export default Controls;
