import React, { Profiler, useState } from "react";

// lazily importing second form
import { FormTwo } from "../../index";

import Input from "./Input";

import classes from "./Form.module.css";
import FormOne from "./FormOne";
import { useForm } from "./FormProvider";

const FormValidation = () => {
  const [isFormValid, setFormValid] = useState(false);
  const {
    state: { activeIndex, currentForm, steps, fieldStart },
    dispatch,
  } = useForm();
  const components = [<FormOne fields={currentForm.slice(fieldStart, fieldStart + steps)} />, <FormTwo fields={currentForm.slice(fieldStart, fieldStart + steps)} />];

  // const checkValidation = (validations, val) => {
  //   let isValid = true;
  //   if (validations.minLen) {
  //     isValid = isValid && val.trim().length >= validations.minLen;
  //   }
  //   if (validations.maxLen) {
  //     isValid = isValid && val.trim().length <= validations.maxLen;
  //   }
  //   if (validations.min) {
  //     isValid = isValid && val >= validations.min;
  //   }
  //   if (validations.max) {
  //     isValid = isValid && val <= validations.max;
  //   }
  //   return isValid;
  // };

    // const changeHandler = (val, id) => {
    //   console.log({ val, id });
    //   const clone = JSON.parse(JSON.stringify(formElements));
    //   const changedEl = clone.find((cl) => cl.id === id);
    //   console.log({ changedEl });
    //   switch (id) {
    //     case 1:
    //       changedEl.isTouched = true;
    //       if (changedEl.validations) {
    //         changedEl.isValid = checkValidation(changedEl.validations, val);
    //         changedEl.value = val;
    //       }
    //       break;
    //     case 2:
    //       changedEl.isTouched = true;
    //       if (changedEl.validations) {
    //         changedEl.isValid = checkValidation(changedEl.validations, val);
    //         changedEl.value = val;
    //       }
    //       break;
    //     default:
    //       changedEl.isTouched = true;
    //       changedEl.value = val;
    //       changedEl.isValid = true;
    //   }
    //   let formisValid = true;
    //   clone.forEach((el) => {
    //     formisValid = el.isValid && formisValid;
    //   });
    //   setFormElements(clone);
    //   setFormValid(formisValid);
    // };

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

  const performanceHandler = (...args) => {
    console.log(args);
  };

  return (
    <>
      {/* <h3>Form is: {isFormValid ? "Valid" : "Invalid"}</h3> */}
      <Profiler id="form" onRender={performanceHandler}>
        <form className={classes.formContainer} onSubmit={(e) => false}>
          {components.map((activeComponent, i) => (
            <React.Fragment key={i}>{i === activeIndex ? activeComponent : null}</React.Fragment>
          ))}
        </form>
      </Profiler>
    </>
  );
};

export default FormValidation;
