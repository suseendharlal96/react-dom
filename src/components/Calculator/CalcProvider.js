import React, { createContext, useContext, useMemo, useReducer } from "react";

import { ACTIONS } from "../../util/rawData";

const CalcContext = createContext();

const evaluate = (prev, curr, operation) => {
  if (operation === "+") {
    return +prev + +curr;
  }
  if (operation === "-") {
    return +prev - +curr;
  }
  if (operation === "*") {
    return +prev * +curr;
  }
  if (operation === "/") {
    return +prev / +curr;
  }
  if (operation === "%") {
    return +prev % +curr;
  }
};

const calcReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.curr.includes(".") && payload === ".") return state;
      if (state.overwrite && payload !== ".") return { ...state, curr: `${payload}`, overwrite: false };
      return { ...state, curr: `${state.curr || ""}${payload}`, overwrite: false };

    case ACTIONS.REMOVE_DIGIT:
      let existingNum = state.curr;
      let overwrite = true;
      existingNum = existingNum.substring(0, existingNum.length - 1);
      if (existingNum.length === 0) {
        existingNum = "0";
      } else {
        overwrite = false;
      }
      return { ...state, curr: existingNum, overwrite };

    case ACTIONS.CLEAR:
      return { ...state, curr: "0", overwrite: true, prev: null, operation: null };

    case ACTIONS.CHOOSE_OP:
      return { ...state, prev: state.curr, curr: "0", operation: payload, overwrite: true };

    case ACTIONS.EVALUATE:
      if (state.operation && state.curr && state.prev) {
        const result = evaluate(state.prev, state.curr, state.operation);
        console.log({ result });
        state.currStack.push(state.curr);
        state.prevStack.push(`${state.prev}_${state.operation}`);
        const currStack = state.currStack;
        const prevStack = state.prevStack;
        console.log({ currStack, prevStack });
        return { ...state, curr: result.toString(), prev: null, operation: null, prevStack, currStack };
      }

    case ACTIONS.PREV_OPERATION:
      if (state.currStack.length > 0 && state.prevStack.length > 0) {
        const oldCurr = state.currStack[state.currStack.length - 1];
        const oldPrev = state.prevStack[state.prevStack.length - 1].split("_")[0];
        const oldOperation = state.prevStack[state.prevStack.length - 1].split("_")[1];
        return {
          ...state,
          operation: oldOperation,
          curr: oldCurr,
          prev: oldPrev,
          currStack: state.currStack.slice(0, state.currStack.length - 1),
          prevStack: state.prevStack.slice(0, state.prevStack.length - 1),
        };
      }

    default:
      return state;
  }
};

export const CalcProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calcReducer, {
    curr: "0",
    prev: null,
    currStack: [],
    prevStack: [],
    overwrite: true,
    operation: null,
  });
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );
  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
};

export const useCalc = () => {
  const context = useContext(CalcContext);
  if (!context) {
    throw new Error("Use inside context");
  }
  return context;
};
