import React, { createContext, useContext, useMemo, useReducer } from "react";
import { FORM_ACTIONS } from "../../util/rawData";

const FormContext = createContext();

const initState = {
  activeIndex: 0,
  steps: 2,
  fieldStart: 0,
  currentForm: {
    formOne: {
      fields: [
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
      ],
      isValid: false,
    },
    formTwo: {
      fields: [
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
      isValid: false,
    },
  },
  isFormValid: false,
};

const checkValidation = (validations, val) => {
  let isValid = true;
  if (validations.minLen) {
    isValid = isValid && val.trim().length >= validations.minLen;
  }
  if (validations.maxLen) {
    isValid = isValid && val.trim().length <= validations.maxLen;
  }
  if (validations.min) {
    isValid = isValid && val >= validations.min;
  }
  if (validations.max) {
    isValid = isValid && val <= validations.max;
  }
  return isValid;
};

const changeHandler = (state, val, formType, id) => {
  console.log({ val, id });
  const activeIndex = state.activeIndex;
  const clone = JSON.parse(JSON.stringify(state.currentForm));
  const changedEl = clone[formType]?.fields?.find((cl) => cl.id === id);
  console.log({ changedEl });
  switch (id) {
    case 1:
      changedEl.isTouched = true;
      if (changedEl.validations) {
        changedEl.isValid = checkValidation(changedEl.validations, val);
        changedEl.value = val;
      }
      break;
    case 2:
      changedEl.isTouched = true;
      if (changedEl.validations) {
        changedEl.isValid = checkValidation(changedEl.validations, val);
        changedEl.value = val;
      }
      break;
    default:
      changedEl.isTouched = true;
      changedEl.value = val;
      changedEl.isValid = true;
  }
  let formisValid = true;
  clone[formType]?.fields.forEach((field) => {
    formisValid = formisValid && field.isValid;
  });
  clone[formType].isValid = formisValid;
  return { ...initState, currentForm: clone, activeIndex };
};

// const submitForm = (e) => {
//   e.preventDefault();
//   if (isFormValid) {
//     const formData = {};
//     formElements.forEach((el) => {
//       formData[el.name] = el.value;
//     });
//     document.getElementById("object").innerText = JSON.stringify(formData);
//   } else {
//     document.getElementById("object").innerText = "Form is invalid";
//   }
// };

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case FORM_ACTIONS.NEXT_FORM:
      return { ...state, activeIndex: state.activeIndex + 1, fieldStart: state.fieldStart + 2 };
    case FORM_ACTIONS.PREV_FORM:
      return { ...state, activeIndex: state.activeIndex - 1, fieldStart: state.fieldStart - 2 };
    case FORM_ACTIONS.UPDATE_FIELDS:
      const { val, id, formType } = payload;
      return changeHandler(state, val, formType, id);
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
