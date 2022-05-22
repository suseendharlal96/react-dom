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
  const components = [<FormOne fields={currentForm?.formOne?.fields} />, <FormTwo fields={currentForm?.formTwo?.fields} />];


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
