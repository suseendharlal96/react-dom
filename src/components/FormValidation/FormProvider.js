import React, { createContext, useContext, useMemo, useReducer } from "react";

const FormContext = createContext();

const initState = {
  activeIndex: 0,
  steps: 2,
  fieldStart: 0,
  currentForm: [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Your name",
      value: "",
      isValidationRequired: true,
      validations: {
        isRequired: true,
        minLen: 1,
        maxLen: 20,
      },
      isValid: false,
      isTouched: false,
    },
    {
      id: 2,
      name: "Age",
      type: "number",
      placeholder: "Your age",
      value: 1,
      isValidationRequired: true,
      validations: {
        isRequired: true,
        min: 1,
        max: 60,
      },
      isValid: true,
      isTouched: false,
    },
    {
      id: 3,
      name: "Gender",
      type: "radio",
      placeholder: "Your Gender",
      value: "Male",
      isValidationRequired: true,
      validations: {
        isRequired: false,
      },
      options: ["Male", "Female", "Others"],
      isValid: true,
      isTouched: false,
    },
    {
      id: 4,
      name: "Payment method",
      type: "select",
      placeholder: "Your Method",
      value: "cash",
      isValidationRequired: true,
      validations: {
        isRequired: false,
      },
      options: [
        { key: "cash", val: "Cash" },
        { key: "card", val: "Card" },
        { key: "ondelivery", val: "On-delivery" },
      ],
      isValid: true,
      isTouched: false,
    },
  ],
};

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "next":
      return { ...state, activeIndex: state.activeIndex + 1, fieldStart: state.fieldStart + 2 };
    case "prev":
      return { ...state, activeIndex: state.activeIndex - 1, fieldStart: state.fieldStart - 2 };
    default:
      return state;
  }
};

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const { state, dispatch } = useContext(FormContext);
  if (!state || !dispatch) {
    throw new Error("Use inside context");
  }
  return { state, dispatch };
};
