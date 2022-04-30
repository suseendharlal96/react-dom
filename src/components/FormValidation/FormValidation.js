import React, { useState } from "react";

import Input from "./Input";

import classes from "./Form.module.css";

const FormValidation = () => {
  const [formElements, setFormElements] = useState([
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
  ]);
  const [isFormValid, setFormValid] = useState(false);

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

  const changeHandler = (val, id) => {
    console.log({ val, id });
    const clone = JSON.parse(JSON.stringify(formElements));
    const changedEl = clone.find((cl) => cl.id === id);
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
    clone.forEach((el) => {
      formisValid = el.isValid && formisValid;
    });
    setFormElements(clone);
    setFormValid(formisValid);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const formData = {};
      formElements.forEach((el) => {
        formData[el.name] = el.value;
      });
      document.getElementById("object").innerText = JSON.stringify(formData);
    } else {
      document.getElementById("object").innerText = "Form is invalid"
    }
  };

  return (
    <>
      <h3>Form is: {isFormValid ? "Valid" : "Invalid"}</h3>
      <form className={classes.formContainer} onSubmit={(e) => submitForm(e)}>
        {formElements.map((element) => (
          <Input key={element.id} {...element} changed={(val, id) => changeHandler(val, id)} />
        ))}
        <button className={classes.submitBtn} type="submit">
          Submit
        </button>
        <pre id="object"></pre>
      </form>
    </>
  );
};

export default FormValidation;
